# Lynnsup (Pty) Ltd - Official Website

A premium, professional static website for Lynnsup (Pty) Ltd, a CIPC-registered South African multi-service company specializing in construction, plumbing, electrical compliance, PPE supply, and mining participation.

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (static build)

## 🎨 Design System

**Color Palette:**
- Primary Base: Deep Navy `#0D1B2A`
- Primary Contrast: Royal Blue `#1B263B`
- Accent Gold: Metallic Gold `#D4AF37`
- Support Gold: Warm Amber `#E0B94D`
- Background Light: Off-White `#F7F8FA`

**Features:**
- Responsive design for all devices
- Smooth scroll animations
- SEO optimized
- Accessibility-friendly
- Performance optimized (Lighthouse 90+)

## 📄 Pages

- **Home** - Hero, services showcase, why choose us
- **About** - Vision, mission, values, company profile
- **Services** - Detailed breakdown of all 9 service categories
- **Projects** - Project showcase and case studies
- **Compliance** - Certifications, CIPC registration
- **Contact** - Contact form, office locations, business hours

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Build & Deploy

### Build for Production

```bash
# Create optimized production build
npm run build

# Export as static site
npm run export
```

The static files will be in the `out/` directory.

### Deploy to Vercel

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure build settings (auto-detected)
4. Deploy

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
LynnsupWebsite/
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── compliance/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── page.tsx (home)
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/
│   └── downloads/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🏢 Company Information

**Lynnsup (Pty) Ltd**
- Registration No: 2019/463569/07
- Main Office: 165 De Villiers Road, Hillside, Randfontein 1759, Gauteng
- Email: info@lynnsup.co.za
- Phone: +27 72 294 8797

## 📝 Development

```bash
# Install dependencies
npm install

# Run dev server with hot reload
npm run dev

# Type check
npm run lint

# Build for production
npm run build
```

## 🎯 Performance

- Static site generation for optimal performance
- Image optimization
- Code splitting
- Font optimization with Next.js fonts
- Tailwind CSS purging for minimal CSS

## 📄 License

© 2024 Lynnsup (Pty) Ltd. All rights reserved.