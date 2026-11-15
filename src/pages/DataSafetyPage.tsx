import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'

const dataCollected = [
  'Email',
  'Display name',
  'Username',
  'Profile photo',
  'Campus, county, and service-area preferences',
  'Skills, interests, and portfolio links',
  'Listing, product, and request content you publish',
  'Photos and media shared in listings and chats',
  'Messages needed to provide direct, group, and hiring conversations',
  'Order, quotation, and transaction records',
  'Siviq Credit and wallet activity',
  'Reviews and ratings from completed transactions',
  'Verification documents and status (restricted access)',
  'App activity needed for feed, search, matching, notifications, moderation, disputes, and recovery',
  'Notification preferences',
  'Security activity and trusted device/session metadata',
  'Legal acceptance logs',
  'Age group',
  'In-app search terms',
  'Promoted listing impressions/clicks where active',
]

const dataNotCollected = [
  'Contacts',
  'SMS history',
  'Installed apps',
  'Constant precise GPS tracking',
  'Microphone recordings',
  'Call logs',
  'Browsing history outside SIVIQ',
  'Full payment card numbers or mobile-money PINs',
  'Exact date of birth',
]

const sections = [
  ['Why data is collected', 'SIVIQ uses data to operate accounts, match buyers with providers, process orders and payments, personalize your feed, reduce fraud, secure accounts, support moderation and disputes, and comply with the law.'],
  ['Data sharing', 'SIVIQ does not sell personal data. Data may be shared with service providers only as needed to operate secure infrastructure, process payments through authorized partners, comply with law, prevent abuse, or respond to user requests.'],
  ['Security practices', 'SIVIQ uses account authentication, two-factor support, server-side payment verification, audit logs, session controls, and encrypted infrastructure. Sensitive verification and financial records are protected by server-side authorization.'],
  ['User controls', 'Users can manage profile visibility, location privacy, notification preferences, security settings, active sessions, data export, and account deletion through the app.'],
  ['Account deletion', 'Users can request deletion inside the app. Deletion uses a recovery period before permanent purge to protect against mistakes and disputes; some records may be retained where required for payments, legal compliance, or abuse prevention.'],
  ['Data export', 'Users can request export of available account data from Settings.'],
  ['Contact', `Questions can be sent to ${site.emails.admin}.`],
]

export function DataSafetyPage() {
  return (
    <>
      <Seo title="Data Safety | SIVIQ" description="SIVIQ data safety information covering collected data, security, sharing, deletion, and user controls." />
      <Section className="bg-white" eyebrow="Play Store support" title="Data Safety">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Data collected</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {dataCollected.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Data not collected</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {dataNotCollected.map((item) => (
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
