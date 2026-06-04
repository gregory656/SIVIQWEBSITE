import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-sm ${className}`}>{children}</div>
}
