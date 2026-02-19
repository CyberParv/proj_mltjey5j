import type { Metadata } from "next"
import HeroImage from "@/components/HeroImage"
import ContactForm from "@/components/ContactForm"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Saffron & Spice Kitchen | Contact",
  description: "Contact Saffron & Spice Kitchen for reservations, catering inquiries, or general questions."
}

export default function ContactPage() {
  return (
    <div>
      <HeroImage
        title="Get in Touch"
        subtitle="We'd love to hear from you."
        image="/images/contact-hero.jpg"
        primaryCta={{ label: "Call (555) 234-5678", href: "tel:+15552345678" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <Card className="rounded-xl border border-border bg-card p-8 shadow-md">
            <h2 className="text-3xl font-semibold text-foreground font-[var(--font-heading)]">Contact Information</h2>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>742 Spice Lane</p>
              <p>San Francisco, CA 94102</p>
              <p>Phone: (555) 234-5678</p>
              <p>Email: hello@saffronspicekitchen.com</p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
              <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
              <p>Sunday: 4:00 PM - 9:00 PM</p>
              <p>Lunch (Fri-Sun): 11:30 AM - 2:30 PM</p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Instagram: @saffronspicekitchen</p>
              <p>Facebook: SaffronSpiceKitchenSF</p>
            </div>
          </Card>
          <ContactForm
            title="Send Us a Message"
            description="For catering, private events, or feedback, please reach out and our team will respond within 24 hours."
          />
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Saffron & Spice Kitchen Map"
              src="https://maps.google.com/maps?q=742%20Spice%20Lane%20San%20Francisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
            />
          </div>
          <Card className="rounded-xl border border-border bg-card p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">Directions</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Located in the heart of Downtown, just two blocks from Union Square. Street parking available on Spice Lane. Nearest garage: Union Square Garage (350 Post St).
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              For rideshare drop-offs, use the entrance on Spice Lane next to the brass awning.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
