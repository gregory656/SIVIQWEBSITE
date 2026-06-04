import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  eyebrow?: string
  title?: string
  description?: string
  className?: string
}

export function Section({ children, eyebrow, title, description, className = '' }: SectionProps) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0B6E4F]">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-base leading-7 text-[#4B5563]">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
