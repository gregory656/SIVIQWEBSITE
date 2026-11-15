import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'

const safetyStandards = [
  'Zero tolerance for child sexual abuse and exploitation (CSAE) content',
  'Mandatory user verification and age-appropriate access controls',
  'Progressive verification: email, phone, identity, seller, and campus affiliation',
  'Automated content intelligence for spam, scams, and prohibited content',
  'Human review for escalated reports and high-impact enforcement decisions',
  'Documented evidence and a formal appeals process for enforcement actions',
  'Secure file uploads, rate limiting, and abuse detection',
  'Regular safety audits, moderation training, and compliance monitoring',
  'Transparent safety policy documentation and updates',
  'Collaboration with child safety organizations and industry best practices',
]

const safetyCentreFeatures = [
  'Report users, listings, messages, and suspected scams — always free',
  'Block and report directly inside conversations and listings',
  'Appeals process for moderation decisions, with human review',
  'Dispute assistance for order and transaction conflicts',
  'Safety education and anti-scam guidance in the app',
  'Escalation to authorities when required by law',
]

const reportingMechanisms = [
  'In-app report button for listings, posts, messages, and profiles',
  'Siviq Safety Centre for scam, fraud, and dispute reports',
  'Dedicated safety email channel for urgent reports',
  'Siviq Intelligence flagging of suspicious patterns and scam indicators',
  'Follow-up communication on report status where appropriate',
]

const preventionMeasures = [
  'Progressive verification before elevated privileges',
  'Content and listing screening before publication',
  'Behavioral analysis to detect fraud and account abuse',
  'Configurable credit limits on new conversations and promotions',
  'Clear community guidelines and marketplace safety rules',
  'No permanent bans issued by automated systems alone',
]

const sections = [
  ['Child Safety Commitment', 'SIVIQ is committed to protecting children and young people from sexual abuse and exploitation. We maintain strict safety standards, employ detection systems, and work with law enforcement when necessary to prevent CSAE on our platform.'],
  ['Safety Standards URL', 'Our externally published safety standards against child sexual abuse and exploitation (CSAE) are available at: https://siviq.top/safety-standards'],
  ['The Siviq Safety Centre', 'Every user can report suspicious activity, block others, appeal moderation decisions, and get help with transaction disputes. Safety features are always free — monetization never gates access to protection.'],
  ['Marketplace Safety', 'Siviq promotes safe trading: verified reviews only from completed transactions, progressive seller verification, explainable recommendations, and human-reviewed enforcement for serious cases.'],
  ['Contact Information', `For safety-related concerns, reports, or inquiries, contact us at ${site.emails.admin} or ${site.emails.support}. For urgent matters, WhatsApp: ${site.whatsapp}.`],
  ['Google Play Compliance', 'SIVIQ provides published safety standards and contact information to comply with child safety standards policy and marketplace trust requirements.'],
  ['Data Protection', 'Safety-related data is handled with the highest security standards, following Kenya Data Protection Act 2019 and international best practices for user safety data.'],
]

export function SafetyStandardsPage() {
  return (
    <>
      <Seo title="Safety Standards | SIVIQ" description="SIVIQ safety standards: child protection, CSAE prevention, the Siviq Safety Centre, marketplace trust, and reporting mechanisms." />
      <Section className="bg-white" eyebrow="Child Safety & Protection" title="Safety Standards">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Our Safety Standards</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {safetyStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">The Siviq Safety Centre</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {safetyCentreFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Reporting Mechanisms</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {reportingMechanisms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Prevention Measures</h2>
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
              <h2 className="text-xl font-bold text-[#0B1220]">{title}</h2>
              <p className="mt-3 leading-7 text-[#374151]">{body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
