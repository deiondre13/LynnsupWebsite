'use client'

import { motion } from 'framer-motion'
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
      title: 'Sandton Office Complex Renovation',
      category: 'Construction',
      location: 'Sandton, Gauteng',
      duration: '8 months',
      status: 'Completed',
      year: '2024',
      description: 'Complete renovation of a 5-story office complex including structural upgrades, modern finishes, and energy-efficient systems.',
      highlights: [
        'Full structural assessment and reinforcement',
        'Modern interior design and finishes',
        'Energy-efficient HVAC installation',
        'Upgraded electrical and plumbing systems'
      ],
      stats: {
        area: '12,000 m²',
        value: 'R 45M',
        team: '85 workers'
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
      highlights: [
        'SAQA/QCTO accredited curriculum',
        'Interactive digital learning modules',
        'Safety procedure documentation',
        'Practical assessment materials'
      ],
      stats: {
        modules: '24 courses',
        trainees: '500+',
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
      highlights: [
        'Full electrical system audit',
        'CoC certifications issued',
        'Safety compliance upgrades',
        'Emergency system installation'
      ],
      stats: {
        certificates: '45 CoCs',
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
      highlights: [
        'Monthly PPE deliveries',
        'Quality assurance testing',
        'On-site safety training',
        'Emergency stock management'
      ],
      stats: {
        items: '50,000+ units',
        sites: '12 locations',
        workers: '3,000+'
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
      highlights: [
        'Modern water-efficient fixtures',
        'Fire suppression system',
        'Rainwater harvesting setup',
        'Greywater recycling system'
      ],
      stats: {
        floors: '8 levels',
        fixtures: '200+ units',
        capacity: '50,000L'
      }
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
      highlights: [
        '24/7 technical support',
        'Equipment maintenance',
        'Safety system monitoring',
        'Emergency response team'
      ],
      stats: {
        depth: '2,500m',
        equipment: '150+ units',
        uptime: '98.5%'
      }
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
      highlights: [
        '45 residential units',
        'Sustainable building materials',
        'Solar power integration',
        'Community recreation facilities'
      ],
      stats: {
        units: '45 homes',
        area: '8,500 m²',
        completion: '65%'
      }
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
      highlights: [
        'Multi-industry sourcing',
        'Vendor management',
        'Quality assurance',
        'Cost optimization'
      ],
      stats: {
        clients: '25+ companies',
        suppliers: '200+',
        savings: '18% avg'
      }
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
      highlights: [
        '500kW solar array',
        'Battery storage system',
        'Grid-tie integration',
        'Monitoring system'
      ],
      stats: {
        panels: '1,200 units',
        capacity: '500kW',
        savings: '40% energy'
      }
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section - Enlarged & Enhanced */}
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Our <span className="text-accent-gold">Projects</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
                Delivering excellence across construction, mining, technical, and industrial services throughout South Africa
              </p>
              
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                From large-scale construction projects to specialized technical solutions, we bring expertise, 
                compliance, and innovation to every engagement.
              </p>
            </motion.div>

            {/* Stats Grid - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  {projects.length}+
                </div>
                <div className="text-white/90 font-semibold mb-1">Projects Completed</div>
                <div className="text-white/60 text-sm">Across multiple industries</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
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

            {/* Additional Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <Building2 className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                <div className="text-white/90 font-semibold text-sm">Construction</div>
                <div className="text-white/60 text-xs">Commercial & Residential</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <Mountain className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                <div className="text-white/90 font-semibold text-sm">Mining</div>
                <div className="text-white/60 text-xs">Technical Support</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <Zap className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                <div className="text-white/90 font-semibold text-sm">Electrical</div>
                <div className="text-white/60 text-xs">Compliance & Installation</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                <HardHat className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                <div className="text-white/90 font-semibold text-sm">Safety & PPE</div>
                <div className="text-white/60 text-xs">Supply & Training</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gradient-to-b from-white via-neutral-light/30 to-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-light hover:border-accent-gold/50 h-full group-hover:-translate-y-2">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                  
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
                    
                    {/* Decorative blur orbs */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    {/* Icon overlay with creative animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="relative"
                      >
                        {/* Rotating ring */}
                        <div className="absolute inset-0 w-28 h-28 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-0 w-28 h-28 border-2 border-accent-gold/30 rounded-full animate-spin-reverse"></div>
                        
                        {/* Icon container */}
                        <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-2xl">
                          {project.icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Status badge with pulse animation */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <span className={`relative px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/90 text-white' 
                          : project.status === 'Ongoing'
                          ? 'bg-blue-500/90 text-white'
                          : 'bg-yellow-500/90 text-white'
                      }`}>
                        {project.status === 'Ongoing' && (
                          <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
                        )}
                        {project.status}
                      </span>
                    </motion.div>

                    {/* Category badge with slide animation */}
                    <motion.div 
                      className="absolute bottom-4 left-4"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="bg-accent-gold/90 text-primary-base px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Year badge - creative addition */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                        {project.year.split('-')[0]}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-primary-base mb-3 group-hover:text-accent-gold transition-colors">
                      {project.title}
                    </h3>

                    {/* Meta information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-muted">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent-gold" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent-gold" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent-gold" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-accent-amber rounded-full mb-4"></div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-base mb-3 uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-dark">
                            <CheckCircle className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-light">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-accent-gold mb-1">{value}</div>
                          <div className="text-xs text-neutral-muted capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
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
