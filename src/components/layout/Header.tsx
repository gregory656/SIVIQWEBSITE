import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation, site } from '../../data/site'
import { Button } from '../ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-bold text-[#121212]" to="/" onClick={() => setOpen(false)}>
          <img className="h-10 w-10 rounded-lg object-cover" src={site.logo} alt="SIVIQ Africa logo" />
          <span>SIVIQ Africa</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-[#edf7f2] text-[#0B6E4F]' : 'text-[#374151] hover:bg-[#F7F9F8] hover:text-[#0B6E4F]'
                }`
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
          <Button disabled>Download App</Button>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#121212] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#E5E7EB] bg-white px-4 py-4 lg:hidden" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-semibold ${isActive ? 'bg-[#edf7f2] text-[#0B6E4F]' : 'text-[#374151]'}`
                }
                key={item.href}
                onClick={() => setOpen(false)}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
            <Button disabled>Download App</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
