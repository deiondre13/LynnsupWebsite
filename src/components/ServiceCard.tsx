'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { staggerItem, hoverLift } from '@/lib/animations'

/**
 * ServiceCard Component
 * 
 * Equal-height card with icon, title, and description.
 * Features hover lift animation and staggered reveal on scroll.
 * 
 * Props:
 * @param icon - Lucide icon component
 * @param title - Service title
 * @param description - Service description
 * @param features - Optional array of feature strings
 */

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <motion.div
      className="card h-full flex flex-col"
      variants={staggerItem}
      initial="rest"
      whileHover="hover"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div
        className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6"
        variants={hoverLift}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-2xl font-heading font-semibold text-primary-base mb-4">
        {title}
      </h3>

      <p className="text-neutral-muted mb-6 flex-grow">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-neutral-dark">
              <span className="text-accent-gold mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
