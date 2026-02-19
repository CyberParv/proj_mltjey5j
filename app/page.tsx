import type { Metadata } from "next"
import Link from "next/link"
import HeroImage from "@/components/HeroImage"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import CTABanner from "@/components/CTABanner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Saffron & Spice Kitchen | Home",
  description: "Experience the soul of India with our handcrafted dishes, warm hospitality, and elegant dining atmosphere."
}

const featuredDishes = [
  {
    name: "Lamb Rogan Josh",
    description: "Tender lamb slow-cooked in aromatic Kashmiri spices with caramelized onions.",
    price: "$28",
    badge: "Chef's Favorite"
  },
  {
    name: "Butter Chicken",
    description: "Tandoori chicken in velvety tomato-cream sauce with fenugreek.",
    price: "$24",
    badge: "Most Popular"
  },
  {
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice layered with spiced goat meat and saffron.",
    price: "$32",
    badge: "House Specialty"
  }
]

const galleryImages = [
  { src: "/images/gallery-dining-room.jpg", alt: "Main dining area" },
  { src: "/images/gallery-thali.jpg", alt: "Traditional thali" },
  { src: "/images/gallery-tandoor.jpg", alt: "Tandoor kitchen" },
  { src: "/images/gallery-private-dining.jpg", alt: "Private events space" },
  { src: "/images/gallery-spices.jpg", alt: "Spice collection" },
  { src: "/images/gallery-patio.jpg", alt: "Patio dining" }
]

const testimonials = [
  {
    quote: "The most authentic Indian food I've had outside of India. The lamb biryani transported me straight to Hyderabad.",
    name: "Michael Chen",
    title: "Food Critic, City Magazine",
    rating: 5
  },
  {
    quote: "An absolute gem! The ambiance is warm and inviting, and the butter chicken is simply divine.",
    name: "Sarah Williams",
    title: "Regular Guest",
    rating: 5
  },
  {
    quote: "Perfect for special occasions. The private dining room and attentive service made our anniversary unforgettable.",
    name: "James & Emily Thompson",
    title: "Anniversary Celebration",
    rating: 5
  }
]

export default function HomePage() {
  return (
    <div>
      <HeroImage
        title="Experience the Soul of India"
        subtitle="Journey through centuries of culinary tradition with our handcrafted dishes, prepared with authentic spices and time-honored recipes passed down through generations."
        image="/images/hero-biryani.jpg"
        primaryCta={{ label: "Reserve Your Table", href: "/reservations" }}
        secondaryCta={{ label: "Explore Our Menu", href: "/menu" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">A Culinary Journey Awaits</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Where every meal tells a story</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              At Saffron & Spice Kitchen, we believe every meal tells a story. Our chefs blend traditional techniques with the finest ingredients to create dishes that honor India's rich culinary heritage while delighting modern palates.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Tandoor Fired", description: "Authentic clay oven cooking at 900°F" },
              { title: "Fresh Spices", description: "Ground daily from whole spices" },
              { title: "Family Recipes", description: "Passed down through four generations" }
            ].map((item) => (
              <Card key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground font-[var(--font-heading)]">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Signature Creations</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Chef's most celebrated dishes</h2>
            </div>
            <Button asChild className="w-fit rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredDishes.map((dish) => (
              <Card key={dish.name} className="rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">{dish.name}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{dish.badge}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{dish.description}</p>
                <p className="mt-6 text-lg font-semibold text-foreground">{dish.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-muted p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">From Mumbai to Your Table</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Chef Priya Sharma brings 25 years of culinary expertise from the kitchens of Mumbai's finest hotels to create an unforgettable dining experience. Every dish reflects her passion for authentic flavors and commitment to excellence.
            </p>
            <blockquote className="mt-6 border-l-4 border-primary pl-4 text-base italic text-foreground">
              “Cooking is not just about feeding the body—it's about nourishing the soul.”
            </blockquote>
            <Button asChild className="mt-8 w-fit rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground">
              <Link href="/about">Read Our Full Story</Link>
            </Button>
          </div>
          <div className="space-y-4">
            <Card className="rounded-xl border border-border bg-card p-6 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Chef Priya Sharma</p>
              <p className="mt-3 text-base text-muted-foreground">Executive Chef & Founder</p>
              <p className="mt-4 text-sm text-muted-foreground">Known for blending regional Indian techniques with seasonal California ingredients.</p>
            </Card>
            <Card className="rounded-xl border border-border bg-card p-6 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Culinary Philosophy</p>
              <p className="mt-4 text-sm text-muted-foreground">We grind spices fresh daily, slow simmer our gravies, and bake naan in a 900°F tandoor.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">A Feast for the Eyes</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Explore our ambiance and craft</h2>
          </div>
          <GalleryMasonry images={galleryImages} />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What Our Guests Say</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Five-star experiences, every visit</h2>
          </div>
          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </section>

      <CTABanner
        title="Reserve Your Experience"
        description="Join us for an evening of extraordinary flavors and warm hospitality. Walk-ins welcome • Private dining available for parties of 10+."
        primaryCta={{ label: "Book a Table", href: "/reservations" }}
        secondaryCta={{ label: "Call (555) 234-5678", href: "tel:+15552345678" }}
      />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <Card className="rounded-xl border border-border bg-card p-8 shadow-md">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Visit Us</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl font-[var(--font-heading)]">742 Spice Lane</h2>
            <p className="mt-3 text-base text-muted-foreground">San Francisco, CA 94102</p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>Phone: (555) 234-5678</p>
              <p>Email: hello@saffronspicekitchen.com</p>
              <p>Parking: Complimentary valet parking available Friday-Sunday.</p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Mon-Thu: 5:00 PM - 10:00 PM</p>
              <p>Fri-Sat: 5:00 PM - 11:00 PM</p>
              <p>Sun: 4:00 PM - 9:00 PM</p>
              <p>Lunch (Fri-Sun): 11:30 AM - 2:30 PM</p>
            </div>
            <Button asChild className="mt-6 w-fit rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground">
              <Link href="/contact">Get Directions</Link>
            </Button>
          </Card>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Saffron & Spice Kitchen Map"
              src="https://maps.google.com/maps?q=742%20Spice%20Lane%20San%20Francisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
