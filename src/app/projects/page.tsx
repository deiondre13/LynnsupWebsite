'use client'

import { motion } from 'framer-motion'
import { Building2, Wrench, Zap, HardHat } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Construction & Renovation',
      category: 'Construction',
      description: 'Multiple commercial and residential projects across Gauteng region',
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Mining Training Materials',
      category: 'Mining & Technical',
      description: 'SAQA/QCTO training material development for major mining company',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Electrical Compliance',
      category: 'Electrical Services',
      description: 'CoC certifications and compliance for commercial properties',
    },
    {
      icon: <HardHat className="w-12 h-12" />,
      title: 'PPE Supply Contracts',
      category: 'Safety & PPE',
      description: 'Long-term PPE supply agreements with industrial clients',
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-accent-gold">Projects</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering excellence across construction, mining, technical, and industrial services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <span className="text-sm font-medium text-accent-gold mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-heading font-bold text-primary-base mb-3">{project.title}</h3>
                <p className="text-neutral-muted">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
