import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AlertCircle, CheckCircle2, LoaderCircle, UserCircle2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

// 47 Kenyan counties
const KENYA_COUNTIES = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa',
    'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi',
    'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos',
    'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Murang\'a',
    'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 'Nyeri',
    'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi', 'Trans Nzoia',
    'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot',
]

type Notice = { kind: 'error' | 'success'; text: string } | null

function NoticeBox({ notice }: { notice: Notice }) {
    if (!notice) return null
    const Icon = notice.kind === 'error' ? AlertCircle : CheckCircle2
    return (
        <div
            className={`mt-5 flex gap-3 rounded-xl p-4 text-sm ${notice.kind === 'error' ? 'bg-red-50 text-red-800' : 'bg-[#edf7f2] text-[#07543d]'}`}
            role="status"
        >
            <Icon className="mt-0.5 h-5 w-5 shrink-0" />
            {notice.text}
        </div>
    )
}

export function ProfileSetupPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    // Pre-fill from query params set by OAuthAppHandoffPage
    const prefillName = searchParams.get('name') ?? ''
    const prefillEmail = searchParams.get('email') ?? ''
    const isKenyan = searchParams.get('kenyan') !== 'false'

    const [displayName, setDisplayName] = useState(prefillName)
    const [username, setUsername] = useState('')
    const [county, setCounty] = useState('')
    const [subCounty, setSubCounty] = useState('')
    const [loading, setLoading] = useState(false)
    const [notice, setNotice] = useState<Notice>(null)
    const [sessionChecked, setSessionChecked] = useState(false)

    // Guard: if no session, redirect to login
    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            if (!data.user) {
                navigate('/login', { replace: true })
            } else {
                setSessionChecked(true)
            }
        })
    }, [navigate])

    const validateUsername = (value: string) =>
        /^[a-zA-Z0-9_]{3,30}$/.test(value)

    const submit = async (event: FormEvent) => {
        event.preventDefault()
        setNotice(null)

        if (!validateUsername(username)) {
            setNotice({ kind: 'error', text: 'Username must be 3–30 characters and contain only letters, numbers, and underscores.' })
            return
        }

        setLoading(true)

        try {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) throw new Error('Not authenticated.')

            // Check username uniqueness
            const { data: existing } = await supabase
                .from('profiles')
                .select('id')
                .eq('username', username.trim())
                .neq('id', user.id)
                .maybeSingle()

            if (existing) {
                setNotice({ kind: 'error', text: 'That username is already taken. Please choose a different one.' })
                setLoading(false)
                return
            }

            const profileData: Record<string, string> = {
                id: user.id,
                display_name: displayName.trim(),
                username: username.trim(),
            }
            if (isKenyan && county) profileData.county = county
            if (isKenyan && subCounty.trim()) profileData.sub_county = subCounty.trim()

            const { error } = await supabase
                .from('profiles')
                .upsert(profileData, { onConflict: 'id' })

            if (error) throw error

            setNotice({ kind: 'success', text: 'Profile saved! Taking you to SIVIQ…' })
            setTimeout(() => navigate('/', { replace: true }), 1500)
        } catch {
            setNotice({ kind: 'error', text: 'Something went wrong saving your profile. Please try again.' })
        } finally {
            setLoading(false)
        }
    }

    if (!sessionChecked) {
        return (
            <>
                <Seo title="Profile setup | SIVIQ" description="Complete your SIVIQ profile to get started." />
                <Section className="bg-[#f7f9f8]" eyebrow="SIVIQ account" title="Setting up your profile">
                    <div className="mx-auto max-w-md">
                        <Card>
                            <div className="flex items-center justify-center gap-2 py-6 text-sm font-semibold text-[#0B6E4F]">
                                <LoaderCircle className="h-5 w-5 animate-spin" />
                                Loading…
                            </div>
                        </Card>
                    </div>
                </Section>
            </>
        )
    }

    return (
        <>
            <Seo title="Profile setup | SIVIQ" description="Complete your SIVIQ profile to get started." />
            <Section className="bg-[#f7f9f8]" eyebrow="SIVIQ account" title="Complete your profile">
                <div className="mx-auto max-w-md">
                    <Card>
                        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf7f2] text-[#0B6E4F]">
                            <UserCircle2 className="h-6 w-6" />
                        </div>
                        <p className="mb-6 text-slate-600">
                            {prefillEmail
                                ? `Welcome! You're signing in as ${prefillEmail}. Just a few details to finish setting up your account.`
                                : 'Fill in your details to finish setting up your SIVIQ account.'}
                        </p>

                        <form onSubmit={submit}>
                            {/* Display Name */}
                            <label className="field-label">
                                Display name
                                <input
                                    autoComplete="name"
                                    className="field"
                                    maxLength={60}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    placeholder="Your full name or nickname"
                                    required
                                    value={displayName}
                                />
                            </label>

                            {/* Username */}
                            <label className="field-label mt-4">
                                Username
                                <input
                                    autoComplete="username"
                                    className="field"
                                    maxLength={30}
                                    minLength={3}
                                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                                    placeholder="e.g. jane_wanjiku"
                                    required
                                    value={username}
                                />
                            </label>
                            <p className="mt-1 text-xs text-slate-500">3–30 characters, letters, numbers, and underscores only.</p>

                            {/* Kenyan-specific fields — shown only when kenyan=true */}
                            {isKenyan && (
                                <>
                                    <label className="field-label mt-4">
                                        County
                                        <select
                                            className="field"
                                            onChange={(e) => setCounty(e.target.value)}
                                            required
                                            value={county}
                                        >
                                            <option value="">Select your county</option>
                                            {KENYA_COUNTIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="field-label mt-4">
                                        Sub-county
                                        <span className="ml-1 text-xs font-normal text-slate-400">(optional)</span>
                                        <input
                                            className="field"
                                            maxLength={80}
                                            onChange={(e) => setSubCounty(e.target.value)}
                                            placeholder="e.g. Westlands"
                                            value={subCounty}
                                        />
                                    </label>
                                </>
                            )}

                            <button
                                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6E4F] px-5 py-3 font-semibold text-white transition hover:bg-[#095f45] disabled:cursor-not-allowed disabled:opacity-60"
                                disabled={loading}
                                type="submit"
                            >
                                {loading && <LoaderCircle className="h-5 w-5 animate-spin" />}
                                Save and continue
                            </button>
                        </form>

                        <NoticeBox notice={notice} />
                    </Card>
                </div>
            </Section>
        </>
    )
}
