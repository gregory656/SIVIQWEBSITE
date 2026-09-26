import { LegalDocument } from '../components/legal/LegalDocument'
import { Seo } from '../components/ui/Seo'
import { privacySections } from '../data/legal'

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo title="Privacy Policy | SIVIQ Africa" description="SIVIQ Africa Privacy Policy for Play Store, data safety, user rights, and account controls." />
      <LegalDocument heading="Privacy Policy" lastUpdated="September 26, 2026" sections={privacySections} />
    </>
  )
}
