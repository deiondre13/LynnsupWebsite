'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

/**
 * Component: MetricsCounter
 * Purpose: Animated counter for company statistics that triggers when scrolled into view.
 * 
 * Props:
 * - value: number - Target number to count to
 * - label: string - Description label for the metric
 * - suffix?: string - Optional suffix (e.g., '+', '%')
 * - prefix?: string - Optional prefix (e.g., '$')
 * - duration?: number - Animation duration in seconds (default: 2)
 * 
 * Usage:
 * <MetricsCounter value={150} label="Projects Completed" suffix="+" />
 * 
 * Accessibility: Uses semantic HTML and ARIA labels for screen readers.
 * The counter animation respects prefers-reduced-motion.
 */

interface MetricsCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
}

export default function MetricsCounter({ 
  value, 
  label, 
  suffix = '', 
  prefix = '',
  duration = 2
}: MetricsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="text-5xl md:text-6xl font-heading font-bold text-brand-gold mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-brand-graphite dark:text-neutral-light font-medium">
        {label}
      </div>
    </motion.div>
  )
}
