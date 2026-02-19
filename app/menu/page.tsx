import type { Metadata } from "next"
import Link from "next/link"
import HeroImage from "@/components/HeroImage"
import CTABanner from "@/components/CTABanner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Saffron & Spice Kitchen | Menu",
  description: "Discover appetizers, tandoor specialties, signature curries, biryanis, and desserts crafted with authentic Indian spices."
}

const menuCategories = [
  {
    name: "Appetizers",
    description: "Begin your journey with these traditional starters",
    items: [
      { name: "Samosa (2 pcs)", description: "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney", price: "$8" },
      { name: "Chicken Tikka", description: "Tender chicken marinated in yogurt and spices, charred in tandoor", price: "$14" },
      { name: "Paneer Pakora", description: "Golden-fried cottage cheese fritters with mint chutney", price: "$12" },
      { name: "Seekh Kebab", description: "Minced lamb skewers with aromatic spices and fresh herbs", price: "$16" }
    ]
  },
  {
    name: "Tandoor Specialties",
    description: "From our traditional clay oven, fired at 900°F",
    items: [
      { name: "Tandoori Chicken (Half)", description: "Whole chicken leg marinated 24 hours in yogurt and Kashmiri spices", price: "$18" },
      { name: "Lamb Chops", description: "New Zealand lamb chops with ginger-garlic marinade", price: "$32" },
      { name: "Tandoori Prawns", description: "Jumbo prawns with ajwain and lemon", price: "$28" },
      { name: "Paneer Tikka", description: "Cottage cheese with bell peppers and onions", price: "$16" }
    ]
  },
  {
    name: "Signature Curries",
    description: "Rich, aromatic curries simmered to perfection",
    items: [
      { name: "Butter Chicken", description: "Tandoori chicken in creamy tomato sauce with fenugreek", price: "$24" },
      { name: "Lamb Rogan Josh", description: "Kashmiri-style lamb with aromatic spices", price: "$28" },
      { name: "Goan Fish Curry", description: "Fresh sea bass in coconut and tamarind sauce", price: "$26" },
      { name: "Chicken Vindaloo", description: "Fiery Goan curry with vinegar and red chilies", price: "$22" }
    ]
  },
  {
    name: "Vegetarian Classics",
    description: "Celebrating India's rich vegetarian tradition",
    items: [
      { name: "Dal Makhani", description: "Black lentils slow-cooked overnight with cream and butter", price: "$16" },
      { name: "Palak Paneer", description: "Cottage cheese in silky spinach gravy", price: "$18" },
      { name: "Chana Masala", description: "Chickpeas in tangy tomato-onion gravy", price: "$16" },
      { name: "Baingan Bharta", description: "Fire-roasted eggplant mashed with onions and spices", price: "$17" }
    ]
  },
  {
    name: "Biryani & Rice",
    description: "Fragrant basmati rice dishes",
    items: [
      { name: "Hyderabadi Goat Biryani", description: "Layered rice with tender goat, saffron, and crispy onions", price: "$32" },
      { name: "Chicken Biryani", description: "Aromatic rice with spiced chicken and mint", price: "$26" },
      { name: "Vegetable Biryani", description: "Seasonal vegetables with fragrant rice and nuts", price: "$20" }
    ]
  },
  {
    name: "Breads",
    description: "Fresh from our tandoor",
    items: [
      { name: "Garlic Naan", description: "Leavened bread with roasted garlic and butter", price: "$5" },
      { name: "Keema Naan", description: "Stuffed with spiced minced lamb", price: "$8" },
      { name: "Laccha Paratha", description: "Flaky layered whole wheat bread", price: "$5" },
      { name: "Peshawari Naan", description: "Sweet naan with coconut, raisins, and almonds", price: "$7" }
    ]
  },
  {
    name: "Desserts",
    description: "Sweet endings to your meal",
    items: [
      { name: "Gulab Jamun", description: "Warm milk dumplings in rose-cardamom syrup", price: "$8" },
      { name: "Mango Kulfi", description: "Traditional Indian ice cream with Alphonso mango", price: "$9" },
      { name: "Kheer", description: "Creamy rice pudding with cardamom and pistachios", price: "$8" }
    ]
  }
]

export default function MenuPage() {
  return (
    <div>
      <HeroImage
        title="Our Menu"
        subtitle="Discover the rich tapestry of Indian cuisine, from fiery vindaloos to creamy kormas."
        image="/images/menu-hero.jpg"
        primaryCta={{ label: "Make a Reservation", href: "/reservations" }}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Chef-Curated Menu</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl font-[var(--font-heading)]">Explore every course</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Please inform your server of any allergies. Spice levels can be adjusted to your preference.
            </p>
          </div>
          <div className="space-y-10">
            {menuCategories.map((category, index) => (
              <div key={category.name} className={index % 2 === 0 ? "rounded-3xl bg-muted p-8" : "rounded-3xl bg-background p-8 border border-border"}>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-foreground font-[var(--font-heading)]">{category.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {category.items.map((item) => (
                    <Card key={item.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground font-[var(--font-heading)]">{item.name}</h4>
                          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">Looking for something special? Ask about our seasonal chef's tasting menu.</p>
            <Button asChild className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground">
              <Link href="/reservations">Reserve Your Table</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Taste?"
        description="Reserve your table and experience these flavors firsthand."
        primaryCta={{ label: "Make a Reservation", href: "/reservations" }}
      />
    </div>
  )
}
