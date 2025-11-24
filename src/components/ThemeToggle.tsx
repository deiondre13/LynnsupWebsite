'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

/**
 * ThemeToggle Component
 * 
 * Light/Dark mode toggle switch.
 * Auto-detects system preference on first load.
 * 
 * Usage:
 * <ThemeToggle />
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-neutral-surface dark:bg-neutral-dark rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-primary-base" />
        ) : (
          <Sun className="w-3 h-3 text-accent-gold" />
        )}
      </motion.div>
    </button>
  )
}
