'use client'

import { motion } from 'framer-motion'
import { 
  Target, Eye, Heart, Users, Award, Shield, 
  TrendingUp, CheckCircle, Lightbulb, Handshake, Calendar,
  Building2, Wrench, HardHat, Zap, UserCheck
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

// Note: Metadata export doesn't work in 'use client' components
// SEO metadata should be added via layout or separate metadata file

export default function AboutPage() {
  // Company statistics
  const stats = [
    { value: '5+', label: 'Years of Excellence', icon: Calendar },
    { value: '100%', label: 'Commitment to Quality', icon: CheckCircle },
    { value: '9+', label: 'Service Categories', icon: Users },
    { value: '1', label: 'Main Office', icon: UserCheck },
  ]

  // Core values with detailed descriptions
  const values = [
    { 
      icon: Shield, 
      title: 'Safety', 
      description: 'Uncompromising commitment to safety in all operations',
      details: 'Zero-harm workplace culture with comprehensive safety training and protocols'
    },
    { 
      icon: Heart, 
      title: 'Respect', 
      description: 'Treating all stakeholders with dignity and respect',
      details: 'Fostering inclusive environments where every voice matters'
    },
    { 
      icon: Lightbulb, 
      title: 'Intelligence', 
      description: 'Smart, innovative solutions to complex challenges',
      details: 'Leveraging technology and expertise for optimal outcomes'
    },
    { 
      icon: Users, 
      title: 'Dignity', 
      description: 'Upholding human dignity in employment and service',
      details: 'Creating meaningful employment opportunities for all'
    },
    { 
      icon: Handshake, 
      title: 'Honesty', 
      description: 'Transparent and truthful in all business dealings',
      details: 'Building trust through open communication and integrity'
    },
    { 
      icon: Award, 
      title: 'Integrity', 
      description: 'Ethical standards guide every decision we make',
      details: 'Maintaining the highest professional and moral standards'
    },
  ]

  // Company milestones
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Lynnsup (Pty) Ltd officially registered with CIPC, beginning our journey to transform industrial services in South Africa.',
      icon: Building2
    },
    {
      year: '2020',
      title: 'Service Expansion',
      description: 'Expanded service offerings to include electrical, plumbing, and technical support across multiple sectors.',
      icon: Wrench
    },
    {
      year: '2021',
      title: 'Mining Sector Entry',
      description: 'Secured major contracts in the mining industry, providing comprehensive support services and PPE supply.',
      icon: HardHat
    },
    {
      year: '2022',
      title: 'ISO Quality Management System (QMS)',
      description: 'Our QMS is aligned to ISO (ISO 9001 – 2015), ensuring quality standards across all operations.',
      icon: Award
    },
    {
      year: '2023',
      title: 'Technology Integration',
      description: 'Implemented advanced project management systems and digital solutions for enhanced service delivery.',
      icon: Zap
    },
    {
      year: '2024-25',
      title: 'Continued Growth',
      description: 'Aspiring to reach 150+ completed projects and establishing partnerships with leading industrial companies.',
      icon: TrendingUp
    },
  ]


  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom px-8 py-24 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6">
                <span className="bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  CIPC Registered • 2019/463569/07
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Building South Africa&apos;s
                <br />
                <span className="text-accent-gold">Industrial Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Lynnsup (Pty) Ltd is a multi-service company committed to excellence, integrity, and creating meaningful employment opportunities across South Africa.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-gold text-primary-base px-8 py-4 rounded-xl font-semibold hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Partner With Us
                <Handshake className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Right stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                  >
                    <IconComponent className="w-8 h-8 text-accent-gold mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-base mb-4">
                Company Profile
              </h2>
              <div className="divider-gold mb-6"></div>
              <p className="text-lg text-neutral-muted mb-6">
                <strong className="text-primary-base">Lynnsup (Pty) Ltd</strong> is a registered South African company
                (Registration No: <strong>2019/463569/07</strong>) specializing in comprehensive multi-service solutions
                across construction, technical support, mining, and industrial services.
              </p>
              <p className="text-lg text-neutral-muted leading-relaxed">
                We position ourselves as a <strong>service supply hub</strong> that enables client companies to focus on
                their core business while we handle essential supporting services with excellence, compliance, and integrity.
              </p>
            </motion.div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <Eye className="w-12 h-12 text-accent-gold mb-4" />
                <h3 className="text-2xl font-heading font-semibold text-primary-base mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-muted leading-relaxed">
                  To be the best service provider and increase employment opportunities to the most destitute persons,
                  creating sustainable livelihoods and positive social impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <Target className="w-12 h-12 text-accent-gold mb-4" />
                <h3 className="text-2xl font-heading font-semibold text-primary-base mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-muted leading-relaxed">
                  Develop a supply hub of services to allow companies to focus on core business while we deliver
                  comprehensive, compliant, and high-quality supporting services.
                </p>
              </motion.div>
            </div>

            {/* Work Collaborations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-heading font-semibold text-primary-base mb-4">
                Work Collaborations
              </h3>
              <p className="text-neutral-muted leading-relaxed">
                Lynnsup is open to partnering with companies that share our values and those of our clients. We employ
                the best candidates and supply the best services to our clients on time, without compromising quality or integrity.
              </p>
            </motion.div>

            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-light p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-heading font-semibold text-primary-base mb-4">
                Compliance & Growth
              </h3>
              <p className="text-neutral-muted leading-relaxed">
                Wherever we operate, we comply with all company operating standards and procedures, follow required
                occupational health and safety and hygiene procedures, and implement any regulations required for specific
                environments. We are committed to continuous growth and openness to new opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-base mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <div className="divider-gold mx-auto mb-6"></div>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto">
              From our founding to becoming a trusted partner in South Africa&apos;s industrial sector
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12 pb-12 border-l-2 border-accent-gold/30 last:border-l-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-accent-gold rounded-full -translate-x-[9px]"></div>
                  
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-accent-gold mb-1">{milestone.year}</div>
                        <h3 className="text-2xl font-heading font-bold text-primary-base">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-muted leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-base mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="divider-gold mx-auto mb-6"></div>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto">
              The core principles that guide every decision, action, and partnership at Lynnsup
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group card hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-base mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-muted mb-3">
                    {value.description}
                  </p>
                  <p className="text-sm text-neutral-muted/70 leading-relaxed">
                    {value.details}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with distinct visual separation */}
      <section className="relative section-padding bg-gradient-to-br from-white via-neutral-light to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-base/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent-gold/20 rounded-lg rotate-12"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-primary-base/20 rounded-lg -rotate-12"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Card container with shadow */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100">
              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-amber rounded-2xl mb-6 mx-auto">
                <Handshake className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-base mb-6 text-center">
                Ready to Work Together?
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-muted mb-10 text-center max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how Lynnsup can support your business with reliable, professional industrial services.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-gray-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent-gold mb-1">5+</div>
                  <div className="text-xs md:text-sm text-neutral-muted">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent-gold mb-1">150+</div>
                  <div className="text-xs md:text-sm text-neutral-muted">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent-gold mb-1">9+</div>
                  <div className="text-xs md:text-sm text-neutral-muted">Services</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-gold to-accent-amber text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all shadow-lg hover:scale-105"
                >
                  Get in Touch
                  <Handshake className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-base text-primary-base px-8 py-4 rounded-xl font-semibold hover:bg-primary-base hover:text-white transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
