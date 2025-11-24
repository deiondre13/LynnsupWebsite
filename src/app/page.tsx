'use client'

import Link from 'next/link'
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
      {/* Hero Section - Cleaner Design */}
      <section className="relative bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white">
        <div className="container-custom px-8 py-32 md:py-40">
          <div className="max-w-4xl">
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
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Professional Industrial
              <br />
              <span className="text-accent-gold">Services & Solutions</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
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
                className="inline-flex items-center justify-center gap-2 bg-accent-gold text-primary-base px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-base transition-all"
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
                <Phone className="w-4 h-4 text-accent-gold" />
                <span>+27 72 294 8797</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-gold" />
                <span>info@lynnsup.co.za</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-base mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="divider-gold mx-auto mb-6"></div>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto">
              Comprehensive multi-service solutions designed to support your core business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-base mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-muted leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex items-center">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-base mb-6">
                Why Choose <span className="gradient-text">Lynnsup</span>?
              </h2>
              <div className="divider-gold mb-6"></div>
              <p className="text-lg text-neutral-muted mb-8">
                As a registered multi-service company, we provide comprehensive solutions that enable our clients
                to focus on their core business while we handle supporting services with excellence and integrity.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                    <span className="text-neutral-dark font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card bg-white"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-accent-gold">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-primary-base mb-2">
                        {value.title}
                      </h3>
                      <p className="text-neutral-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional Redesign */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <div className="inline-block mb-4">
                  <span className="bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Let&apos;s Work Together
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Ready to Elevate Your
                  <span className="block text-accent-gold">Business Operations?</span>
                </h2>
                
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  Partner with Lynnsup for comprehensive industrial solutions backed by expertise, 
                  compliance, and a commitment to excellence. Let&apos;s discuss how we can support your goals.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/20">
                  <div>
                    <div className="text-3xl font-bold text-accent-gold mb-1">5+</div>
                    <div className="text-sm text-white/70">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-gold mb-1">150+</div>
                    <div className="text-sm text-white/70">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-gold mb-1">50+</div>
                    <div className="text-sm text-white/70">Happy Clients</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center justify-center gap-3 bg-accent-gold text-primary-base px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
              >
                <div className="text-white space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2">Get in Touch</h3>
                    <p className="text-white/70">We&apos;re here to answer your questions</p>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href="tel:+27722948797" 
                      className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                    >
                      <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/30 transition-colors">
                        <Phone className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Call Us</div>
                        <div className="font-semibold">+27 72 294 8797</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@lynnsup.co.za" 
                      className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                    >
                      <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/30 transition-colors">
                        <Mail className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">Email Us</div>
                        <div className="font-semibold">info@lynnsup.co.za</div>
                      </div>
                    </a>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-white/60 mb-3">Trusted by leading companies across South Africa</p>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-accent-gold/30 border-2 border-white/20"></div>
                        <div className="w-8 h-8 rounded-full bg-accent-gold/40 border-2 border-white/20"></div>
                        <div className="w-8 h-8 rounded-full bg-accent-gold/50 border-2 border-white/20"></div>
                      </div>
                      <span className="text-sm text-white/80 font-medium">50+ satisfied clients</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
