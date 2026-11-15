import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

const values = ['Trust', 'Opportunity', 'Transparency', 'Community', 'Craft']

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | SIVIQ"
        description="SIVIQ is a campus-first social commerce and freelance marketplace — your campus, your market, your network."
      />
      <Section eyebrow="About us" title="Your Campus. Your Market. Your Network." className="bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">What is SIVIQ?</h2>
            <p className="mt-3 leading-7 text-[#374151]">
              SIVIQ is a campus-first social commerce and freelance marketplace that connects buyers, independent service providers, student entrepreneurs, and local businesses. It combines social networking, freelance services, local commerce, direct communication, trust and reputation, and transaction infrastructure into one platform.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Mission</h2>
            <p className="mt-3 leading-7 text-[#374151]">
              Make it easier for people to find trustworthy service providers, monetize their skills, discover products, and participate in local commerce.
            </p>
          </Card>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Vision</h2>
            <p className="mt-3 leading-7 text-[#374151]">
              A trusted digital ecosystem where anyone can discover opportunities, offer skills, find services, exchange products, and grow a business through meaningful connections.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#0B1220]">Where we start</h2>
            <p className="mt-3 leading-7 text-[#374151]">
              Kenyan campuses and surrounding communities — then towns, universities, and broader local commerce. SIVIQ is not a conventional social network; its purpose is to turn social connections into economic opportunity.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Core values" title="The principles behind SIVIQ">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <Card key={value}>
              <h3 className="font-bold text-[#0B1220]">{value}</h3>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
