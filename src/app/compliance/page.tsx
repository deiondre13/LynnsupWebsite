'use client'

import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle2, FileText, Users, Building2 } from 'lucide-react'

export default function CompliancePage() {
  const certifications = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'CIPC Registered',
      description: 'Officially registered with the Companies and Intellectual Property Commission',
      detail: 'Registration No: 2019/463569/07',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Health & Safety Compliance',
      description: 'Full compliance with occupational health, safety, and hygiene regulations',
      detail: 'Certified safety procedures and protocols',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Industry Standards',
      description: 'Adherence to all company operating standards and industry best practices',
      detail: 'ISO-aligned quality management',
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Electrical CoC',
      description: 'Licensed to issue Certificates of Compliance for electrical installations',
      detail: 'Qualified electrical contractors',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'B-BBEE Level 1',
      description: 'Broad-Based Black Economic Empowerment Level 1 contributor status',
      detail: 'B-BBEE Level 1 Certificate',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'COIDA Registered',
      description: 'Registered with the Compensation Fund under the Compensation for Occupational Injuries and Diseases Act',
      detail: 'COIDA Registration',
    },
  ]

  const commitments = [
    'Comply with all company operating standards and procedures',
    'Follow required occupational health and safety protocols',
    'Implement hygiene procedures per industry requirements',
    'Adhere to environmental regulations and guidelines',
    'Maintain transparency in all business operations',
    'Continuous training and development of personnel',
    'Regular audits and compliance reviews',
    'Partnership with certified industry bodies',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section — asymmetric 7/5 split with staggered stats */}
      <section aria-labelledby="compliance-hero-heading" className="relative py-24 md:py-28 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative blur orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left — headline block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" aria-hidden="true" />
                <span>Certified Excellence</span>
              </div>

              {/* Heading */}
              <h1 id="compliance-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Compliance & <span className="text-accent-gold">Certifications</span>
              </h1>

              {/* Main description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
                Committed to the highest standards of compliance, safety, and quality in all our operations
                across South Africa.
              </p>

              {/* Additional context */}
              <p className="text-base md:text-lg text-white/70">
                Our comprehensive compliance framework ensures regulatory adherence, workplace safety,
                and industry-leading quality standards across all service areas.
              </p>
            </motion.div>

            {/* Right — stats as staggered 2×2 */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">100%</div>
                <div className="text-white/90 text-sm font-semibold">Compliant</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 sm:translate-y-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">CIPC</div>
                <div className="text-white/90 text-sm font-semibold">Registered</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">ISO</div>
                <div className="text-white/90 text-sm font-semibold">Aligned</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 sm:translate-y-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">CoC</div>
                <div className="text-white/90 text-sm font-semibold">Licensed</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Registration — asymmetric split with the number as a statement panel */}
      <section aria-labelledby="registration-heading" className="py-20 md:py-24 px-4 md:px-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
              <h2 id="registration-heading" className="text-3xl font-heading font-bold text-primary-base mb-4">
                Registered Company
              </h2>
              <div className="divider-gold mb-6"></div>
              <p className="text-lg text-neutral-muted">
                <strong className="text-primary-base">Lynnsup (Pty) Ltd</strong> is a fully registered
                South African company with the Companies and Intellectual Property Commission (CIPC).
              </p>
            </motion.div>

            {/* Registration number as a big offset statement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div aria-hidden="true" className="hidden md:block absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent-gold/30"></div>
              <div className="relative px-8 py-10 bg-neutral-light rounded-2xl border-l-4 border-accent-gold">
                <p className="text-sm text-neutral-muted mb-2 uppercase tracking-wider">Registration Number</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-base">2019/463569/07</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Grid — left-aligned header, staggered columns */}
      <section aria-labelledby="certifications-heading" className="py-24 md:py-28 px-4 md:px-8 bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <h2 id="certifications-heading" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-base mb-4">
              Certifications & <span className="gradient-text">Compliance</span>
            </h2>
            <div className="divider-gold mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card ${index % 3 === 1 ? 'lg:translate-y-8' : ''}`}
              >
                <div className="text-accent-gold mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-base mb-3">
                  {cert.title}
                </h3>
                <p className="text-neutral-muted mb-3">
                  {cert.description}
                </p>
                <p className="text-sm font-medium text-accent-gold">
                  {cert.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitments — asymmetric split with a proper checklist */}
      <section aria-labelledby="commitments-heading" className="py-20 md:py-24 px-4 md:px-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <h2 id="commitments-heading" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-base mb-4">
                Our <span className="gradient-text">Commitments</span>
              </h2>
              <div className="divider-gold mb-6"></div>
              <p className="text-lg text-neutral-muted">
                Wherever we operate, we maintain the highest standards of compliance and professionalism
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 list-none"
            >
              {commitments.map((commitment, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 w-7 h-7 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                  </span>
                  <span className="text-neutral-dark">{commitment}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Angled divider into the closing band */}
      <div aria-hidden="true" className="bg-white">
        <div className="h-12 md:h-16 bg-primary-base [clip-path:polygon(0_100%,100%_0,100%_100%,0_100%)]" />
      </div>

      {/* Growth & Opportunities — left-aligned with staggered value cards */}
      <section aria-labelledby="growth-heading" className="relative py-20 md:py-28 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" aria-hidden="true"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header — left-aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 max-w-3xl"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/20 rounded-full mb-6">
                <Users className="w-10 h-10 text-accent-gold" aria-hidden="true" />
              </div>

              <h2 id="growth-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Open to Growth & <span className="text-accent-gold">New Opportunities</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4">
                We are committed to continuous growth, compliance excellence, and openness to new opportunities
                that align with our values and benefit our clients and communities.
              </p>

              <p className="text-base md:text-lg text-white/70">
                Partner with a company that prioritizes integrity, innovation, and sustainable growth.
              </p>
            </motion.div>

            {/* Value Propositions Grid — middle card offset */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Compliance First</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Every partnership is built on a foundation of regulatory compliance and industry best practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all md:translate-y-6"
              >
                <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Quality Driven</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We maintain the highest standards of quality and safety across all our service offerings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Trust & Integrity</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Transparent operations and ethical business practices are at the core of everything we do.
                </p>
              </motion.div>
            </div>

            {/* CTA Section — left-aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="/contact"
                  className="group relative px-8 py-4 bg-accent-gold text-primary-base font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Partner With Us
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>

                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-base"
                >
                  Explore Services
                </a>
              </div>

              <p className="text-white/60 text-sm mt-6">
                Ready to discuss opportunities? Get in touch with our team today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
