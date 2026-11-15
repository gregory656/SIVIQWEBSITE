import { LegalDocument } from '../components/legal/LegalDocument'
import { Seo } from '../components/ui/Seo'
import { termsSections } from '../data/legal'

export function TermsPage() {
  return (
    <>
      <Seo title="Terms of Service | SIVIQ" description="SIVIQ Terms of Service for marketplace transactions, orders, reviews, moderation, appeals, wallet, and account controls." />
      <LegalDocument heading="Terms of Service" sections={termsSections} />
    </>
  )
}
