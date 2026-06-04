import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'
import { site } from '../data/site'

const dataCollected = [
  'Email',
  'Display name',
  'Username',
  'SIVIQ code',
  'County',
  'Sub-county',
  'Profile image URL',
  'Uploaded post/project images',
  'App activity needed for posts, comments, votes, reports, follows, projects, rankings, notifications, moderation, appeals, and recovery',
  'Chat and group message data needed to provide messaging',
  'Notification preferences',
  'Security activity',
  'Trusted device/session metadata',
  'Legal acceptance logs',
  'Age group',
  'Selected interests',
  'In-app search terms',
  'Ad impressions/clicks where sponsored content is active',
]

const dataNotCollected = [
  'Contacts',
  'SMS history',
  'Installed apps',
  'Constant precise GPS tracking',
  'Microphone recordings',
  'Call logs',
  'Browsing history outside SIVIQ',
  'Exact date of birth',
  'Exact age',
]

const sections = [
  ['Why data is collected', 'SIVIQ uses data to operate accounts, personalize local civic content, reduce abuse, secure accounts, provide messaging, support moderation, process appeals, recover accounts, and improve civic project reporting.'],
  ['Data sharing', 'SIVIQ does not sell personal data. Data may be shared with service providers only as needed to operate secure cloud infrastructure, comply with law, prevent abuse, or respond to user requests.'],
  ['Security practices', 'SIVIQ uses account authentication, PIN and biometric app lock, session timeout controls, trusted devices, security activity logs, and secure cloud infrastructure powered by Supabase.'],
  ['User controls', 'Users can manage profile visibility, notification preferences, security settings, active sessions, trusted devices, data export, and account deletion through the app.'],
  ['Account deletion', 'Users can request deletion inside the app. Deletion uses a recovery period before permanent purge to protect against mistakes and disputes.'],
  ['Data export', 'Users can request export of available account data from Settings.'],
  ['Contact', `Questions can be sent to ${site.emails.admin}.`],
]

export function DataSafetyPage() {
  return (
    <>
      <Seo title="Data Safety | SIVIQ Africa" description="Play Store-friendly SIVIQ Africa data safety information covering collected data, security, sharing, deletion, and user controls." />
      <Section className="bg-white" eyebrow="Play Store support" title="Data Safety">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Data collected</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#374151]">
              {dataCollected.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Data not collected</h2>
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
              <h2 className="text-xl font-bold text-[#121212]">{title}</h2>
              <p className="mt-3 leading-7 text-[#374151]">{body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
