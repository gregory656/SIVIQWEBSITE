import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { LegalSection } from '../../data/legal'
import { Card } from '../ui/Card'

type LegalDocumentProps = {
  heading: string
  version?: string
  lastUpdated?: string
  sections: LegalSection[]
  reviewNote?: boolean
}

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function LegalDocument({ heading, version = '1.0.0', lastUpdated, sections, reviewNote }: LegalDocumentProps) {
  const [query, setQuery] = useState('')
  const filteredSections = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return sections

    return sections.filter((section) => `${section.title} ${section.body}`.toLowerCase().includes(normalized))
  }, [query, sections])

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card>
            <h2 className="text-base font-bold text-[#121212]">Table of contents</h2>
            <nav className="mt-4 grid gap-2 text-sm" aria-label={`${heading} sections`}>
              {sections.map((section) => (
                <a className="rounded-md px-2 py-1.5 text-[#374151] hover:bg-[#edf7f2] hover:text-[#0B6E4F]" href={`#${slug(section.title)}`} key={section.title}>
                  {section.title}
                </a>
              ))}
            </nav>
          </Card>
        </aside>

        <article className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-8">
          <div className="border-b border-[#E5E7EB] pb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0B6E4F]">SIVIQ Africa legal</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#121212] sm:text-5xl">{heading}</h1>
            <div className="mt-4 grid gap-1 text-sm text-[#4B5563]">
              <p>Version {version}</p>
              {lastUpdated && <p>Last Updated: {lastUpdated}</p>}
              <p>Contact: adminsiviq@gmail.com</p>
            </div>
            {reviewNote && (
              <p className="mt-4 rounded-lg border border-[#FFB703]/40 bg-[#FFB703]/10 p-4 text-sm font-medium text-[#5f4400]">
                This document will be reviewed by our lawyer before public launch.
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold text-[#121212]" htmlFor="legal-search">
              Search this document
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F7F9F8] px-3">
              <Search aria-hidden className="text-[#6B7280]" size={18} />
              <input
                className="min-h-12 w-full bg-transparent text-[#121212] outline-none placeholder:text-[#6B7280]"
                id="legal-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter sections by keyword"
                type="search"
                value={query}
              />
            </div>
            <p className="mt-2 text-sm text-[#6B7280]" aria-live="polite">
              Showing {filteredSections.length} of {sections.length} sections.
            </p>
          </div>

          <div className="mt-8 grid gap-8">
            {filteredSections.map((section) => (
              <section id={slug(section.title)} key={section.title}>
                <h2 className="text-2xl font-bold text-[#121212]">{section.title}</h2>
                {section.body.split('\n\n').map((paragraph) => (
                  <p className="mt-3 leading-7 text-[#374151]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
