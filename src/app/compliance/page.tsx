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
                <Shield className="w-4 h-4" />
                <span>Certified Excellence</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Compliance & <span className="text-accent-gold">Certifications</span>
              </h1>
              
              {/* Main description */}
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
                Committed to the highest standards of compliance, safety, and quality in all our operations
                across South Africa.
              </p>

              {/* Additional context */}
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12">
                Our comprehensive compliance framework ensures regulatory adherence, workplace safety, 
                and industry-leading quality standards across all service areas.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
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
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-1">CoC</div>
                  <div className="text-white/90 text-sm font-semibold">Licensed</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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

      {/* Growth & Opportunities */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-16 h-16 text-accent-gold mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold mb-6">
                Open to Growth & New Opportunities
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We are committed to continuous growth, compliance excellence, and openness to new opportunities
                that align with our values and benefit our clients and communities.
              </p>
              <a href="/contact" className="btn-primary bg-gradient-gold">
                Partner With Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
