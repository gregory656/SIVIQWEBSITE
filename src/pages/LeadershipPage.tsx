import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { team } from '../data/team'

export function LeadershipPage() {
  const [founder, ...others] = team

  return (
    <>
      <Seo title="Leadership | SIVIQ Africa" description="Meet the SIVIQ Africa leadership team, founder, co-founders, and assistant leads." />
      <section className="relative overflow-hidden bg-[#071612] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#FFB703]">Leadership</p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">The people shaping SIVIQ Africa</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            A focused civic-tech team building tools for transparent reporting, accountable discussion, and safer community participation.
          </p>
        </div>
      </section>

      <Section className="bg-white" eyebrow="Founder" title="Founder & Creator">
        <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-8 border-[#edf7f2] shadow-2xl lg:mx-0">
            <img className="h-full w-full object-cover" src={founder.image} alt={`${founder.name} profile photo to be updated`} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#0B6E4F]">{founder.position}</p>
            <h2 className="mt-2 text-4xl font-black text-[#121212]">{founder.name}</h2>
            <blockquote className="mt-5 border-l-4 border-[#FFB703] pl-5 text-2xl font-semibold leading-9 text-[#1f2937]">
              "{founder.quote}"
            </blockquote>
            <p className="mt-5 max-w-2xl leading-7 text-[#4B5563]">{founder.bio}</p>
            <ContactDetails member={founder} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Team" title="Co-founders and assistant leads">
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((member) => (
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#E5E7EB] transition hover:-translate-y-1 hover:shadow-xl" key={member.name}>
              <div className="flex flex-col gap-5 sm:flex-row">
                <img className="h-28 w-28 rounded-full object-cover ring-4 ring-[#edf7f2]" src={member.image} alt={`${member.name} profile photo to be updated`} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#0B6E4F]">{member.position}</p>
                  <h2 className="mt-1 text-2xl font-black text-[#121212]">{member.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563]">{member.bio}</p>
                </div>
              </div>
              <blockquote className="mt-5 rounded-lg bg-[#F7F9F8] p-4 text-sm font-semibold leading-6 text-[#1f2937]">"{member.quote}"</blockquote>
              <ContactDetails member={member} />
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

type TeamMember = (typeof team)[number]

function ContactDetails({ member }: { member: TeamMember }) {
  const contacts = [
    {
      label: member.instagram,
      href: member.instagram === 'reddevcode' ? 'https://www.instagram.com/reddevcode' : '#',
      icon: InstagramLogo,
      accent: 'text-[#C13584]',
    },
    {
      label: member.email,
      href: member.email.includes('@') ? `mailto:${member.email}` : '#',
      icon: EmailLogo,
      accent: 'text-[#EA4335]',
    },
    {
      label: member.whatsapp,
      href: member.whatsapp.startsWith('+') ? `https://wa.me/${member.whatsapp.replace('+', '')}` : '#',
      icon: WhatsAppLogo,
      accent: 'text-[#25D366]',
    },
  ]

  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-3">
      {contacts.map(({ label, href, icon: Icon, accent }) => (
        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4E8DD] bg-[#edf7f2] px-3 text-sm font-bold text-[#0B6E4F]"
          href={href}
          key={label}
          rel="noreferrer"
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          <Icon className={accent} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}

function InstagramLogo({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" height="18" viewBox="0 0 24 24" width="18">
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.25" />
    </svg>
  )
}

function WhatsAppLogo({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="M12.04 2C6.58 2 2.13 6.43 2.13 11.88c0 1.9.55 3.74 1.58 5.32L2 23l5.96-1.56a9.9 9.9 0 0 0 4.08.88h.01c5.46 0 9.9-4.43 9.9-9.88A9.9 9.9 0 0 0 12.04 2Zm0 18.62h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.54.93.95-3.45-.2-.32a8.22 8.22 0 1 1 7.28 4.16Zm4.52-6.15c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}

function EmailLogo({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}
