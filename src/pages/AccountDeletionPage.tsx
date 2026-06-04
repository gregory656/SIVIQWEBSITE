import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

const steps = ['Open the SIVIQ app.', 'Go to Profile.', 'Open Danger Zone.', 'Choose Delete account.', 'Confirm your password.', 'Your account will be scheduled for deletion with a recovery period before permanent purge.']

export function AccountDeletionPage() {
  return (
    <>
      <Seo title="Account Deletion | SIVIQ Africa" description="Instructions for SIVIQ users to request account deletion from inside the app or through manual support." />
      <Section className="bg-white" eyebrow="Play Store support" title="Account Deletion">
        <Card>
          <p className="text-lg font-semibold text-[#121212]">SIVIQ users can request account deletion from inside the app.</p>
          <ol className="mt-6 grid gap-3 text-[#374151]">
            {steps.map((step, index) => (
              <li className="flex gap-3" key={step}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B6E4F] text-sm font-bold text-white">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-lg bg-[#edf7f2] p-4 text-[#374151]">
            If you cannot access your account, email adminsiviq@gmail.com with your username, account email, and deletion request.
          </p>
          <div className="mt-6 grid gap-3 text-[#374151]">
            <p>Some records may be retained temporarily for disputes, legal compliance, abuse prevention, and account recovery.</p>
            <p>Public user-generated content may be removed, anonymized, or retained where legally necessary.</p>
            <p>Deletion is not instant because the app uses a recovery period.</p>
          </div>
        </Card>
      </Section>
    </>
  )
}
