'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

/**
 * TestimonialSlider Component
 * 
 * Auto-rotating testimonial slider with manual controls.
 * Auto-pause on hover.
 * 
 * Props:
 * @param testimonials - Array of testimonial objects
 * @param autoPlayInterval - Auto-rotation interval in ms (default: 5000)
 */

interface Testimonial {
  quote: string
  author: string
  position: string
  company?: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export default function TestimonialSlider({ 
  testimonials, 
  autoPlayInterval = 5000 
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, testimonials.length, autoPlayInterval])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center px-8"
          >
            <Quote className="w-12 h-12 text-accent-gold mx-auto mb-6" />
            
            <blockquote className="text-2xl md:text-3xl font-light text-neutral-dark mb-8 leading-relaxed">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>

            <div className="space-y-1">
              <div className="font-heading font-semibold text-lg text-primary-base">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-neutral-muted">
                {testimonials[currentIndex].position}
                {testimonials[currentIndex].company && ` • ${testimonials[currentIndex].company}`}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-accent-gold w-8' 
                  : 'bg-neutral-surface hover:bg-neutral-muted'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
