import { BriefcaseBusiness, Camera, Mail, MapPin, MessageCircle, Send, Share2 } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'

export function ContactPage() {
  return (
    <>
      <Seo title="Contact | SIVIQ Africa" description="Contact SIVIQ Africa for support, privacy, account deletion, legal, and company inquiries." />
      <Section className="bg-white" eyebrow="Contact" title="Support, legal, and company inquiries">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <Card>
            <form className="grid gap-4">
              {['Name', 'Email', 'Subject'].map((label) => (
                <div key={label}>
                  <label className="text-sm font-semibold text-[#121212]" htmlFor={label.toLowerCase()}>
                    {label}
                  </label>
                  <input
                    className="mt-2 min-h-12 w-full rounded-lg border border-[#E5E7EB] px-3 text-[#121212]"
                    id={label.toLowerCase()}
                    name={label.toLowerCase()}
                    required
                    type={label === 'Email' ? 'email' : 'text'}
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-semibold text-[#121212]" htmlFor="message">
                  Message
                </label>
                <textarea className="mt-2 min-h-36 w-full rounded-lg border border-[#E5E7EB] px-3 py-3 text-[#121212]" id="message" name="message" required />
              </div>
              <Button type="submit">Send Message</Button>
              <p className="text-sm text-[#6B7280]">Connect this form to your preferred backend or email service before launch.</p>
            </form>
          </Card>

          <div className="grid gap-5">
            <Card>
              <h2 className="text-xl font-bold text-[#121212]">Company contacts</h2>
              <div className="mt-4 grid gap-3 text-sm text-[#374151]">
                {[site.emails.support, site.emails.info, site.emails.admin].map((email) => (
                  <a className="flex items-center gap-3 hover:text-[#0B6E4F]" href={`mailto:${email}`} key={email}>
                    <Mail aria-hidden size={18} />
                    {email}
                  </a>
                ))}
                <a className="flex items-center gap-3 hover:text-[#0B6E4F]" href={`https://wa.me/${site.whatsapp.replace('+', '')}`}>
                  <MessageCircle aria-hidden size={18} />
                  WhatsApp: {site.whatsapp}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin aria-hidden size={18} />
                  Office address to be updated
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-[#121212]">Social media</h2>
              <div className="mt-4 flex gap-2">
                {[Share2, Camera, Send, BriefcaseBusiness].map((Icon, index) => (
                  <a className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#0B6E4F]" href="#" key={index} aria-label="Official social media link to be added">
                    <Icon aria-hidden size={18} />
                  </a>
                ))}
              </div>
            </Card>

            <Card className="min-h-56 bg-[#F7F9F8]">
              <h2 className="text-xl font-bold text-[#121212]">Map</h2>
              <div className="mt-4 flex h-36 items-center justify-center rounded-lg border border-dashed border-[#9CA3AF] text-center text-sm font-semibold text-[#6B7280]">
                The official office address and map will be added when available.
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
