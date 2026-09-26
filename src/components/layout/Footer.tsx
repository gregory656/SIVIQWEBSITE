import { Link } from 'react-router-dom'
import { footerLinks, site } from '../../data/site'

const socials = [
  {
    label: 'Facebook',
    href: site.socials.facebook,
    color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: site.socials.instagram,
    color: '#E1306C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: site.socials.twitter,
    color: '#000000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: site.socials.linkedin,
    color: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white text-[#121212]">
      {/* Solid green accent line (no gradient) */}
      <div className="h-1 w-full bg-[#0B6E4F]" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                className="h-11 w-11 rounded-xl object-cover ring-2 ring-[#0B6E4F]/30"
                src={site.logo}
                alt="SIVIQ Africa logo"
              />
              <div>
                <p className="text-lg font-black text-[#121212] tracking-tight">SIVIQ Africa</p>
                <p className="text-xs font-bold text-[#0B6E4F]">{site.tagline}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#4B5563]">
              Independent civic accountability technology for communities reporting, discussing, verifying, and tracking public projects across Kenya.
            </p>

            {/* Social media icons styled matching the Contact page theme */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, icon, color }) => (
                <a
                  aria-label={label}
                  className="group flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-bold text-[#374151] transition hover:border-[#0B6E4F] hover:shadow-sm"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-lg transition group-hover:scale-110"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {icon}
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-widest text-[#0B6E4F]">Quick Links</h2>
            <ul className="grid gap-2.5 text-sm font-semibold text-[#4B5563]">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="group flex items-center gap-2 transition-colors hover:text-[#0B6E4F]"
                    to={item.href}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B6E4F] transition-all group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="mb-4 text-xs font-black uppercase tracking-widest text-[#0B6E4F]">Contact</h2>
            <div className="grid gap-3 text-sm font-medium text-[#4B5563]">
              {[site.emails.support, site.emails.info, site.emails.admin].map((email) => (
                <a
                  className="flex items-center gap-2.5 transition-colors hover:text-[#0B6E4F]"
                  href={`mailto:${email}`}
                  key={email}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 text-[#0B6E4F]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{email}</span>
                </a>
              ))}
              <a
                className="flex items-center gap-2.5 font-bold text-[#128C7E] transition-colors hover:text-[#0B6E4F]"
                href={`https://wa.me/${site.whatsapp.replace('+', '')}`}
                rel="noreferrer"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp: {site.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7EB] pt-6 text-center text-xs font-semibold text-[#6B7280]">
          <p>© {new Date().getFullYear()} SIVIQ Africa. All Rights Reserved. Independent and not government affiliated.</p>
        </div>
      </div>
    </footer>
  )
}
