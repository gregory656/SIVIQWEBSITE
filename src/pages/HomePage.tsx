import { ArrowRight, CheckCircle2, Download, MapPin, ShieldCheck } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { appSections, features, securityHighlights } from '../data/features'
import { site } from '../data/site'

const steps = ['Join SIVIQ', 'Discover Projects', 'Report Progress', 'Engage Communities', 'Hold Leaders Accountable']
const stats = [
  ['Registered Users', 'Coming soon'],
  ['Projects Tracked', 'Coming soon'],
  ['Counties Covered', '47'],
  ['Reports Submitted', 'Coming soon'],
]

export function HomePage() {
  return (
    <>
      <Seo
        title="SIVIQ Africa | Building better community together"
        description="SIVIQ is an independent civic accountability platform helping communities report, discuss, verify, and track public projects across Kenya."
      />

      <section className="relative overflow-hidden bg-[#071612] text-white">
        <img className="absolute inset-0 h-full w-full object-cover opacity-45" src={site.images.hero} alt="Nairobi civic infrastructure background" />
        <div className="absolute inset-0 bg-[#071612]/75" />
        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl rise-in">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#071612] px-4 py-2">
              <img className="h-9 w-9 rounded-full object-cover" src={site.logo} alt="SIVIQ logo" />
              <span className="text-sm font-bold">{site.tagline}</span>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">SIVIQ Africa</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              SIVIQ is an independent civic accountability platform helping communities report, discuss, verify, and track public projects across Kenya.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button disabled>
                <Download aria-hidden size={18} />
                Download App
              </Button>
              <Button href="/about" variant="secondary">
                Read More About SIVIQ
                <ArrowRight aria-hidden size={18} />
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">Play Store links will be available once we launch the app.</p>
          </div>

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
                <img className="h-52 w-full object-cover sepia-[0.15]" src={site.images.community} alt="Community public service reporting visual" />
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

      <Section eyebrow="Platform" title="Civic participation layers" description="SIVIQ combines social discovery, evidence-based project reporting, leader rankings, messaging, and security controls into one participation platform.">
        <div className="grid gap-3 md:grid-cols-5">
          {appSections.map((item) => (
            <div className="border-l-4 border-[#0B6E4F] bg-white px-4 py-3 text-sm font-bold text-[#121212]" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Features" title="Built for evidence, context, and accountability">
        <div className="divide-y divide-[#E5E7EB]">
          {features.map(({ title, description, imageKey, kicker }, index) => (
            <article className="grid items-center gap-6 py-8 md:grid-cols-[0.85fr_1.15fr]" key={title}>
              <img
                className={`h-56 w-full object-cover ${index % 2 === 1 ? 'md:order-2' : ''}`}
                src={site.images[imageKey]}
                alt={`${title} civic feature visual`}
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#0B6E4F]">{kicker}</p>
                <h3 className="mt-2 text-2xl font-black text-[#121212]">{title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-[#374151]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-[#121212] py-20 text-white">
        <img className="absolute inset-0 h-full w-full object-cover opacity-25" src={site.images.nairobi} alt="Nairobi city background" />
        <div className="absolute inset-0 bg-[#121212]/70" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#FFB703]">How it works</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">From local observation to structured civic intelligence</h2>
          <div className="mt-12 grid gap-0 border-y border-white/20 md:grid-cols-5">
          {steps.map((step, index) => (
            <div className="timeline-step border-b border-white/20 p-5 md:border-b-0 md:border-r md:last:border-r-0" key={step}>
              <p className="text-sm font-bold text-[#FFB703]">0{index + 1}</p>
              <h3 className="mt-3 font-bold">{step}</h3>
              <p className="mt-4 h-1 w-12 bg-[#0B6E4F]" />
            </div>
          ))}
          </div>
        </div>
      </section>

      <Section className="bg-white" eyebrow="Security" title="Account controls designed for trust">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#0B6E4F] p-7 text-white">
            <ShieldCheck aria-hidden className="mb-4 text-white" size={32} />
            <h3 className="text-2xl font-black">Privacy and security controls</h3>
            <p className="mt-3 leading-7 text-white/85">
              SIVIQ supports secure authentication, PIN protection, biometric unlock, active sessions, trusted devices, security activity logs, data export, and account deletion recovery.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {securityHighlights.map((item) => (
              <div className="flex items-center gap-3 border-b border-[#E5E7EB] p-4" key={item}>
                <CheckCircle2 aria-hidden className="shrink-0 text-[#198754]" size={20} />
                <span className="font-medium text-[#374151]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Statistics" title="Public impact metrics">
        <div className="grid gap-0 border-y border-[#E5E7EB] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value]) => (
            <div className="border-b border-[#E5E7EB] p-6 last:border-b-0 sm:border-r lg:border-b-0" key={label}>
              <p className="text-sm font-semibold text-[#6B7280]">{label}</p>
              <p className="mt-3 text-3xl font-black text-[#0B6E4F]">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-[#0B6E4F] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join a community built for civic transparency, evidence, and accountability.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            SIVIQ is independent and is not affiliated with, endorsed by, or approved by any government institution.
          </p>
        </div>
      </section>
    </>
  )
}
