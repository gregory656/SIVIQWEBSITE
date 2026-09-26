import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'

const socialLinks = [
  {
    label: 'Facebook',
    href: site.socials.facebook,
    color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: site.socials.instagram,
    color: '#E1306C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: site.socials.twitter,
    color: '#000000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: site.socials.linkedin,
    color: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const contactItems = [
  { icon: Mail, label: 'General Support', value: site.emails.support, href: `mailto:${site.emails.support}` },
  { icon: Mail, label: 'Information', value: site.emails.info, href: `mailto:${site.emails.info}` },
  { icon: Mail, label: 'Admin Line', value: site.emails.admin, href: `mailto:${site.emails.admin}` },
  { icon: Phone, label: 'WhatsApp', value: site.whatsapp, href: `https://wa.me/${site.whatsapp.replace('+', '')}` },
]

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact SIVIQ Africa | We're Real People, Talk to Us"
        description="Got a question, spotted a bug, or want to talk about what SIVIQ is building? Reach out — we actually read our emails and reply."
      />

      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[#071612] py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B6E4F]/30 via-transparent to-[#071612]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full bg-[#0B6E4F]/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FFB703]">
            Let's Talk
          </span>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">
            We're people, not a chatbot — reach out.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Whether you've hit a snag, want to share an idea, or just want to know what's happening with your county's projects on SIVIQ — drop us a line. We're genuinely happy to hear from you.
          </p>
        </div>
      </section>

      <Section className="bg-white" eyebrow="Contact" title="Here's how to get us">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">

          {/* Contact form */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-[#121212]">Send us a message</h2>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Fill this in and we'll get back to you within a day or two — honest. No auto-replies, just us.
            </p>
            <form className="mt-6 grid gap-5">
              {['Name', 'Email', 'Subject'].map((label) => (
                <div key={label}>
                  <label className="text-sm font-semibold text-[#121212]" htmlFor={label.toLowerCase()}>
                    {label}
                  </label>
                  <input
                    className="mt-2 min-h-12 w-full rounded-xl border border-[#E5E7EB] bg-[#F7F9F8] px-4 text-[#121212] transition focus:border-[#0B6E4F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]/20"
                    id={label.toLowerCase()}
                    name={label.toLowerCase()}
                    required
                    type={label === 'Email' ? 'email' : 'text'}
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-semibold text-[#121212]" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="mt-2 min-h-36 w-full rounded-xl border border-[#E5E7EB] bg-[#F7F9F8] px-4 py-3 text-[#121212] transition focus:border-[#0B6E4F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]/20"
                  id="message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>

          <div className="grid gap-6 content-start">
            {/* Direct contacts */}
            <Card className="rounded-2xl border border-[#E5E7EB] p-7">
              <h2 className="text-xl font-black text-[#121212]">Direct contacts</h2>
              <p className="mt-1 text-sm text-[#6B7280]">Emails go to actual humans on the team, not a ticket queue.</p>
              <div className="mt-5 grid gap-3">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <a
                    className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-[#0B6E4F]/20 hover:bg-[#edf7f2]"
                    href={href}
                    key={label}
                    rel="noreferrer"
                    target={label === 'WhatsApp' ? '_blank' : undefined}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B6E4F]/10 text-[#0B6E4F] transition group-hover:bg-[#0B6E4F] group-hover:text-white">
                      <Icon aria-hidden size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">{label}</p>
                      <p className="text-sm font-medium text-[#121212]">{value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-4 rounded-xl p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B6E4F]/10 text-[#0B6E4F]">
                    <MapPin aria-hidden size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Office</p>
                    <p className="text-sm text-[#9CA3AF]">Address will be added when confirmed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social links */}
            <Card className="rounded-2xl border border-[#E5E7EB] p-7">
              <h2 className="text-xl font-black text-[#121212]">Find us on social</h2>
              <p className="mt-1 text-sm text-[#6B7280]">We share updates, behind-the-scenes stuff, and respond to questions on social too.</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {socialLinks.map(({ label, href, icon, color }) => (
                  <a
                    className="group flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-3 text-sm font-semibold text-[#374151] transition hover:border-[#0B6E4F]/30 hover:shadow-sm"
                    href={href}
                    key={label}
                    rel="noreferrer"
                    target="_blank"
                    style={{ '--brand': color } as React.CSSProperties}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15`, color }}>
                      {icon}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </Card>

            {/* WhatsApp channel CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-6 text-white">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="font-black">Join our WhatsApp Channel</p>
                  <p className="text-sm text-white/80">Stay in the loop with SIVIQ updates</p>
                </div>
              </div>
              <a
                className="mt-4 block rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-[#128C7E] transition hover:bg-white/90"
                href={site.whatsappChannel}
                rel="noreferrer"
                target="_blank"
              >
                Follow Our Channel →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
