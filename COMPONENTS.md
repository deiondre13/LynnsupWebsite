# Lynnsup Component Library Documentation

A comprehensive, production-ready React + Tailwind component library for the Lynnsup website.

## 📚 Component Index

### Layout Components

#### **Navbar**
Sticky navigation with scroll effects and mobile menu.
```tsx
import { Navbar } from '@/components'
// Already included in layout.tsx
```

#### **Footer**
Dark gradient footer with company info and links.
```tsx
import { Footer } from '@/components'
// Already included in layout.tsx
```

---

### Hero & Section Components

#### **HeroSection**
Full-width hero with gradient background and dual CTAs.
```tsx
import { HeroSection } from '@/components'

<HeroSection
  headline={<>Your <span className="text-accent-gold">Headline</span></>}
  subhead="Supporting text goes here"
  primaryCTA={{ text: "Get Started", href: "/contact" }}
  secondaryCTA={{ text: "Learn More", href: "/about" }}
  showScrollIndicator={true}
/>
```

**Props:**
- `headline` - Main heading (string or ReactNode)
- `subhead` - Supporting text
- `primaryCTA` - Primary button config `{ text, href }`
- `secondaryCTA` - Secondary button config `{ text, href }`
- `showScrollIndicator` - Show animated scroll arrow (default: true)

---

#### **ServiceCard**
Equal-height card with icon, hover lift animation.
```tsx
import { ServiceCard } from '@/components'
import { Wrench } from 'lucide-react'

<ServiceCard
  icon={Wrench}
  title="Service Title"
  description="Service description text"
  features={["Feature 1", "Feature 2", "Feature 3"]}
/>
```

**Props:**
- `icon` - Lucide icon component
- `title` - Service title
- `description` - Service description
- `features` - Optional array of feature strings

---

#### **StatsSection**
Animated statistics with counters.
```tsx
import { StatsSection } from '@/components'

<StatsSection
  title="Our Impact"
  subtitle="Numbers that matter"
  stats={[
    { label: "Years in Service", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
    { label: "Team Members", value: 25 }
  ]}
/>
```

**Props:**
- `stats` - Array of `{ label, value, suffix?, prefix? }`
- `title` - Optional section title
- `subtitle` - Optional subtitle

---

#### **ParallaxSection**
Creates parallax scrolling effect for content.
```tsx
import { ParallaxSection } from '@/components'

<ParallaxSection offset={50}>
  <h2>Your Content</h2>
</ParallaxSection>
```

**Props:**
- `children` - Content to apply parallax to
- `offset` - Parallax offset amount (default: 50)

---

### Interactive Components

#### **AccordionFAQ**
Expandable FAQ accordion with smooth animations.
```tsx
import { AccordionFAQ } from '@/components'

<AccordionFAQ
  items={[
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive construction, plumbing, electrical..."
    },
    {
      question: "How do I get a quote?",
      answer: "Contact us through our contact form or call..."
    }
  ]}
/>
```

**Props:**
- `items` - Array of `{ question, answer }`

---

#### **TestimonialSlider**
Auto-rotating testimonial slider with manual controls.
```tsx
import { TestimonialSlider } from '@/components'

<TestimonialSlider
  testimonials={[
    {
      quote: "Excellent service and professionalism",
      author: "John Doe",
      position: "CEO",
      company: "Company Name"
    }
  ]}
  autoPlayInterval={5000}
/>
```

**Props:**
- `testimonials` - Array of testimonial objects
- `autoPlayInterval` - Auto-rotation interval in ms (default: 5000)

**Features:**
- Auto-pause on hover
- Keyboard navigation
- Dot indicators

---

#### **GalleryGrid**
Responsive image grid with lightbox overlay.
```tsx
import { GalleryGrid } from '@/components'

<GalleryGrid
  images={[
    {
      src: "/images/project1.jpg",
      alt: "Project description",
      caption: "Optional caption"
    }
  ]}
  columns={3}
/>
```

**Props:**
- `images` - Array of `{ src, alt, caption? }`
- `columns` - Number of columns (2, 3, or 4, default: 3)

**Features:**
- Gradient overlay on hover
- Click to open lightbox
- Caption fade-in

---

#### **AnimatedCounter**
Animates numbers from 0 to target value.
```tsx
import { AnimatedCounter } from '@/components'

<AnimatedCounter
  value={150}
  duration={2}
  suffix="+"
  prefix="$"
/>
```

**Props:**
- `value` - Target number
- `duration` - Animation duration in seconds (default: 2)
- `suffix` - Optional suffix (e.g., '+', '%')
- `prefix` - Optional prefix (e.g., '$')

---

### UI Elements

#### **ScrollProgress**
Thin gold progress bar at top of page.
```tsx
import { ScrollProgress } from '@/components'

<ScrollProgress />
// Already included in layout.tsx
```

---

#### **ScrollToTop**
Floating button that appears on scroll.
```tsx
import { ScrollToTop } from '@/components'

<ScrollToTop />
// Already included in layout.tsx
```

---

#### **FloatingCTA**
Sticky floating contact button (mobile).
```tsx
import { FloatingCTA } from '@/components'

<FloatingCTA
  href="/contact"
  text="Contact Us"
  showOnMobileOnly={true}
/>
// Already included in layout.tsx
```

**Props:**
- `href` - Link destination (default: /contact)
- `text` - Button text (default: "Contact Us")
- `showOnMobileOnly` - Only show on mobile (default: true)

---

#### **ThemeToggle**
Light/Dark mode toggle switch.
```tsx
import { ThemeToggle } from '@/components'

<ThemeToggle />
// Already included in Navbar
```

**Features:**
- Auto-detects system preference
- Persists to localStorage
- Smooth transitions

---

#### **LazyImage**
Image with blur placeholder and fade-in.
```tsx
import { LazyImage } from '@/components'

<LazyImage
  src="/images/photo.jpg"
  alt="Description"
  fill={true}
  priority={false}
/>
```

**Props:**
- `src` - Image source
- `alt` - Alt text
- `fill` - Use fill layout (default: false)
- `width` - Image width (if not using fill)
- `height` - Image height (if not using fill)
- `priority` - Load priority (default: false)

---

## 🎨 Animation Variants

Centralized in `/src/lib/animations.ts`:

```tsx
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations'

<motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
  Content
</motion.div>
```

**Available Variants:**
- `fadeIn` - Simple fade
- `fadeInUp` - Fade with upward motion
- `fadeInDown` - Fade with downward motion
- `fadeInLeft` - Fade from left
- `fadeInRight` - Fade from right
- `scaleIn` - Fade with scale
- `staggerContainer` - Container for staggered children
- `staggerItem` - Child item for stagger effect
- `slideInFromBottom` - Slide up from bottom
- `hoverLift` - Lift on hover
- `hoverScale` - Scale on hover
- `rotateIn` - Fade with rotation

---

## ♿ Accessibility Features

All components include:
- ✅ Keyboard navigation
- ✅ ARIA labels and roles
- ✅ Focus states (gold outline)
- ✅ `prefers-reduced-motion` support
- ✅ 4.5:1 color contrast minimum
- ✅ Semantic HTML

---

## 🎯 Usage Examples

### Complete Page Example

```tsx
import {
  HeroSection,
  ServiceCard,
  StatsSection,
  TestimonialSlider,
  AccordionFAQ
} from '@/components'
import { Wrench, Zap, HardHat } from 'lucide-react'

export default function ExamplePage() {
  return (
    <>
      <HeroSection
        headline="Welcome to Lynnsup"
        subhead="Your trusted partner in industrial services"
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Our Services", href: "/services" }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Wrench}
              title="Construction"
              description="Professional construction services"
            />
            <ServiceCard
              icon={Zap}
              title="Electrical"
              description="Licensed electrical work"
            />
            <ServiceCard
              icon={HardHat}
              title="Safety"
              description="PPE and safety equipment"
            />
          </div>
        </div>
      </section>

      <StatsSection
        stats={[
          { label: "Years Experience", value: 5, suffix: "+" },
          { label: "Projects", value: 150, suffix: "+" }
        ]}
      />
    </>
  )
}
```

---

## 🚀 Performance

- **Static Generation:** All pages pre-rendered
- **Code Splitting:** Automatic route-based splitting
- **Image Optimization:** Next.js Image component
- **Font Optimization:** Next.js font loading
- **CSS Purging:** Tailwind removes unused styles
- **Lazy Loading:** Components load on viewport entry

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

---

## 🎨 Design Tokens

### Colors
```tsx
primary-base: #0D1B2A (Navy)
primary-contrast: #1B263B (Royal Blue)
accent-gold: #D4AF37 (Metallic Gold)
accent-amber: #E0B94D (Warm Amber)
neutral-light: #F7F8FA (Off-White)
neutral-surface: #E4E6EB (Light Gray)
neutral-dark: #2C2C2C (Graphite)
neutral-muted: #6B7280 (Cool Gray)
```

### Typography
```tsx
font-heading: 'Poppins' (SemiBold)
font-body: 'Inter'
```

### Spacing
```tsx
section-padding: py-20 px-4 md:px-8
container-custom: max-w-7xl mx-auto
```

---

## 📦 Export & Deployment

```bash
# Build for production
npm run build

# Static export
npm run export

# Deploy to Vercel
vercel
```

All components are optimized for static export and work seamlessly with Vercel deployment.
