'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

/**
 * AnimatedCounter Component
 * 
 * Animates a number from 0 to target value when scrolled into view.
 * Perfect for statistics and metrics.
 * 
 * Props:
 * @param value - Target number to count to
 * @param duration - Animation duration in seconds (default: 2)
 * @param suffix - Optional suffix (e.g., '+', '%')
 * @param prefix - Optional prefix (e.g., '$')
 */

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = '', 
  prefix = '' 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
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
    springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref} className="font-heading font-bold">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}
