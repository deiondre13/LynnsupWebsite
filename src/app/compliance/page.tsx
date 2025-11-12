'use client'

import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle2, FileText, Users, Building2, TrendingUp, Phone, Mail } from 'lucide-react'

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
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Compliance & <span className="text-accent-gold">Certifications</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Committed to the highest standards of compliance, safety, and quality in all our operations
              across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Registration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-base mb-4">
                Registered Company
              </h2>
              <div className="divider-gold mx-auto mb-6"></div>
              <p className="text-lg text-neutral-muted mb-6">
                <strong className="text-primary-base">Lynnsup (Pty) Ltd</strong> is a fully registered 
                South African company with the Companies and Intellectual Property Commission (CIPC).
              </p>
              <div className="inline-block px-8 py-4 bg-neutral-light rounded-lg">
                <p className="text-sm text-neutral-muted mb-2">Registration Number</p>
                <p className="text-3xl font-heading font-bold text-primary-base">2019/463569/07</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-primary-base mb-4">
              Certifications & <span className="gradient-text">Compliance</span>
            </h2>
            <div className="divider-gold mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
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

      {/* Compliance Commitments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-heading font-bold text-primary-base mb-4">
                Our <span className="gradient-text">Commitments</span>
              </h2>
              <div className="divider-gold mx-auto mb-6"></div>
              <p className="text-lg text-neutral-muted">
                Wherever we operate, we maintain the highest standards of compliance and professionalism
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
                  <span className="text-neutral-dark">{commitment}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth & Opportunities - Redesigned */}
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
                  <TrendingUp className="w-4 h-4" />
                  <span>Growth Opportunities</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                  Open to Growth &<br />
                  <span className="text-accent-gold">New Opportunities</span>
                </h2>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  We are committed to continuous growth, compliance excellence, and openness to new opportunities 
                  that align with our values and benefit our clients and communities.
                </p>

                {/* Key benefits */}
                <div className="space-y-4 mb-8">
                  {[
                    'Continuous compliance improvement',
                    'Strategic partnership opportunities',
                    'Sustainable growth initiatives',
                    'Community-focused development'
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                      </div>
                      <span className="text-white/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-accent-gold text-primary-base px-8 py-4 rounded-xl font-semibold hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Partner With Us
                    <Users className="w-5 h-5" />
                  </a>
                  <a 
                    href="/services" 
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
                  >
                    Our Services
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
                    <Shield className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Compliance Excellence
                  </h3>
                  <p className="text-white/70">
                    Building trust through regulatory adherence
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-gold mb-1">100%</div>
                      <div className="text-xs text-white/70">Compliance Rate</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-accent-gold mb-1">ISO</div>
                      <div className="text-xs text-white/70">Certified</div>
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

                  <a 
                    href="/contact"
                    className="block w-full text-center bg-accent-gold/20 hover:bg-accent-gold/30 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-accent-gold/30"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
