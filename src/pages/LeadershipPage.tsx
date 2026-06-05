import { Mail, MessageCircle } from 'lucide-react'
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
  const message = `Hello ${member.name}, I am contacting you from the SIVIQ Africa website.`
  const contacts = [
    {
      label: `@${member.instagram}`,
      href: `https://ig.me/m/${member.instagram}`,
      icon: InstagramLogo,
      accent: 'text-[#C13584]',
      ariaLabel: `Message ${member.name} on Instagram`,
    },
    {
      label: member.email,
      href: member.email
        ? `mailto:${member.email}?subject=${encodeURIComponent('SIVIQ Africa website inquiry')}&body=${encodeURIComponent(message)}`
        : '',
      icon: Mail,
      accent: 'text-[#EA4335]',
      ariaLabel: `Email ${member.name}`,
    },
    {
      label: member.whatsapp,
      href: `https://wa.me/${member.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`,
      icon: MessageCircle,
      accent: 'text-[#25D366]',
      ariaLabel: `Message ${member.name} on WhatsApp`,
    },
  ].filter((contact) => contact.href)

  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-3">
      {contacts.map(({ label, href, icon: Icon, accent, ariaLabel }) => (
        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4E8DD] bg-[#edf7f2] px-3 text-sm font-bold text-[#0B6E4F]"
          href={href}
          key={label}
          aria-label={ariaLabel}
          rel="noreferrer"
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          <Icon aria-hidden className={accent} size={18} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}

function InstagramLogo({ className = '', size = 18 }: { className?: string; size?: number }) {
  return (
    <svg aria-hidden className={className} fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.25" />
    </svg>
  )
}
