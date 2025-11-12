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
  ArrowRight
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
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-accent-gold">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive multi-service solutions designed to support your business operations
              with excellence, compliance, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Icon & Title Column */}
                <div className="flex-1">
                  <div className="card">
                    <div className="text-accent-gold mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-primary-base mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-neutral-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features Column */}
                <div className="flex-1">
                  <div className="card bg-neutral-light">
                    <h3 className="text-xl font-heading font-semibold text-primary-base mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-dark leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Contact us to discuss your specific requirements and discover how our services can support your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent-gold text-primary-base px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-amber transition-all shadow-lg hover:shadow-xl">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
