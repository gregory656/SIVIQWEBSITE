import { LegalDocument } from '../components/legal/LegalDocument'
import { Seo } from '../components/ui/Seo'
import { termsSections } from '../data/legal'

export function TermsPage() {
  return (
    <>
      <Seo title="Terms of Service | SIVIQ Africa" description="SIVIQ Africa Terms of Service for user content, rankings, moderation, appeals, and account controls." />
      <LegalDocument heading="Terms of Service" sections={termsSections} />
    </>
  )
}
