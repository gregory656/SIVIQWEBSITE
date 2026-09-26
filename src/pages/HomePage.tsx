import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Download, MapPin, ShieldCheck } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { appSections, features, securityHighlights } from '../data/features'
import { site } from '../data/site'

const steps = ['Join SIVIQ', 'Discover Projects', 'Report Progress', 'Engage Communities', 'Hold Leaders Accountable']
const stats = [
  { label: 'Registered Users', value: 'Coming soon', icon: '👥' },
  { label: 'Projects Tracked', value: 'Coming soon', icon: '🏗️' },
  { label: 'Counties Covered', value: '47', icon: '📍' },
  { label: 'Reports Submitted', value: 'Coming soon', icon: '📋' },
]

// Feature carousel component
function FeatureSlider() {
  const [current, setCurrent] = useState(0)
  const total = features.length

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 5000)
    return () => clearInterval(timer)
  }, [total])

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const feature = features[current]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img
            key={current}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
            src={site.images[feature.imageKey]}
            alt={`${feature.title} visual`}
            loading="lazy"
            style={{ animation: 'rise-in 600ms ease-out both' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:bg-gradient-to-b" />
          {/* Slide counter */}
          <div className="absolute bottom-4 left-4 flex gap-1.5">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[#0B6E4F]' : 'w-1.5 bg-white/60'}`}
                aria-label={`Go to feature ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center p-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB703]">{feature.kicker}</span>
          <h3 className="mt-3 text-2xl font-black text-[#121212]" style={{ animation: 'rise-in 500ms ease-out both' }}>
            {feature.title}
          </h3>
          <p className="mt-4 leading-7 text-[#374151]">{feature.description}</p>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
            <span>{current + 1} / {total}</span>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] text-[#374151] transition hover:border-[#0B6E4F] hover:text-[#0B6E4F]"
              aria-label="Previous feature"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] text-[#374151] transition hover:border-[#0B6E4F] hover:text-[#0B6E4F]"
              aria-label="Next feature"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <Seo
        title="SIVIQ Africa | Civic Accountability Platform – Kenya"
        description="SIVIQ is an independent civic accountability platform helping communities report, discuss, verify, and track public projects across all 47 counties in Kenya."
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#071612] text-white">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          src={site.images.hero}
          alt="Aerial view of Nairobi civic infrastructure"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071612]/90 via-[#071612]/75 to-[#0B6E4F]/20" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl rise-in">
            {/* Glass badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <img className="h-9 w-9 rounded-full object-cover ring-2 ring-[#0B6E4F]/50" src={site.logo} alt="SIVIQ logo" />
              <span className="text-sm font-bold">{site.tagline}</span>
              <span className="h-2 w-2 rounded-full bg-[#FFB703] animate-pulse" />
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
              SIVIQ{' '}
              <span className="gradient-text">Africa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              An independent civic accountability platform helping communities report, discuss, verify, and track public projects across <strong className="text-white">Kenya's 47 counties</strong>.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0B6E4F] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0B6E4F]/30 transition hover:bg-[#095f45] hover:shadow-[#0B6E4F]/50 hover:-translate-y-0.5"
                href={site.downloadLinks.android}
                rel="noreferrer"
                target="_blank"
              >
                <Download aria-hidden size={18} />
                Download for Android
              </a>
              <Button href="/about" variant="secondary">
                Our Story
                <ArrowRight aria-hidden size={18} />
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/55">Free on Google Play · Kenya · Independent</p>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[['47', 'counties'], ['5', 'app layers'], ['100%', 'independent']].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-2xl font-black text-[#FFB703]">{val}</p>
                  <p className="text-xs text-white/55 uppercase tracking-wider">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll board card */}
          <div className="scroll-board relative mx-auto max-w-md p-6 text-[#2b2117]">
            <span className="pin pin-left" aria-hidden />
            <span className="pin pin-right" aria-hidden />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 border-b border-[#b98f5d]/45 pb-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#7c4e24]">County evidence note</p>
                  <p className="mt-1 text-2xl font-black">Project evidence board</p>
                </div>
                <MapPin aria-hidden className="text-[#0B6E4F]" size={26} />
              </div>
              <div className="mt-5 overflow-hidden rounded-md border border-[#cfa66f]">
                <img className="h-52 w-full object-cover sepia-[0.15]" src={site.images.community} alt="Community public project reporting" />
              </div>
              <div className="mt-5 grid gap-3">
                {['county context', 'evidence image', 'community approval', 'leader response'].map((status) => (
                  <div className="flex items-center justify-between border-b border-[#cfa66f]/45 pb-2 text-sm font-bold" key={status}>
                    <span>{status}</span>
                    <span className="h-2 w-2 rounded-full bg-[#0B6E4F]" />
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-[#5c432d]">
                A public report should feel traceable: where it happened, what evidence exists, who discussed it, and what changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM SECTIONS ===== */}
      <Section eyebrow="Platform" title="Five civic participation layers" description="SIVIQ combines social discovery, evidence-based project reporting, leader rankings, messaging, and security controls into one platform.">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {appSections.map((item, i) => (
            <div
              className="section-chip group relative overflow-hidden rounded-xl border-l-4 border-[#0B6E4F] bg-white px-5 py-4 text-sm font-bold text-[#121212] shadow-sm cursor-default"
              key={item}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="absolute inset-0 bg-[#0B6E4F] opacity-0 transition-opacity group-hover:opacity-5" />
              <span className="relative">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FEATURE SLIDER ===== */}
      <Section className="bg-white" eyebrow="Features" title="Built for evidence, context, and accountability">
        <FeatureSlider />
      </Section>

      {/* ===== HOW IT WORKS – TIMELINE ===== */}
      <section className="relative overflow-hidden bg-[#121212] py-20 text-white">
        <img className="absolute inset-0 h-full w-full object-cover opacity-25" src={site.images.nairobi} alt="Nairobi city background" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/70 to-[#121212]/90" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#FFB703]">How it works</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            From local observation to structured civic intelligence
          </h2>
          <div className="mt-12 grid gap-0 border-y border-white/20 md:grid-cols-5">
            {steps.map((step, index) => (
              <div className="timeline-step group border-b border-white/20 p-5 transition-colors hover:bg-white/5 md:border-b-0 md:border-r md:last:border-r-0" key={step}>
                <p className="text-sm font-black text-[#FFB703]">0{index + 1}</p>
                <h3 className="mt-3 font-bold leading-snug">{step}</h3>
                <div className="mt-4 h-1 w-8 rounded-full bg-[#0B6E4F] transition-all group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECURITY ===== */}
      <Section className="bg-white" eyebrow="Security" title="Account controls designed for trust">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B6E4F] p-8 text-white">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/5" />
            <ShieldCheck aria-hidden className="relative mb-4 text-white" size={36} />
            <h3 className="relative text-2xl font-black">Privacy and security controls</h3>
            <p className="relative mt-3 leading-7 text-white/85">
              SIVIQ supports secure authentication, PIN protection, biometric unlock, active sessions, trusted devices, security activity logs, data export, and account deletion recovery.
            </p>
            <div className="relative mt-6 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Powered by Supabase
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {securityHighlights.map((item) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-4 transition hover:border-[#0B6E4F]/30 hover:bg-[#edf7f2]"
                key={item}
              >
                <CheckCircle2 aria-hidden className="shrink-0 text-[#198754]" size={20} />
                <span className="text-sm font-medium text-[#374151]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== STATS ===== */}
      <Section eyebrow="Statistics" title="Public impact metrics">
        <div className="grid gap-0 border-y border-[#E5E7EB] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon }) => (
            <div className="stat-card border-b border-[#E5E7EB] p-8 text-center last:border-b-0 sm:border-r lg:border-b-0" key={label}>
              <p className="text-3xl">{icon}</p>
              <p className="mt-3 text-4xl font-black text-[#0B6E4F]">{value}</p>
              <p className="mt-2 text-sm font-semibold text-[#6B7280]">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[#0B6E4F] py-16 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #FFB703 0%, transparent 60%)' }} />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            <img src={site.logo} alt="" className="h-5 w-5 rounded" aria-hidden="true" />
            SIVIQ Africa
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Join a community built for<br className="hidden sm:block" /> civic transparency and accountability.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            SIVIQ is independent and is not affiliated with, endorsed by, or approved by any government institution.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0B6E4F] shadow-xl transition hover:bg-white/90 hover:-translate-y-0.5"
              href={site.downloadLinks.android}
              rel="noreferrer"
              target="_blank"
            >
              <Download aria-hidden size={18} />
              Get it on Google Play
            </a>
            <Button href="/about" variant="secondary">
              Learn more
              <ArrowRight aria-hidden size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
