import { LegalDocument } from '../components/legal/LegalDocument'
import { Seo } from '../components/ui/Seo'
import { guidelineSections } from '../data/legal'

export function CommunityGuidelinesPage() {
  return (
    <>
      <Seo title="Community Guidelines | SIVIQ" description="SIVIQ Community Guidelines for responsible marketplace activity and discussion." />
      <LegalDocument heading="Community Guidelines" sections={guidelineSections} />
    </>
  )
}
