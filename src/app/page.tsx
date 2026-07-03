'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react'
import { services } from '@/data/services'
import { metrics } from '@/data/metrics'
import { staggerContainer, fadeUp } from '@/lib/motion'

// SEO Metadata is in layout.tsx for home page

export default function Home() {
  // Use first 3 services for home page
  const featuredServices = services.slice(0, 3)

  // Use first 4 metrics for home page
  const featuredMetrics = metrics.slice(0, 4)

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Uncompromising commitment to safety in all operations',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Service',
      description: 'Excellence in service delivery and customer satisfaction',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timely Delivery',
      description: 'Meeting deadlines and delivering projects on time',
    },
  ]

  const whyChooseUs = [
    'CIPC Registered Company (2019/463569/07)',
    'Multi-branch presence across South Africa',
    'Experienced technical specialists',
    'Full compliance with industry standards',
    'Commitment to employment creation',
    'Partnership-focused approach',
  ]

  return (
    <>
      {/* Hero Section — asymmetric split: headline block left, layered image collage right */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden"
      >
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Decorative Blur Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container-custom px-8 pt-28 pb-24 md:pt-36 md:pb-32 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content — takes 7 of 12 columns for asymmetry */}
            <div className="lg:col-span-7 max-w-2xl">
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold">
                  CIPC Registered • 2019/463569/07
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Professional Industrial
                <br />
                <span className="text-accent-gold">Services &amp; Solutions</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Lynnsup (Pty) Ltd delivers comprehensive construction, electrical, plumbing, and industrial supply services across South Africa. Trusted by industry leaders for quality and reliability.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent-gold text-primary-base px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-base"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-base"
                >
                  View Services
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-6 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                  <span>+27 72 294 8797</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                  <span>info@lynnsup.co.za</span>
                </div>
              </motion.div>
            </div>

            {/* Right — layered collage: one large feature image, smaller images offset/overlapping */}
            <motion.div
              className="lg:col-span-5 relative pb-14 lg:pb-20 pr-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Large feature image */}
              <motion.div
                className="relative h-72 sm:h-96 lg:h-[430px] w-full sm:w-[88%] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Image
                  src="/projects/construction-worker.jpg"
                  alt="Construction worker on site"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
              </motion.div>

              {/* Overlapping — bottom right, breaks the feature image's edge */}
              <motion.div
                className="absolute -bottom-2 lg:bottom-4 right-0 w-[58%] h-40 sm:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-contrast"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Image
                  src="/projects/sandton-office-renovation.jpg"
                  alt="Sandton office renovation project"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
              </motion.div>

              {/* Offset — upper right, floating past the feature image */}
              <motion.div
                className="hidden sm:block absolute top-6 -right-1 w-[38%] h-32 lg:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-contrast"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Image
                  src="/projects/solar-installation.jpg"
                  alt="Solar panel installation"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
              </motion.div>

              {/* Small offset — lower left */}
              <motion.div
                className="hidden lg:block absolute -bottom-6 left-8 w-[32%] h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-contrast"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Image
                  src="/projects/mining-site.jpg"
                  alt="Mining site operations"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl" aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section — left-aligned header, bento grid with one primary card */}
      <section aria-labelledby="services-heading" className="py-20 md:py-24 px-4 md:px-8 bg-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="container-custom relative z-10">
          {/* Left-aligned section header with the CTA link pulled up beside it */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-base mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <div className="divider-gold mb-6"></div>
              <p className="text-lg text-neutral-muted">
                Comprehensive multi-service solutions designed to support your core business operations
              </p>
            </div>
            <Link
              href="/services"
              className="btn-primary inline-flex items-center self-start md:self-end shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
            >
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>

          {/* Bento grid: first service is primary (7 cols, full height); others stack in the remaining 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon
              const isPrimary = index === 0
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card group relative flex flex-col ${
                    isPrimary
                      ? 'lg:col-span-7 lg:row-span-2 lg:p-12 justify-between border-l-4 border-accent-gold'
                      : 'lg:col-span-5'
                  }`}
                >
                  {/* Subtle numbering for structure (decorative) */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-6 right-8 font-heading font-bold text-neutral-surface select-none ${
                      isPrimary ? 'text-6xl lg:text-7xl' : 'text-4xl'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className={isPrimary ? 'w-16 h-16' : 'w-12 h-12'} aria-hidden="true" />
                    </div>
                    <h3 className={`font-heading font-semibold text-primary-base mb-3 ${isPrimary ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-neutral-muted leading-relaxed ${isPrimary ? 'text-lg' : ''}`}>
                      {service.description}
                    </p>
                  </div>

                  {isPrimary && <div className="divider-gold mt-8" aria-hidden="true"></div>}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us — asymmetric 7/5 split: intro + checklist left, values as vertical timeline right */}
      <section aria-labelledby="why-heading" className="py-24 md:py-28 px-4 md:px-8 bg-neutral-light relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 id="why-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-base mb-6">
                Why Choose <span className="gradient-text">Lynnsup</span>?
              </h2>
              <div className="divider-gold mb-6"></div>
              <p className="text-lg text-neutral-muted mb-10 max-w-2xl">
                As a registered multi-service company, we provide comprehensive solutions that enable our clients
                to focus on their core business while we handle supporting services with excellence and integrity.
              </p>

              {/* Proper checklist: two columns on wider screens, gold check chips */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 list-none">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <CheckCircle className="w-4 h-4 text-accent-gold" />
                    </span>
                    <span className="text-neutral-dark font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Values as a vertical timeline instead of three identical boxes */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 lg:pt-4"
            >
              <ol className="relative border-l-2 border-accent-gold/30 ml-4 space-y-10 list-none">
                {values.map((value, index) => (
                  <motion.li
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className={`relative pl-10 ${index === 1 ? 'lg:ml-6' : ''}`}
                  >
                    {/* Timeline node */}
                    <span className="absolute -left-[1.35rem] top-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-accent-gold" aria-hidden="true">
                      {value.icon}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-primary-base mb-2 pt-1.5">
                      {value.title}
                    </h3>
                    <p className="text-neutral-muted">
                      {value.description}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Angled divider into the stats band — breaks the stacked-rectangles rhythm */}
      <div aria-hidden="true" className="bg-neutral-light">
        <div className="h-12 md:h-16 bg-primary-base [clip-path:polygon(0_100%,100%_0,100%_100%,0_100%)]" />
      </div>

      {/* Stats — pulled out of the CTA into their own full-width contrast band */}
      <section aria-label="Company statistics" className="bg-primary-base text-white py-14 md:py-16 px-4 md:px-8">
        <div className="container-custom">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '100%', label: 'Commitment' },
              { value: '9+', label: 'Service Areas' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="border-l-2 border-accent-gold/40 pl-6"
              >
                <dd className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-accent-gold leading-none mb-3 order-first">
                  {stat.value}
                </dd>
                <dt className="text-sm md:text-base uppercase tracking-wider text-white/70">
                  {stat.label}
                </dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Section — offset bordered panel on a light ground, distinct from the hero */}
      <section aria-labelledby="cta-heading" className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="container-custom relative">
          {/* Offset gold frame behind the panel */}
          <div aria-hidden="true" className="hidden md:block absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent-gold/30" />

          <div className="relative bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="relative z-10 px-6 py-14 md:px-14 md:py-20">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left side - Content (wider column) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-white lg:col-span-7"
                >
                  <div className="inline-block mb-4">
                    <span className="bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                      Let&apos;s Work Together
                    </span>
                  </div>

                  <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                    Ready to Elevate Your
                    <span className="block text-accent-gold">Business Operations?</span>
                  </h2>

                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                    Partner with Lynnsup for comprehensive industrial solutions backed by expertise,
                    compliance, and a commitment to excellence. Let&apos;s discuss how we can support your goals.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-3 bg-accent-gold text-primary-base px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-base"
                    >
                      Get Started Today
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-base"
                    >
                      View Services
                    </Link>
                  </div>
                </motion.div>

                {/* Right side - Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-5 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
                >
                  <div className="text-white space-y-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">Get in Touch</h3>
                      <p className="text-white/70">We&apos;re here to answer your questions</p>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="tel:+27722948797"
                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                      >
                        <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/30 transition-colors">
                          <Phone className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Call Us</div>
                          <div className="font-semibold">+27 72 294 8797</div>
                        </div>
                      </a>

                      <a
                        href="mailto:info@lynnsup.co.za"
                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                      >
                        <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/30 transition-colors">
                          <Mail className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">Email Us</div>
                          <div className="font-semibold">info@lynnsup.co.za</div>
                        </div>
                      </a>
                    </div>

                    <div className="pt-6 border-t border-white/20">
                      <p className="text-sm text-white/60 mb-3">Looking forward to working with leading companies across South Africa</p>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2" aria-hidden="true">
                          <div className="w-8 h-8 rounded-full bg-accent-gold/30 border-2 border-white/20"></div>
                          <div className="w-8 h-8 rounded-full bg-accent-gold/40 border-2 border-white/20"></div>
                          <div className="w-8 h-8 rounded-full bg-accent-gold/50 border-2 border-white/20"></div>
                        </div>
                        <span className="text-sm text-white/80 font-medium">Growing network of satisfied clients</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
