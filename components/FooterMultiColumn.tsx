import Link from "next/link";

export function FooterMultiColumn() {
  return (
    <footer className="bg-foreground text-background">
      <div className="border-t-4 border-accent" />
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-semibold">Saffron & Spice Kitchen</h3>
            <p className="mt-3 text-sm text-background/70">
              Authentic Indian cuisine crafted with passion. Join us for tandoor-fired specialties, rich curries, and warm hospitality in the heart of San Francisco.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href="/" className="text-sm text-background/70 hover:text-background">Home</Link></li>
              <li><Link href="/menu" className="text-sm text-background/70 hover:text-background">Menu</Link></li>
              <li><Link href="/about" className="text-sm text-background/70 hover:text-background">Our Story</Link></li>
              <li><Link href="/reservations" className="text-sm text-background/70 hover:text-background">Reservations</Link></li>
              <li><Link href="/contact" className="text-sm text-background/70 hover:text-background">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Hours</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li>Mon–Thu: 5:00 PM – 10:00 PM</li>
              <li>Fri–Sat: 5:00 PM – 11:00 PM</li>
              <li>Sunday: 4:00 PM – 9:00 PM</li>
              <li>Lunch (Fri–Sun): 11:30 AM – 2:30 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li>742 Spice Lane, Downtown District</li>
              <li>San Francisco, CA 94102</li>
              <li><a href="tel:+15552345678" className="hover:text-background">(555) 234-5678</a></li>
              <li><a href="mailto:hello@saffronspicekitchen.com" className="hover:text-background">hello@saffronspicekitchen.com</a></li>
              <li className="pt-2">Instagram: <span className="text-background">@saffronspicekitchen</span></li>
              <li>Facebook: <span className="text-background">SaffronSpiceKitchenSF</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-background/20 pt-6 text-center text-sm text-background/60">
          © {new Date().getFullYear()} Saffron & Spice Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
