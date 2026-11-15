import { Mail } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'
import ceo from '../assets/ceo.jpeg'

export function LeadershipPage() {
  const leader = {
    name: 'Gregory Steve',
    position: 'CEO & Founder',
    image: ceo,
  }

  return (
    <>
      <Seo title="Leadership | SIVIQ" description="Meet the CEO and founder of SIVIQ, the campus-first social commerce marketplace." />
      <section className="relative overflow-hidden bg-[#0B1220] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_25rem_at_80%_0%,rgba(37,99,235,0.4),transparent),radial-gradient(35rem_25rem_at_10%_100%,rgba(6,182,212,0.35),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#22D3EE]">Leadership</p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Built by a founder who knows the campus grind</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            SIVIQ is led by its founder and CEO — a software and systems engineer focused on turning campus talent into trusted, paid opportunity.
          </p>
        </div>
      </section>

      <Section className="bg-white" eyebrow="CEO & Founder" title="The person behind SIVIQ">
        <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-8 border-[#ECFEFF] shadow-2xl lg:mx-0">
            <img className="h-full w-full object-cover" src={leader.image} alt="Gregory Steve, CEO & Founder of SIVIQ" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#0D9488]">{leader.position}</p>
            <h2 className="mt-2 text-4xl font-black text-[#0B1220]">{leader.name}</h2>
            <blockquote className="mt-5 border-l-4 border-[#22D3EE] pl-5 text-2xl font-semibold leading-9 text-[#1f2937]">
              "Your campus already has the talent. SIVIQ exists to help it get paid, trusted, and discovered."
            </blockquote>
            <p className="mt-5 max-w-2xl leading-7 text-[#4B5563]">
              Gregory Steve is the CEO and Founder of SIVIQ — a software and embedded systems engineer building the campus-first social commerce marketplace for Kenyan communities. He leads product, engineering, and the long-term vision of connecting buyers and sellers through trust.
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#CFF3FA] bg-[#ECFEFF] px-3 text-sm font-bold text-[#0D9488]"
                href={`mailto:${site.emails.admin}?subject=${encodeURIComponent('SIVIQ website inquiry')}`}
                aria-label="Email the SIVIQ CEO"
              >
                <Mail aria-hidden size={18} />
                <span>{site.emails.admin}</span>
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#CFF3FA] bg-[#ECFEFF] px-3 text-sm font-bold text-[#0D9488]"
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Gregory, I am contacting you from the SIVIQ website.')}`}
                aria-label="WhatsApp the SIVIQ CEO"
                rel="noreferrer"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{site.whatsapp}</span>
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#CFF3FA] bg-[#ECFEFF] px-3 text-sm font-bold text-[#0D9488]"
                href={site.socials.instagram}
                aria-label="Instagram the SIVIQ CEO"
                rel="noreferrer"
                target="_blank"
              >
                <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" fill="currentColor" r="1.25" />
                </svg>
                <span>@gregory._steve</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
