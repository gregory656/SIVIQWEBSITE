import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AlertCircle, CheckCircle2, LoaderCircle, LogIn, ShieldAlert } from 'lucide-react'
import { appLoginUrl, supabase } from '../lib/supabase'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

type Notice = { kind: 'error' | 'success'; text: string } | null

function NoticeBox({ notice }: { notice: Notice }) {
  if (!notice) return null
  const Icon = notice.kind === 'error' ? AlertCircle : CheckCircle2
  return <div className={`mt-5 flex gap-3 rounded-xl p-4 text-sm ${notice.kind === 'error' ? 'bg-red-50 text-red-800' : 'bg-[#edf7f2] text-[#07543d]'}`} role="status"><Icon className="mt-0.5 h-5 w-5 shrink-0" />{notice.text}</div>
}

function SubmitButton({ loading, children }: { loading: boolean; children: ReactNode }) {
  return <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6E4F] px-5 py-3 font-semibold text-white transition hover:bg-[#095f45] disabled:cursor-not-allowed disabled:opacity-60" disabled={loading} type="submit">{loading && <LoaderCircle className="h-5 w-5 animate-spin" />}{children}</button>
}

function GoogleButton({ label = 'Continue with Google', deleteReauth = false }: { label?: string; deleteReauth?: boolean }) {
  const [loading, setLoading] = useState(false)
  const startGoogle = async () => {
    setLoading(true)
    if (deleteReauth) sessionStorage.setItem('siviq-delete-reauth', 'true')
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: deleteReauth ? `${window.location.origin}/delete-account` : appLoginUrl } })
    if (error) setLoading(false)
  }
  return <button className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50 disabled:opacity-60" disabled={loading} onClick={startGoogle} type="button"><span className="text-xl">G</span>{label}</button>
}

export function LoginPage() {
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [notice, setNotice] = useState<Notice>(null)
  const submit = async (event: FormEvent) => {
    event.preventDefault(); setLoading(true); setNotice(null)
    try {
      if (identifier.includes('@')) {
        const { error } = await supabase.auth.signInWithPassword({ email: identifier.trim(), password })
        if (error) throw error
      } else {
        const { data, error } = await supabase.functions.invoke('sign-in-with-username', { body: { username: identifier.trim(), password } })
        if (error || !data?.session?.refresh_token) throw new Error('invalid')
        const { error: sessionError } = await supabase.auth.setSession({ refresh_token: data.session.refresh_token, access_token: data.session.access_token })
        if (sessionError) throw sessionError
      }
      navigate('/app/login', { replace: true })
    } catch {
      setNotice({ kind: 'error', text: 'Invalid email, username, or password.' })
    } finally { setLoading(false) }
  }
  return <AuthFrame title="Welcome back" description="Sign in to SIVIQ securely from the web."><form onSubmit={submit}><label className="field-label">Email or username<input autoComplete="username" className="field" onChange={(e) => setIdentifier(e.target.value)} required value={identifier} /></label><label className="field-label mt-4">Password<input autoComplete="current-password" className="field" minLength={6} onChange={(e) => setPassword(e.target.value)} required type="password" value={password} /></label><SubmitButton loading={loading}>Sign in</SubmitButton></form><GoogleButton /><a className="mt-5 block text-center text-sm font-semibold text-[#0B6E4F] hover:underline" href="/forgot-password">Forgot password?</a><NoticeBox notice={notice} /></AuthFrame>
}

export function ForgotPasswordPage() {
  const [email, setEmail] = useState(''); const [loading, setLoading] = useState(false); const [sent, setSent] = useState(false)
  const submit = async (event: FormEvent) => { event.preventDefault(); setLoading(true); await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: `${window.location.origin}/reset-password` }); setLoading(false); setSent(true) }
  return <AuthFrame title="Reset your password" description="Enter your email and we’ll send a secure reset link."><form onSubmit={submit}><label className="field-label">Email address<input autoComplete="email" className="field" onChange={(e) => setEmail(e.target.value)} required type="email" value={email} /></label><SubmitButton loading={loading}>Send reset link</SubmitButton></form>{sent && <NoticeBox notice={{ kind: 'success', text: 'If an account exists for this email, a reset link is on its way.' }} />}</AuthFrame>
}

export function ResetPasswordPage() {
  const [password, setPassword] = useState(''); const [confirm, setConfirm] = useState(''); const [loading, setLoading] = useState(false); const [notice, setNotice] = useState<Notice>(null); const [ready, setReady] = useState(false)
  useEffect(() => { supabase.auth.getSession().then(({ data }) => setReady(Boolean(data.session))) }, [])
  const submit = async (event: FormEvent) => { event.preventDefault(); if (password !== confirm) { setNotice({ kind: 'error', text: 'Passwords do not match.' }); return }; setLoading(true); const { error } = await supabase.auth.updateUser({ password }); setLoading(false); setNotice(error ? { kind: 'error', text: 'This reset link is invalid or expired. Request a new one.' } : { kind: 'success', text: 'Your password has been changed. You can now return to SIVIQ.' }) }
  return <AuthFrame title="Create a new password" description="Choose a strong password you do not use elsewhere.">{!ready ? <NoticeBox notice={{ kind: 'error', text: 'This reset link is invalid or expired. Request a new one.' }} /> : <form onSubmit={submit}><label className="field-label">New password<input autoComplete="new-password" className="field" minLength={8} onChange={(e) => setPassword(e.target.value)} required type="password" value={password} /></label><label className="field-label mt-4">Confirm new password<input autoComplete="new-password" className="field" minLength={8} onChange={(e) => setConfirm(e.target.value)} required type="password" value={confirm} /></label><SubmitButton loading={loading}>Update password</SubmitButton></form>}<NoticeBox notice={notice} />{notice?.kind === 'success' && <a className="mt-5 block text-center font-semibold text-[#0B6E4F] hover:underline" href="/app/login">Return to SIVIQ</a>}</AuthFrame>
}

export function AppHandoffPage() {
  useEffect(() => { const timer = window.setTimeout(() => { window.location.href = 'siviq://login' }, 300); return () => window.clearTimeout(timer) }, [])
  return <AuthFrame title="Return to SIVIQ" description="We’re opening the SIVIQ app on your device."><a className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0B6E4F] px-5 py-3 font-semibold text-white" href="siviq://login">Open SIVIQ</a><p className="mt-5 text-center text-sm text-slate-600">If the app does not open, install or update SIVIQ from Google Play, then try again.</p></AuthFrame>
}

export function OAuthAppHandoffPage() {
  const location = useLocation()
  const [state, setState] = useState<{
    destination: string
    error: string | null
    ready: boolean
  }>({ destination: '', error: null, ready: false })

  useEffect(() => {
    let active = true
    let timer: number | undefined

    const finishCallback = async () => {
      const callbackUrl = new URL(window.location.href)
      const requestedIntent = callbackUrl.searchParams.get('intent') === 'signup' ? 'signup' : 'login'
      const isKenyan = callbackUrl.searchParams.get('kenyan') !== 'false'
      const code = callbackUrl.searchParams.get('code')

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) throw error
      }

      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError || !user) throw userError ?? new Error('No authenticated user was returned.')

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('display_name, username')
        .eq('id', user.id)
        .maybeSingle()
      if (profileError) throw profileError

      const hasCompletedProfile = Boolean(profile?.display_name?.trim() && profile?.username?.trim())
      const intent = hasCompletedProfile ? 'login' : requestedIntent === 'signup' ? 'signup' : 'signup'
      const name = typeof user.user_metadata.full_name === 'string'
        ? user.user_metadata.full_name
        : typeof user.user_metadata.name === 'string'
          ? user.user_metadata.name
          : ''
      const appParameters = new URLSearchParams({
        intent,
        kenyan: String(isKenyan),
        name,
        email: user.email ?? '',
      })
      const destination = `siviq://login?${appParameters}`

      // Do not leave callback credentials in browser history.
      window.history.replaceState(null, '', `/app/login?intent=${intent}&kenyan=${isKenyan}`)
      if (!active) return
      setState({ destination, error: null, ready: true })
      timer = window.setTimeout(() => window.location.replace(destination), 900)
    }

    finishCallback().catch(() => {
      if (active) {
        setState({
          destination: '',
          error: 'We could not complete your secure sign-in. Please return to SIVIQ and try again.',
          ready: true,
        })
      }
    })

    return () => {
      active = false
      if (timer !== undefined) window.clearTimeout(timer)
    }
  }, [location.key])

  if (state.error) {
    return <AuthFrame title="Sign-in needs another try" description={state.error}><a className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0B6E4F] px-5 py-3 font-semibold text-white" href="/login">Return to sign in</a></AuthFrame>
  }
  if (!state.ready) {
    return <AuthFrame title="Completing secure sign-in" description="Please wait while we securely finish your sign-in."><div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#0B6E4F]"><LoaderCircle className="h-5 w-5 animate-spin" />Verifying your account…</div></AuthFrame>
  }
  return <AuthFrame title="You are signed in" description="Opening SIVIQ and taking you to the right place."><a className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0B6E4F] px-5 py-3 font-semibold text-white" href={state.destination}>Open SIVIQ</a><p className="mt-5 text-center text-sm text-slate-600">If the app does not open, install or update SIVIQ from Google Play, then use the button above.</p></AuthFrame>
}

export function DeleteAccountPage() {
  const [email, setEmail] = useState<string | null>(null); const [password, setPassword] = useState(''); const [confirmation, setConfirmation] = useState(''); const [reauthenticated, setReauthenticated] = useState(() => { const pending = sessionStorage.getItem('siviq-delete-reauth') === 'true'; if (pending) sessionStorage.removeItem('siviq-delete-reauth'); return pending }); const [loading, setLoading] = useState(false); const [notice, setNotice] = useState<Notice>(null)
  useEffect(() => { supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null)) }, [])
  const passwordReauth = async () => { if (!email || !password) return; setLoading(true); const { error } = await supabase.auth.signInWithPassword({ email, password }); setLoading(false); if (error) setNotice({ kind: 'error', text: 'Password confirmation failed.' }); else { setReauthenticated(true); setNotice({ kind: 'success', text: 'Identity confirmed. You may now delete the account.' }) } }
  const deleteAccount = async () => { if (!reauthenticated || confirmation !== 'DELETE') return; setLoading(true); const { error } = await supabase.functions.invoke('delete-account', { method: 'POST' }); setLoading(false); setNotice(error ? { kind: 'error', text: 'We could not delete your account. Please try again.' } : { kind: 'success', text: 'Your SIVIQ account has been permanently deleted.' }); if (!error) await supabase.auth.signOut() }
  return <AuthFrame title="Delete your SIVIQ account" description="This action permanently deletes your SIVIQ account and cannot be undone.">{!email ? <><p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Sign in before requesting account deletion.</p><a className="mt-5 block text-center font-semibold text-[#0B6E4F] hover:underline" href="/login">Go to sign in</a></> : <><p className="text-sm text-slate-600">Signed in as <strong>{email}</strong>.</p><label className="field-label mt-5">Confirm your password<input autoComplete="current-password" className="field" onChange={(e) => setPassword(e.target.value)} type="password" value={password} /></label><button className="mt-3 w-full rounded-xl border border-[#0B6E4F] px-5 py-3 font-semibold text-[#0B6E4F]" disabled={loading || !password} onClick={passwordReauth} type="button">Confirm with password</button><GoogleButton deleteReauth label="Reauthenticate with Google" /><label className="field-label mt-5">Type DELETE to confirm<input className="field" onChange={(e) => setConfirmation(e.target.value)} value={confirmation} /></label><button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-semibold text-white disabled:opacity-50" disabled={!reauthenticated || confirmation !== 'DELETE' || loading} onClick={deleteAccount} type="button"><ShieldAlert className="h-5 w-5" />Delete account permanently</button></>}<NoticeBox notice={notice} /></AuthFrame>
}

function AuthFrame({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <><Seo title={`${title} | SIVIQ`} description={description} /><Section className="bg-[#f7f9f8]" eyebrow="SIVIQ account" title={title}><div className="mx-auto max-w-md"><Card><div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf7f2] text-[#0B6E4F]"><LogIn className="h-6 w-6" /></div><p className="mb-6 text-slate-600">{description}</p>{children}</Card></div></Section></>
}
