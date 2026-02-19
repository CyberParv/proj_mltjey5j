export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: string[];
  spiceLevel?: string;
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface LocationHours {
  days: string;
  time: string;
}

export interface ContactInfo {
  address: string;
  city?: string;
  phone?: string;
  email?: string;
  hours?: LocationHours[];
}
