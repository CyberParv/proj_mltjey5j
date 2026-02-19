# Saffron & Spice Kitchen

> Authentic Indian Cuisine, Crafted with Passion

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Experience authentic Indian cuisine at Saffron & Spice Kitchen. From tandoor-fired specialties to rich curries, our chef-crafted dishes celebrate India's culinary heritage. Reserve your table today.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Image gallery showcase
- Customer testimonials
- Contact information & location
- Interactive menu/product display

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, intro, featured, about-preview, gallery, testimonials, cta, location
- **Menu** (`/menu`) — hero, menu, cta
- **About** (`/about`) — hero, story, values, team, awards
- **Reservations** (`/reservations`) — hero, reservation-form, feature, info
- **Contact** (`/contact`) — hero, contact-info, contact-form, map

## Project Structure

```
├── .env.example
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── reservations/
│       └── page.tsx
├── components.json
├── components/
│   ├── FooterMultiColumn.tsx
│   ├── HeroGradient.tsx
│   ├── NavbarSticky.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts
│   │       └── reservations/
│   │           └── route.ts
│   └── lib/
│       ├── email.ts
│       └── validators.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#722F37](https://via.placeholder.com/15/722F37/000000?text=+) | `#722F37` |
| Secondary | ![#606C38](https://via.placeholder.com/15/606C38/000000?text=+) | `#606C38` |
| Accent | ![#DDA15E](https://via.placeholder.com/15/DDA15E/000000?text=+) | `#DDA15E` |
| Background | ![#FEFAE0](https://via.placeholder.com/15/FEFAE0/000000?text=+) | `#FEFAE0` |

## Typography

- **Headings:** Cormorant Garamond
- **Body:** Lato

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mltjey5j.git

# Navigate to the project
cd proj_mltjey5j

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mltjey5j)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
