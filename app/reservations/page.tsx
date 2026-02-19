import type { Metadata } from "next"
import HeroImage from "@/components/HeroImage"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Saffron & Spice Kitchen | Reservations",
  description: "Book your table at Saffron & Spice Kitchen. Reserve online for dinner, lunch, or private dining experiences."
}

export default function ReservationsPage() {
  return (
    <div>
      <HeroImage
        title="Reserve Your Table"
        subtitle="Join us for an unforgettable dining experience."
        image="/images/reservations-hero.jpg"
        primaryCta={{ label: "Call (555) 234-5678", href: "tel:+15552345678" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-xl border border-border bg-card p-8 shadow-md">
            <h2 className="text-3xl font-semibold text-foreground font-[var(--font-heading)]">Book Online</h2>
            <p className="mt-3 text-sm text-muted-foreground">Reservations are confirmed via email within 2 hours. For same-day reservations, please call us directly.</p>
            <form className="mt-8 grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <select id="time" name="time" className="h-10 rounded-md border border-border bg-background px-3 text-sm" required>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <select id="guests" name="guests" className="h-10 rounded-md border border-border bg-background px-3 text-sm" required>
                    {[1,2,3,4,5,6,7,8].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="occasion">Special Occasion</Label>
                  <select id="occasion" name="occasion" className="h-10 rounded-md border border-border bg-background px-3 text-sm">
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Business Dinner</option>
                    <option>Date Night</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea id="requests" name="requests" placeholder="Dietary restrictions, seating preferences, etc." />
              </div>
              <Button type="submit" className="w-fit rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground">
                Request Reservation
              </Button>
            </form>
          </Card>
          <div className="space-y-6">
            <Card className="rounded-xl border border-border bg-muted p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">Private Dining & Events</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Host your special celebration in our elegant private dining room, accommodating up to 40 guests. Perfect for corporate events, wedding rehearsals, birthday parties, and family gatherings.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Customized tasting menus</li>
                <li>• Dedicated service staff</li>
                <li>• Audio-visual equipment</li>
                <li>• Flexible seating arrangements</li>
              </ul>
              <Button asChild className="mt-6 w-fit rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                <a href="/contact">Inquire About Private Events</a>
              </Button>
            </Card>
            <Card className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground font-[var(--font-heading)]">Reservation Policies</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p><strong>Cancellation:</strong> Please cancel at least 4 hours in advance to avoid a $25 per person fee.</p>
                <p><strong>Large Parties:</strong> Groups of 8+ require a credit card to hold the reservation.</p>
                <p><strong>Late Arrival:</strong> Tables are held for 15 minutes past reservation time.</p>
                <p><strong>Dress Code:</strong> Smart casual attire. No athletic wear or flip-flops please.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
