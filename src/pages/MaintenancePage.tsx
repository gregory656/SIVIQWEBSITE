import { Activity } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

export function MaintenancePage() {
  return (
    <>
      <Seo title="Maintenance | SIVIQ Africa" description="SIVIQ Africa scheduled maintenance notice." />
      <Section className="bg-white" eyebrow="System status" title="SIVIQ is currently undergoing scheduled maintenance.">
        <Card className="mx-auto max-w-2xl text-center">
          <Activity aria-hidden className="mx-auto text-[#0B6E4F]" size={40} />
          <p className="mt-4 text-lg text-[#374151]">We are working to improve your experience. Please check back shortly.</p>
          <div className="mt-6 rounded-lg border border-dashed border-[#9CA3AF] bg-[#F7F9F8] p-5">
            <p className="text-sm font-semibold text-[#6B7280]">Countdown will be connected during a maintenance window</p>
            <p className="mt-2 text-2xl font-black text-[#121212]">To be connected</p>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#edf7f2] px-4 py-2 text-sm font-bold text-[#0B6E4F]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFB703]" />
            Maintenance active
          </div>
          <div className="mt-7">
            <Button href="/">Return Home</Button>
          </div>
        </Card>
      </Section>
    </>
  )
}
