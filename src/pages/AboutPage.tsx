import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { Seo } from '../components/ui/Seo'

const values = ['Transparency', 'Accountability', 'Innovation', 'Community', 'Integrity']

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | SIVIQ Africa"
        description="Learn about SIVIQ Africa, an independent civic accountability platform for transparency, accountability, and civic engagement."
      />
      <Section eyebrow="About us" title="Independent civic technology for accountable communities" className="bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Mission</h2>
            <p className="mt-3 leading-7 text-[#374151]">
              SIVIQ exists to increase transparency, accountability, and civic engagement across Africa by helping communities document public projects, discuss local issues, and participate responsibly in governance.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-[#121212]">Vision</h2>
            <p className="mt-3 leading-7 text-[#374151]">A digitally empowered Africa where citizens actively participate in development and governance.</p>
          </Card>
        </div>
        <Card className="mt-5 border-[#0B6E4F]/30 bg-[#edf7f2]">
          <h2 className="text-xl font-bold text-[#121212]">Independence disclaimer</h2>
          <p className="mt-3 leading-7 text-[#374151]">
            SIVIQ is independent and is not affiliated with any government institution, county office, elected leader, or public agency.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Core values" title="The principles behind SIVIQ">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <Card key={value}>
              <h3 className="font-bold text-[#121212]">{value}</h3>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
