'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Wrench, 
  Building2, 
  Droplet, 
  Zap, 
  HardHat, 
  Users, 
  Shirt,
  Mountain,
  TestTube,
  Boxes,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="w-16 h-16" />,
      title: 'Technical Support & Design',
      description: 'Expert technical specialists in Mining and Engineering with extensive experience in care and maintenance underground.',
      features: [
        'Experienced technical specialists in Mining and Engineering',
        'Care and maintenance underground expertise',
        'Design and development of training learning materials',
        'Technical consultancy and advisory services',
        'Scrap metal collection and cleanup services',
      ],
    },
    {
      icon: <Boxes className="w-16 h-16" />,
      title: 'Sourcing Services for Companies',
      description: 'Comprehensive sourcing solutions that allow companies to focus on their core business while we handle supporting functions.',
      features: [
        'Supply of 12.1 labour (flexible and adaptable)',
        'Industrial tools and mining materials sourcing',
        'Supply of refuse bags and general materials',
        'Relief from non-core business functions',
        'End-to-end procurement management',
      ],
    },
    {
      icon: <Droplet className="w-16 h-16" />,
      title: 'General Plumbing Services',
      description: 'Comprehensive plumbing solutions delivered by experienced professionals with proven track records.',
      features: [
        'Fit and supply services on all plumbing work',
        'Supply and installation of Gas Geysers',
        'Supply and install Solar Geysers',
        'Emergency plumbing repairs',
        'Maintenance and inspection services',
      ],
    },
    {
      icon: <Building2 className="w-16 h-16" />,
      title: 'General Construction',
      description: 'Full-spectrum construction services from foundation to finish, delivered with quality and precision.',
      features: [
        'Building construction and general work',
        'Renovation and demolition services',
        'Bricklaying and masonry',
        'Plastering and finishing',
        'Paving and landscaping',
      ],
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: 'Electrical Services & CoC',
      description: 'Professional electrical services with focus on compliance, safety, and quality workmanship.',
      features: [
        'Electrical compliance assessments',
        'Certificate of Compliance (CoC) issuance',
        'Fault detection and correction',
        'Recommendations for safety improvements',
        'Installation and maintenance services',
      ],
    },
    {
      icon: <HardHat className="w-16 h-16" />,
      title: 'Personal Protective Equipment',
      description: 'Comprehensive PPE supply solutions meeting company specifications and health & safety standards.',
      features: [
        'General PPE according to company requirements',
        'Compliance with health and safety standards',
        'Quality assurance and certification',
        'Bulk supply and regular delivery options',
        'Custom specification sourcing',
      ],
    },
    {
      icon: <Shirt className="w-16 h-16" />,
      title: 'General Clothing Supply',
      description: 'Professional clothing supply and retail services for all occasions and business needs.',
      features: [
        'Corporate and workwear supply',
        'General clothing for all occasions',
        'Ready-to-wear retail options',
        'Custom orders and bulk supply',
        'Quality brands and competitive pricing',
      ],
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: 'Mining Participation',
      description: 'Comprehensive mining support services including training, tools, and labour supply.',
      features: [
        'SAQA/QCTO training material design (surface and underground)',
        'Industrial tools and mining materials supply',
        '12.1 labour supply (flexible workforce)',
        'Supply and fitting of backfill pipes',
        'Mining support and consultation',
      ],
    },
    {
      icon: <TestTube className="w-16 h-16" />,
      title: 'Water Treatment Solutions',
      description: 'Non-chemical water treatment solutions delivered through trusted partnerships.',
      features: [
        'Non-chemical water treatment systems',
        'Environmentally friendly solutions',
        'Partnership-based service delivery',
        'Consultation and assessment',
        'Ongoing maintenance and support',
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section - Enlarged & Enhanced */}
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative blur orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Wrench className="w-4 h-4" />
                <span>Professional Solutions</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Our <span className="text-accent-gold">Services</span>
              </h1>
              
              {/* Main description */}
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
                Comprehensive multi-service solutions designed to support your business operations
                with excellence, compliance, and integrity.
              </p>

              {/* Additional context */}
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12">
                From construction and mining to electrical services and safety equipment, we deliver 
                specialized expertise across multiple industries throughout South Africa.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">9+</div>
                  <div className="text-white/90 text-sm font-semibold">Service Areas</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">100%</div>
                  <div className="text-white/90 text-sm font-semibold">Compliance</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">24/7</div>
                  <div className="text-white/90 text-sm font-semibold">Support</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">5+</div>
                  <div className="text-white/90 text-sm font-semibold">Industries</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Creative Redesign */}
      <section className="section-padding bg-gradient-to-b from-white via-neutral-light/30 to-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-light hover:border-accent-gold/30">
                  {/* Decorative gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-accent-gold/0 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Icon with animated background */}
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-2xl flex items-center justify-center text-accent-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-primary-base mb-3 group-hover:text-accent-gold transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-muted leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-accent-amber rounded-full mb-6 group-hover:w-full transition-all duration-300"></div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary-base/70 uppercase tracking-wider mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-3 h-3 text-accent-gold" />
                            </div>
                            <span className="text-sm text-neutral-dark leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-accent-gold font-semibold pl-8">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold via-accent-amber to-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional Redesign */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base"></div>
        
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <MessageSquare className="w-4 h-4" />
                  <span>Custom Solutions</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                  Need a Custom<br />
                  <span className="text-accent-gold">Solution?</span>
                </h2>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Contact us to discuss your specific requirements and discover how our comprehensive services can support your business goals.
                </p>

                {/* Key points */}
                <div className="space-y-4 mb-8">
                  {[
                    'Tailored service packages',
                    'Expert consultation available',
                    'Flexible engagement models',
                    'Rapid response times'
                  ].map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-accent-gold" />
                      </div>
                      <span className="text-white/90">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-accent-gold text-primary-base px-8 py-4 rounded-xl font-semibold hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a 
                    href="tel:+27123456789" 
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </div>
              </motion.div>

              {/* Right contact card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Let&apos;s Work Together
                  </h3>
                  <p className="text-white/70">
                    Professional services tailored to your needs
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-gold mb-1">24/7</div>
                      <div className="text-xs text-white/70">Support Available</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-gold mb-1">150+</div>
                      <div className="text-xs text-white/70">Projects Done</div>
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="bg-white/5 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-accent-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Call Us</div>
                        <div className="font-semibold">+27 123 456 789</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-accent-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Email Us</div>
                        <div className="font-semibold">info@lynnsup.co.za</div>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="block w-full text-center bg-accent-gold/20 hover:bg-accent-gold/30 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-accent-gold/30"
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
