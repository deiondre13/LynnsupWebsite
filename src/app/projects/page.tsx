'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Building2,
  Wrench,
  Zap,
  HardHat,
  Droplet,
  Mountain,
  Users,
  CheckCircle,
  Calendar,
  MapPin,
  Award
} from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Hillside Office Revamps/ Building Renovation',
      category: 'Construction',
      location: 'Hillside, Johannesburg',
      duration: '8 months',
      status: 'Completed',
      year: '2024',
      description: 'Complete renovation of an office complex including structural upgrades, modern finishes, and energy-efficient systems.',
      image: '/projects/sandton-office-renovation.jpg',
      highlights: [
        'Full structural assessment and reinforcement',
        'Modern interior design and finishes',
        'Energy-efficient HVAC installation',
        'Upgraded electrical and plumbing systems'
      ],
      stats: {
        area: '12,000 m²',
        team: '15 workers'
      }
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Mining Training Material Development',
      category: 'Mining & Technical',
      location: 'Rustenburg, North West',
      duration: '12 months',
      status: 'Completed',
      year: '2023',
      description: 'Comprehensive SAQA/QCTO accredited training material development for underground mining operations and safety procedures.',
      image: '/projects/mining-site.jpg',
      highlights: [
        'SAQA/QCTO accredited curriculum',
        'Interactive digital learning modules',
        'Safety procedure documentation',
        'Practical assessment materials'
      ],
      stats: {
        modules: '30+ Courses',
        trainees: 'Training Modules',
        compliance: '100%'
      }
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Industrial Electrical Compliance',
      category: 'Electrical Services',
      location: 'Johannesburg, Gauteng',
      duration: '6 months',
      status: 'Completed',
      year: '2024',
      description: 'Complete electrical compliance audit and certification for a major industrial facility including CoC issuance and safety upgrades.',
      image: '/projects/solar-installation.jpg',
      highlights: [
        'Full electrical system audit',
        'CoC certifications issued',
        'Safety compliance upgrades',
        'Emergency system installation'
      ],
      stats: {
        certificates: 'CoC Certificates',
        inspections: '120+',
        compliance: '100%'
      }
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: 'PPE Supply Contract - Mining Sector',
      category: 'Safety & PPE',
      location: 'Multiple Sites, SA',
      duration: '24 months',
      status: 'Ongoing',
      year: '2023-2025',
      description: 'Long-term PPE supply agreement providing comprehensive safety equipment to mining operations across South Africa.',
      image: '/projects/mining-site.jpg',
      highlights: [
        'Monthly PPE deliveries',
        'Quality assurance testing',
        'On-site safety training',
        'Emergency stock management'
      ],
      stats: {
        items: '5,000+- units',
        sites: 'Different locations',
        clients: '1,000+- clients'
      }
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Commercial Plumbing Installation',
      category: 'Plumbing Services',
      location: 'Pretoria, Gauteng',
      duration: '4 months',
      status: 'Completed',
      year: '2024',
      description: 'Complete plumbing system installation for a new commercial building including water supply, drainage, and fire suppression systems.',
      image: '/projects/sandton-office-renovation.jpg',
      highlights: [
        'Modern water-efficient fixtures',
        'Fire suppression system',
        'Rainwater harvesting setup',
        'Greywater recycling system'
      ]
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Underground Mine Support Services',
      category: 'Mining & Technical',
      location: 'Carletonville, Gauteng',
      duration: '18 months',
      status: 'Ongoing',
      year: '2023-2025',
      description: 'Comprehensive technical support services for underground mining operations including maintenance, repairs, and safety compliance.',
      image: '/projects/mining-site.jpg',
      highlights: [
        '24/7 technical support',
        'Equipment maintenance',
        'Safety system monitoring',
        'Emergency response team'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Residential Development - Phase 2',
      category: 'Construction',
      location: 'Centurion, Gauteng',
      duration: '14 months',
      status: 'In Progress',
      year: '2024-2025',
      description: 'Construction of 45 residential units with modern amenities, sustainable design, and community facilities.',
      image: '/projects/construction-worker.jpg',
      highlights: [
        '45 residential units',
        'Sustainable building materials',
        'Solar power integration',
        'Community recreation facilities'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Corporate Sourcing Solutions',
      category: 'Sourcing Services',
      location: 'Nationwide',
      duration: '36 months',
      status: 'Ongoing',
      year: '2022-2025',
      description: 'Comprehensive sourcing and supply chain management for multiple corporate clients across various industries.',
      image: '/projects/sandton-office-renovation.jpg',
      highlights: [
        'Multi-industry sourcing',
        'Vendor management',
        'Quality assurance',
        'Cost optimization'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Solar Installation Project',
      category: 'Electrical Services',
      location: 'Midrand, Gauteng',
      duration: '3 months',
      status: 'Completed',
      year: '2024',
      description: 'Large-scale solar panel installation for commercial facility including battery storage and grid integration.',
      image: '/projects/solar-installation.jpg',
      highlights: [
        'Large-scale solar array',
        'Battery storage system',
        'Grid-tie integration',
        'Monitoring system'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section — asymmetric 7/5 split: headline left, stats stacked right */}
      <section aria-labelledby="projects-hero-heading" className="relative py-24 md:py-28 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-12">
            {/* Left — headline block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>Portfolio Showcase</span>
              </div>

              <h1 id="projects-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Our <span className="text-accent-gold">Projects</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
                Delivering excellence across construction, mining, technical, and industrial services throughout South Africa
              </p>

              <p className="text-base md:text-lg text-white/70">
                From large-scale construction projects to specialized technical solutions, we bring expertise,
                compliance, and innovation to every engagement.
              </p>
            </motion.div>

            {/* Right — stats stacked with offsets */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  {projects.length}+
                </div>
                <div className="text-white/90 font-semibold mb-1">Projects Completed</div>
                <div className="text-white/60 text-sm">Across multiple industries</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all lg:ml-10">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  100%
                </div>
                <div className="text-white/90 font-semibold mb-1">Client Satisfaction</div>
                <div className="text-white/60 text-sm">Quality guaranteed</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  5+
                </div>
                <div className="text-white/90 font-semibold mb-1">Industries Served</div>
                <div className="text-white/60 text-sm">Diverse expertise</div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Building2 className="w-6 h-6 text-accent-gold mb-2" aria-hidden="true" />
              <div className="text-white/90 font-semibold text-sm">Construction</div>
              <div className="text-white/60 text-xs">Commercial & Residential</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Mountain className="w-6 h-6 text-accent-gold mb-2" aria-hidden="true" />
              <div className="text-white/90 font-semibold text-sm">Mining</div>
              <div className="text-white/60 text-xs">Technical Support</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Zap className="w-6 h-6 text-accent-gold mb-2" aria-hidden="true" />
              <div className="text-white/90 font-semibold text-sm">Electrical</div>
              <div className="text-white/60 text-xs">Compliance & Installation</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <HardHat className="w-6 h-6 text-accent-gold mb-2" aria-hidden="true" />
              <div className="text-white/90 font-semibold text-sm">Safety & PPE</div>
              <div className="text-white/60 text-xs">Supply & Training</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid — image-header cards that fade into the card body */}
      <section className="section-padding bg-gradient-to-b from-white via-neutral-light/30 to-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-light hover:border-accent-gold/50 h-full group-hover:-translate-y-2">
                  {/* Image header — fades into the white card body */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority={index < 2}
                    />

                    {/* Fade into card body (screenshot-style) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" aria-hidden="true"></div>
                    {/* Gold wash on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

                    {/* Category chip — top-left */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-base/80 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Status pill — top-right */}
                    <div className="absolute top-4 right-4">
                      <span className={`relative px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === 'Completed'
                          ? 'bg-green-500/90 text-white'
                          : project.status === 'Ongoing'
                          ? 'bg-blue-500/90 text-white'
                          : 'bg-yellow-500/90 text-white'
                      }`}>
                        {project.status === 'Ongoing' && (
                          <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping" aria-hidden="true"></span>
                        )}
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative px-6 pb-6">
                    {/* Icon badge — overlaps the faded image edge */}
                    <div className="w-14 h-14 -mt-8 mb-4 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center text-white shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-primary-base mb-3 group-hover:text-accent-gold transition-colors">
                      {project.title}
                    </h3>

                    {/* Meta information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-muted">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-accent-amber rounded-full mb-4 group-hover:w-full transition-all duration-500" aria-hidden="true"></div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-base mb-3 uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-dark">
                            <CheckCircle className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-light">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-lg font-bold text-accent-gold mb-1">{value}</div>
                            <div className="text-xs text-neutral-muted capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
