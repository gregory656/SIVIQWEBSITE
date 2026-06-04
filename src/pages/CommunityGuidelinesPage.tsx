import { LegalDocument } from '../components/legal/LegalDocument'
import { Seo } from '../components/ui/Seo'
import { guidelineSections } from '../data/legal'

export function CommunityGuidelinesPage() {
  return (
    <>
      <Seo title="Community Guidelines | SIVIQ Africa" description="SIVIQ Africa Community Guidelines for responsible civic reporting and discussion." />
      <LegalDocument heading="Community Guidelines" sections={guidelineSections} />
    </>
  )
}
