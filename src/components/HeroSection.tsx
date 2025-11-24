'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeInUp, fadeInDown, staggerContainer } from '@/lib/animations'

/**
 * HeroSection Component
 * 
 * Full-width hero with navy→gold gradient background.
 * Includes headline, subhead, dual CTAs, and optional scroll indicator.
 * 
 * Props:
 * @param headline - Main heading text
 * @param subhead - Supporting text below headline
 * @param primaryCTA - Primary button config { text, href }
 * @param secondaryCTA - Secondary button config { text, href }
 * @param showScrollIndicator - Show animated scroll down arrow
 */

interface CTAButton {
  text: string
  href: string
}

interface HeroSectionProps {
  headline: string | React.ReactNode
  subhead: string
  primaryCTA?: CTAButton
  secondaryCTA?: CTAButton
  showScrollIndicator?: boolean
}

export default function HeroSection({
  headline,
  subhead,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = true
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        className="container-custom text-center relative z-10 px-8 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
          variants={fadeInDown}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
          variants={fadeInUp}
        >
          {subhead}
        </motion.p>

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            {primaryCTA && (
              <a
                href={primaryCTA.href}
                className="btn-primary bg-gradient-gold px-8 py-4 text-lg"
              >
                {primaryCTA.text}
              </a>
            )}
            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-base px-8 py-4 text-lg transition-all duration-300"
              >
                {secondaryCTA.text}
              </a>
            )}
          </motion.div>
        )}

        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ChevronDown className="w-8 h-8 text-accent-gold" />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
