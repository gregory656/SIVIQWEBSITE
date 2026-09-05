import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'

const safetyStandards = [
  'Zero tolerance for child sexual abuse and exploitation (CSAE) content',
  'Mandatory user verification and age-appropriate access controls',
  'Real-time content moderation with automated detection systems',
  'Human review team for escalated content and safety reports',
  'Immediate reporting to relevant authorities when required by law',
  'Regular safety audits and compliance monitoring',
  'User education on safe online practices and reporting tools',
  'Secure data handling with encryption and access controls',
  'Transparent safety policy documentation and updates',
  'Collaboration with child safety organizations and industry best practices',
]

const reportingMechanisms = [
  'In-app report button for all posts, messages, and user profiles',
  'Dedicated safety email channel for urgent reports',
  'Automated flagging of suspicious content patterns',
  '24/7 moderation team for high-priority safety concerns',
  'Anonymous reporting option for user protection',
  'Follow-up communication on report status when appropriate',
]

const preventionMeasures = [
  'Age verification during account registration',
  'Content filtering before publication',
  'Behavioral analysis to detect predatory patterns',
  'Restricted features for new accounts until verification',
  'Community guidelines with clear safety expectations',
  'Regular safety training for moderation team',
]

const sections = [
  ['Child Safety Commitment', 'SIVIQ is committed to protecting children and young people from sexual abuse and exploitation. We maintain strict safety standards, employ advanced detection systems, and work with law enforcement when necessary to prevent CSAE on our platform.'],
  ['Safety Standards URL', 'Our externally published safety standards against child sexual abuse and exploitation (CSAE) are available at: https://siviq.africa/safety-standards'],
  ['Contact Information', `For safety-related concerns, reports, or inquiries, contact us at ${site.emails.admin} or ${site.emails.support}. For urgent matters, WhatsApp: ${site.whatsapp}.`],
  ['Google Play Compliance', 'All apps within social or dating categories must provide published safety standards and contact information to comply with our child safety standards policy. SIVIQ meets these requirements through comprehensive safety documentation and accessible reporting channels.'],
  ['Data Protection', 'Safety-related data is handled with the highest security standards, following Kenya Data Protection Act 2019 and international best practices for child safety data.'],
  ['Transparency', 'We publish regular transparency reports on safety actions, content removals, and policy enforcement to maintain accountability with our community.'],
]

export function SafetyStandardsPage() {
  return (
    <>
      <Seo title="Safety Standards | SIVIQ Africa" description="SIVIQ Africa safety standards for child protection, CSAE prevention, reporting mechanisms, and Google Play compliance." />
      <Section className="bg-white" eyebrow="Child Safety & Protection" title="Safety Standards">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Our Safety Standards</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {safetyStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Reporting Mechanisms</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {reportingMechanisms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-5">
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Prevention Measures</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {preventionMeasures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-5 grid gap-5">
          {sections.map(([title, body]) => (
            <Card key={title}>
              <h2 className="text-xl font-bold text-[#121212]">{title}</h2>
              <p className="mt-3 leading-7 text-[#374151]">{body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
