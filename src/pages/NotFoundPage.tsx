import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | SIVIQ Africa" description="The requested SIVIQ Africa page could not be found." />
      <Section className="bg-white" eyebrow="404" title="Page not found">
        <p className="max-w-xl leading-7 text-[#374151]">The page you requested does not exist or has moved.</p>
        <div className="mt-6">
          <Button href="/">Return Home</Button>
        </div>
      </Section>
    </>
  )
}
