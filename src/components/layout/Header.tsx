import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation, site } from '../../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled
          ? 'border-[#E5E7EB] bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white'
        }`}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="group flex items-center gap-3 font-black text-[#121212]"
          to="/"
          onClick={() => setOpen(false)}
        >
          <div className="relative">
            <img
              className="h-10 w-10 rounded-xl object-cover ring-2 ring-transparent transition group-hover:ring-[#0B6E4F]/40"
              src={site.logo}
              alt="SIVIQ Africa logo"
            />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#FFB703] ring-2 ring-white" />
          </div>
          <div>
            <span className="block text-sm font-black leading-none tracking-tight">SIVIQ Africa</span>
            <span className="block text-[10px] font-medium text-[#6B7280]">{site.tagline}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive
                  ? 'bg-[#edf7f2] text-[#0B6E4F]'
                  : 'text-[#374151] hover:bg-[#F7F9F8] hover:text-[#0B6E4F]'
                }`
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="ml-2 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#0B6E4F] px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-[#0B6E4F]/20 transition hover:bg-[#095f45] hover:-translate-y-px"
            href={site.downloadLinks.android}
            rel="noreferrer"
            target="_blank"
          >
            Download App
          </a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] text-[#121212] transition hover:bg-[#F7F9F8] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#E5E7EB] bg-white/95 px-4 py-4 backdrop-blur-md lg:hidden" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-[#edf7f2] text-[#0B6E4F]' : 'text-[#374151] hover:bg-[#F7F9F8] hover:text-[#0B6E4F]'
                  }`
                }
                key={item.href}
                onClick={() => setOpen(false)}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0B6E4F] px-5 py-2.5 text-center text-sm font-bold text-white shadow-sm"
              href={site.downloadLinks.android}
              rel="noreferrer"
              target="_blank"
            >
              Download App
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
