import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import Link from "next/link"
import FooterMultiColumn from "@/components/FooterMultiColumn"
import "./globals.css"

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading"
})

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body"
})

export const metadata: Metadata = {
  title: "Saffron & Spice Kitchen | Authentic Indian Restaurant in San Francisco",
  description: "Experience authentic Indian cuisine at Saffron & Spice Kitchen. From tandoor-fired specialties to rich curries, our chef-crafted dishes celebrate India's culinary heritage. Reserve your table today."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-[var(--font-body)]">
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-semibold tracking-wide text-primary font-[var(--font-heading)]">
              Saffron & Spice Kitchen
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <Link href="/menu" className="transition-colors hover:text-primary">Menu</Link>
              <Link href="/about" className="transition-colors hover:text-primary">About</Link>
              <Link href="/reservations" className="transition-colors hover:text-primary">Reservations</Link>
              <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
            </nav>
            <Link
              href="/reservations"
              className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Reserve a Table
            </Link>
          </div>
          <div className="border-t border-border/60 px-6 py-3 md:hidden">
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <Link href="/menu" className="transition-colors hover:text-primary">Menu</Link>
              <Link href="/about" className="transition-colors hover:text-primary">About</Link>
              <Link href="/reservations" className="transition-colors hover:text-primary">Reservations</Link>
              <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <FooterMultiColumn
          brand="Saffron & Spice Kitchen"
          description="Authentic Indian cuisine crafted with passion, honoring traditions from Mumbai to San Francisco."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "About", href: "/about" },
                { label: "Reservations", href: "/reservations" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Hours",
              links: [
                { label: "Mon-Thu: 5:00 PM - 10:00 PM", href: "/" },
                { label: "Fri-Sat: 5:00 PM - 11:00 PM", href: "/" },
                { label: "Sun: 4:00 PM - 9:00 PM", href: "/" },
                { label: "Lunch (Fri-Sun): 11:30 AM - 2:30 PM", href: "/" }
              ]
            },
            {
              title: "Visit",
              links: [
                { label: "742 Spice Lane", href: "/contact" },
                { label: "San Francisco, CA 94102", href: "/contact" },
                { label: "(555) 234-5678", href: "tel:+15552345678" },
                { label: "hello@saffronspicekitchen.com", href: "mailto:hello@saffronspicekitchen.com" }
              ]
            },
            {
              title: "Social",
              links: [
                { label: "Instagram @saffronspicekitchen", href: "https://instagram.com" },
                { label: "Facebook SaffronSpiceKitchenSF", href: "https://facebook.com" }
              ]
            }
          ]}
          bottomNote="© 2024 Saffron & Spice Kitchen. All rights reserved."
        />
      </body>
    </html>
  )
}
