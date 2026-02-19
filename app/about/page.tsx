import type { Metadata } from "next"
import HeroImage from "@/components/HeroImage"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Saffron & Spice Kitchen | About",
  description: "Meet the team behind Saffron & Spice Kitchen and discover our passion for authentic Indian cuisine."
}

const values = [
  {
    title: "Authenticity",
    description: "We honor traditional recipes and techniques, using the same methods that have been perfected over centuries."
  },
  {
    title: "Quality",
    description: "From saffron sourced directly from Kashmir to locally-raised meats, we never compromise on ingredients."
  },
  {
    title: "Hospitality",
    description: "In Indian culture, guests are treated as gods. We bring this spirit of Atithi Devo Bhava to every interaction."
  },
  {
    title: "Community",
    description: "We're proud to support local farmers, employ neighborhood residents, and give back through food donations."
  }
]

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Executive Chef & Founder",
    bio: "25 years of culinary experience across India's finest hotels. Trained at Taj Hotels culinary program."
  },
  {
    name: "Rajesh Patel",
    role: "Head Chef",
    bio: "Specialist in North Indian cuisine with expertise in tandoor cooking. 18 years experience."
  },
  {
    name: "Ananya Krishnan",
    role: "Pastry Chef",
    bio: "Creates our traditional desserts with a modern twist. Trained in both Indian and French techniques."
  },
  {
    name: "Marcus Johnson",
    role: "General Manager",
    bio: "15 years in fine dining hospitality. Ensures every guest feels like family."
  }
]

const awards = [
  { title: "Best Indian Restaurant", organization: "SF Chronicle Dining Awards", year: "2023" },
  { title: "Certificate of Excellence", organization: "TripAdvisor", year: "2022-2024" },
  { title: "Top 50 Restaurants", organization: "Bay Area Magazine", year: "2023" }
]

export default function AboutPage() {
  return (
    <div>
      <HeroImage
        title="Our Story"
        subtitle="A passion for authentic Indian cuisine, rooted in tradition."
        image="/images/about-hero.jpg"
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">From Mumbai to San Francisco</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">A dream steeped in spice and tradition</h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
              <p>
                Saffron & Spice Kitchen was born from a dream that began in the bustling streets of Mumbai. Chef Priya Sharma grew up watching her grandmother transform simple ingredients into extraordinary meals, learning that cooking is an act of love passed down through generations.
              </p>
              <p>
                After training at the prestigious Taj Hotels culinary program and spending 15 years mastering regional cuisines across India—from the coastal kitchens of Kerala to the royal courts of Rajasthan—Chef Priya brought her expertise to San Francisco in 2018.
              </p>
              <p>
                Today, every dish at Saffron & Spice Kitchen honors those traditions while embracing the finest local ingredients. We grind our spices fresh daily, prepare our paneer in-house, and slow-cook our curries to develop deep, complex flavors that tell the story of India's diverse culinary heritage.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-muted p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Chef Priya's Promise</p>
            <p className="mt-4 text-base text-muted-foreground">
              Every plate that leaves our kitchen carries the spirit of Indian hospitality and the warmth of family cooking. We invite you to taste the journey.
            </p>
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <p>• Spices ground fresh daily</p>
              <p>• Paneer and yogurt made in-house</p>
              <p>• Seasonal partnerships with Bay Area farmers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Values that guide every detail</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Meet Our Team</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">A dedicated culinary family</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground font-[var(--font-heading)]">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Recognition</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Awards & accolades</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {awards.map((award) => (
              <Card key={award.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground font-[var(--font-heading)]">{award.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{award.organization}</p>
                <p className="mt-4 text-sm font-semibold text-primary">{award.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
