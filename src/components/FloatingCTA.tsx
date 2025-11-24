'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

/**
 * FloatingCTA Component
 * 
 * Sticky floating "Contact Us" button for mobile view.
 * Appears after scrolling down and hides on scroll up.
 * 
 * Props:
 * @param href - Link destination (default: /contact)
 * @param text - Button text (default: "Contact Us")
 * @param showOnMobileOnly - Only show on mobile devices
 */

interface FloatingCTAProps {
  href?: string
  text?: string
  showOnMobileOnly?: boolean
}

export default function FloatingCTA({ 
  href = '/contact', 
  text = 'Contact Us',
  showOnMobileOnly = true 
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      
      // Show after scrolling down 300px
      if (currentScrollY > 300) {
        // Hide when scrolling down, show when scrolling up
        setIsVisible(currentScrollY < lastScrollY)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={href}
          className={`fixed bottom-20 right-4 z-40 bg-gradient-gold text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 ${
            showOnMobileOnly ? 'md:hidden' : ''
          }`}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5" />
          {text}
        </motion.a>
      )}
    </AnimatePresence>
  )
}
