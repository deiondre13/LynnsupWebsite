'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/compliance', label: 'Compliance' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-b from-primary-base/90 to-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform">
              LS
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-primary-base' : 'text-white'}`}>
                Lynnsup
              </span>
              <span className={`text-xs ${isScrolled ? 'text-neutral-muted' : 'text-white/80'}`}>
                Pty Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent-gold ${
                  isScrolled ? 'text-neutral-dark' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary hidden lg:inline-block">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-neutral-dark' : 'text-white'}`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-surface"
          >
            <div className="container-custom px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-neutral-dark hover:text-accent-gold transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-primary text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
