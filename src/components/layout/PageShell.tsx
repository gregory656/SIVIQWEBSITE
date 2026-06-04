import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
