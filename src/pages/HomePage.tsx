import { useState, useEffect } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  GraduationCap,
  Handshake,
  Home,
  Laptop,
  MessagesSquare,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Wallet,
  Zap,
} from 'lucide-react'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { appSections, features, securityHighlights } from '../data/features'
import { site } from '../data/site'

const steps = ['Join SIVIQ', 'Explore & Discover', 'Offer or Request', 'Chat & Agree', 'Deliver & Get Paid']
const stats = [
  { label: 'Service categories', value: '8+', icon: Store },
  { label: 'Campus-first markets', value: 'Kenya', icon: Search },
  { label: 'Buyer & seller in one', value: '100%', icon: Handshake },
  { label: 'Safety actions', value: 'Always free', icon: ShieldCheck },
]

const categories = [
  { name: 'Personal Care', items: 'Hairdressers · Barbers · Makeup · Nails', icon: Sparkles },
  { name: 'Home Services', items: 'Laundry · Cleaning · Gas · Repairs', icon: Home },
  { name: 'Technology', items: 'Phone & PC repair · Cyber · Web dev', icon: Smartphone },
  { name: 'Buy & Sell', items: 'Furniture · Electronics · Fashion', icon: ShoppingBag },
  { name: 'Education', items: 'Tutoring · Coaching · Training', icon: GraduationCap },
  { name: 'Digital Services', items: 'Data bundles · Digital products', icon: Zap },
  { name: 'Delivery & Errands', items: 'Collection · Parcels · Local errands', icon: Truck },
  { name: 'Freelance', items: 'Dev work · Design · Writing', icon: Laptop },
]

const pillars = [
  { title: 'Marketplace', body: 'Services, freelance work, digital services and physical products in one trusted venue.', icon: Store },
  { title: 'Community', body: 'A social environment where connections become meaningful economic opportunities.', icon: MessagesSquare },
  { title: 'Communication', body: 'Direct messaging, group chats and structured hiring conversations.', icon: MessagesSquare },
  { title: 'Trust', body: 'Verification, verified reviews and reputation built on real transactions.', icon: BadgeCheck },
  { title: 'Wallet', body: 'Siviq Credits, earnings tracking and a transparent financial ledger.', icon: Wallet },
  { title: 'Intelligence', body: 'Smart matching, moderation and market insights that protect the platform.', icon: Search },
]

// Feature carousel
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
    <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 overflow-hidden bg-[#0B1220] md:h-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/40 via-[#0B1220] to-[#06B6D4]/30" />
          <img
            key={current}
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700"
            src={site.images[feature.imageKey]}
            alt={`${feature.title} visual`}
            loading="lazy"
            style={{ animation: 'rise-in 600ms ease-out both' }}
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-[#22D3EE]' : 'w-2 bg-white/60'}`}
                aria-label={`Go to feature ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center p-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#0D9488]">{feature.kicker}</span>
          <h3 className="mt-3 text-2xl font-black text-[#0B1220]" style={{ animation: 'rise-in 500ms ease-out both' }}>
            {feature.title}
          </h3>
          <p className="mt-4 leading-7 text-[#475569] font-medium">{feature.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-bold text-[#94A3B8]">{current + 1} of {total}</span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white text-[#0B1220] transition hover:border-[#0D9488] hover:bg-[#ECFEFF]"
                aria-label="Previous feature"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white text-[#0B1220] transition hover:border-[#0D9488] hover:bg-[#ECFEFF]"
                aria-label="Next feature"
              >
                <ChevronRight size={18} />
              </button>
            </div>
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
        title="SIVIQ | Your Campus. Your Market. Your Network."
        description="SIVIQ is a campus-first social commerce and freelance marketplace connecting buyers, sellers, and student entrepreneurs across Kenyan campuses and communities."
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white">
        {/* Brand gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(50rem_30rem_at_15%_-10%,rgba(37,99,235,0.45),transparent),radial-gradient(45rem_30rem_at_90%_10%,rgba(6,182,212,0.4),transparent),radial-gradient(40rem_30rem_at_50%_110%,rgba(13,148,136,0.35),transparent)]" />
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          src={site.images.hero}
          alt=""
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl rise-in">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <img className="h-9 w-9 rounded-full object-cover ring-2 ring-[#22D3EE]" src={site.logo} alt="SIVIQ logo" />
              <span className="text-sm font-bold text-white/90">{site.tagline}</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-white">
              Where campus
              <span className="block bg-gradient-to-r from-[#38BDF8] via-[#22D3EE] to-[#2DD4BF] bg-clip-text text-transparent">
                meets commerce
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 font-medium">
              SIVIQ is a <strong className="text-[#22D3EE]">social commerce and freelance marketplace</strong> — discover services, offer your skills, buy and sell products, and build a trusted reputation within your community.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-6 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
                href={site.downloadLinks.android}
                rel="noreferrer"
                target="_blank"
              >
                <Download aria-hidden size={18} />
                Download for Android
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:border-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B1220]"
                href="/about"
              >
                Our Story
                <ArrowRight aria-hidden size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-white/60">Free on Google Play · Campus-first · Kenya</p>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              {[
                ['7', 'product pillars'],
                ['8+', 'market categories'],
                ['2-in-1', 'buyer & seller'],
                ['100%', 'community-first'],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-3xl font-black text-[#22D3EE]">{val}</p>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wider">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <Section eyebrow="The platform" title="Seven pillars. One trusted marketplace." description="SIVIQ combines social networking, commerce, communication, trust, and financial infrastructure into a single ecosystem built for real communities.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ title, body, icon: Icon }, i) => (
            <div
              key={title}
              className="fade-up group rounded-2xl border border-[#E2E8F0] bg-white p-6 transition hover:-translate-y-1 hover:border-[#0D9488]/50 hover:shadow-lg hover:shadow-teal-500/10"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white shadow-sm">
                <Icon aria-hidden size={20} />
              </span>
              <h3 className="mt-4 text-lg font-black text-[#0B1220]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== APP SECTIONS ===== */}
      <section className="bg-[#0B1220] py-14 sm:py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#22D3EE]">Inside the app</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Five tabs. Zero clutter.</h2>
            <p className="mt-4 text-base leading-7 text-white/70">A focused bottom navigation designed for speed: Home, Explore, Create, Chats, Profile.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {appSections.map((item, i) => (
              <div
                className="section-chip group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white backdrop-blur transition hover:border-[#22D3EE]"
                key={item}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <Section className="bg-white" eyebrow="Explore" title="A market for everything your campus needs">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, items, icon: Icon }) => (
            <div
              key={name}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F5F9FC] p-5 transition hover:-translate-y-1 hover:border-[#06B6D4] hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D9488]/10 text-[#0D9488]">
                <Icon aria-hidden size={20} />
              </span>
              <h3 className="mt-3 font-black text-[#0B1220]">{name}</h3>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#64748B]">{items}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FEATURE SLIDER ===== */}
      <Section eyebrow="Features" title="Built for trust, discovery, and real transactions">
        <FeatureSlider />
      </Section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative overflow-hidden bg-[#0B1220] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_25rem_at_80%_0%,rgba(37,99,235,0.35),transparent),radial-gradient(35rem_25rem_at_10%_100%,rgba(13,148,136,0.3),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#22D3EE]">How it works</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            From first hello to paid and reviewed
          </h2>
          <div className="mt-12 grid gap-0 border-y border-white/15 md:grid-cols-5">
            {steps.map((step, index) => (
              <div className="timeline-step group border-b border-white/15 p-5 transition-colors hover:bg-white/5 md:border-b-0 md:border-r md:last:border-r-0" key={step}>
                <p className="text-sm font-black text-[#22D3EE]">0{index + 1}</p>
                <h3 className="mt-3 font-bold leading-snug">{step}</h3>
                <div className="mt-4 h-1 w-8 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] transition-all group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECURITY & TRUST ===== */}
      <Section className="bg-white" eyebrow="Safety & trust" title="Protection is never paywalled">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#0D9488] to-[#06B6D4] p-8 text-white">
            <ShieldCheck aria-hidden className="mb-4 text-white" size={36} />
            <h3 className="text-2xl font-black">The Siviq Safety Centre</h3>
            <p className="mt-3 leading-7 text-white/95 font-medium">
              Report scams, block users, appeal moderation decisions, and get help with disputes. Verification is progressive, reviews only come from completed transactions, and Siviq Intelligence watches for fraud — with human review on every serious call.
            </p>
            <div className="mt-6 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
              Safety actions are always free
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {securityHighlights.map((item) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 transition hover:border-[#0D9488] hover:bg-[#ECFEFF]"
                key={item}
              >
                <CheckCircle2 aria-hidden className="shrink-0 text-[#0D9488]" size={20} />
                <span className="text-sm font-bold text-[#0B1220]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== STATS ===== */}
      <Section eyebrow="At a glance" title="Marketplace metrics">
        <div className="grid gap-0 border-y border-[#E2E8F0] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div className="stat-card border-b border-[#E2E8F0] p-8 text-center last:border-b-0 sm:border-r lg:border-b-0" key={label}>
              <Icon aria-hidden className="mx-auto text-[#0D9488]" size={28} />
              <p className="mt-3 text-4xl font-black text-[#0D9488]">{value}</p>
              <p className="mt-2 text-sm font-bold text-[#475569]">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[#0B1220] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(35rem_20rem_at_50%_120%,rgba(6,182,212,0.4),transparent),radial-gradient(30rem_20rem_at_0%_0%,rgba(37,99,235,0.35),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white">
            <img src={site.logo} alt="" className="h-5 w-5 rounded" aria-hidden="true" />
            SIVIQ 2.0
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl text-white">
            Your campus has talent.<br className="hidden sm:block" /> Give it a market.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 font-medium">
            Whether you're a student entrepreneur, a freelancer, or simply someone who needs a service done — SIVIQ is where your community trades.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-7 py-3 text-sm font-black text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
              href={site.downloadLinks.android}
              rel="noreferrer"
              target="_blank"
            >
              <Download aria-hidden size={18} />
              Get it on Google Play
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-3 text-sm font-black text-white transition hover:border-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B1220]"
              href="/contact"
            >
              Talk to the CEO
              <ArrowRight aria-hidden size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
