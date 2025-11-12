'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxSection Component
 * 
 * Creates a parallax scrolling effect for child content.
 * Text moves slightly slower than scroll for depth effect.
 * 
 * Props:
 * @param children - Content to apply parallax effect to
 * @param offset - Parallax offset amount (default: 50)
 */

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
}

export default function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
