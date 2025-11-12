'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * LazyImage Component
 * 
 * Image with blur placeholder and fade-in animation.
 * 
 * Props:
 * @param src - Image source
 * @param alt - Alt text
 * @param className - Additional CSS classes
 * @param fill - Use fill layout (default: false)
 * @param width - Image width (if not using fill)
 * @param height - Image height (if not using fill)
 */

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  fill = false,
  width,
  height,
  priority = false
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-surface animate-pulse" />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={fill ? 'object-cover' : ''}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
        />
      </motion.div>
    </div>
  )
}
