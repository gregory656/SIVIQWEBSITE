import { BriefcaseBusiness, Camera, Send, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerLinks, site } from '../../data/site'

const socials = [
  { label: 'Facebook', href: site.socials.facebook, icon: Share2 },
  { label: 'Instagram', href: site.socials.instagram, icon: Camera },
  { label: 'X / Twitter', href: site.socials.twitter, icon: Send },
  { label: 'LinkedIn', href: site.socials.linkedin, icon: BriefcaseBusiness },
]

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#121212] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img className="h-11 w-11 rounded-lg object-cover" src={site.logo} alt="SIVIQ Africa logo" />
            <div>
              <p className="font-bold">SIVIQ Africa</p>
              <p className="text-sm text-gray-300">{site.tagline}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-300">
            Independent civic accountability technology for communities reporting, discussing, verifying, and tracking public projects.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold">Quick Links</h2>
          <ul className="mt-4 grid gap-2 text-sm text-gray-300">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">Contact</h2>
          <a className="mt-4 block text-sm text-gray-300 hover:text-white" href={`mailto:${site.emails.admin}`}>
            {site.emails.admin}
          </a>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-gray-200 transition hover:bg-white hover:text-[#121212]"
                href={href}
                key={label}
              >
                <Icon aria-hidden size={18} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-300">Copyright © SIVIQ Africa</p>
          <p className="text-sm text-gray-300">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
