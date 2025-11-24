'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import { staggerContainer, staggerItem } from '@/lib/animations'

/**
 * StatsSection Component
 * 
 * Displays company statistics with animated counters.
 * 
 * Props:
 * @param stats - Array of stat objects with label, value, suffix
 */

interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

interface StatsSectionProps {
  stats: Stat[]
  title?: string
  subtitle?: string
}

export default function StatsSection({ stats, title, subtitle }: StatsSectionProps) {
  return (
    <section className="section-padding bg-gradient-dark text-white">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-heading font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={staggerItem}
            >
              <div className="text-5xl md:text-6xl text-accent-gold mb-3">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-lg text-white/90 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
