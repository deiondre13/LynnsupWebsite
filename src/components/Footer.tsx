'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight, Award, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/compliance', label: 'Compliance' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    { name: 'Technical Support & Design', href: '/services#technical' },
    { name: 'Construction & Plumbing', href: '/services#construction' },
    { name: 'Electrical Services & CoC', href: '/services#electrical' },
    { name: 'PPE Supply', href: '/services#ppe' },
    { name: 'Mining Participation', href: '/services#mining' },
    { name: 'Labour Supply', href: '/services#labour' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      {/* Main Footer Content */}
      <div className="container-custom relative z-10 py-16 md:py-20">
        {/* Top Section - Company Info & Newsletter */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Company Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-gold to-accent-amber rounded-xl flex items-center justify-center font-bold text-primary-base text-2xl shadow-lg group-hover:scale-105 transition-transform">
                  LS
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-2xl">Lynnsup</span>
                  <span className="text-sm text-white/70">Pty Ltd</span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/80 text-lg mb-4 leading-relaxed">
              Professional industrial services backed by expertise, compliance, and excellence.
            </p>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-medium">CIPC Registered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-medium">ISO Compliant</span>
              </div>
            </div>
            
            <p className="text-xs text-white/50 mb-6">
              Registration No: 2019/463569/07
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-accent-gold/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-accent-gold/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-accent-gold/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-accent-gold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent-gold transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-accent-gold">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-accent-gold transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-accent-gold">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-accent-gold" />
                    <span className="text-xs text-white/50 uppercase tracking-wide">Email</span>
                  </div>
                  <a 
                    href="mailto:info@lynnsup.co.za" 
                    className="text-white/80 hover:text-accent-gold transition-colors block text-sm"
                  >
                    info@lynnsup.co.za
                  </a>
                  <a 
                    href="mailto:admin@lynnsup.co.za" 
                    className="text-white/80 hover:text-accent-gold transition-colors block text-sm"
                  >
                    admin@lynnsup.co.za
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-accent-gold" />
                    <span className="text-xs text-white/50 uppercase tracking-wide">Phone</span>
                  </div>
                  <a 
                    href="tel:+27722948797" 
                    className="text-white/80 hover:text-accent-gold transition-colors block text-sm"
                  >
                    +27 72 294 8797
                  </a>
                  <a 
                    href="tel:+27725858196" 
                    className="text-white/80 hover:text-accent-gold transition-colors block text-sm"
                  >
                    +27 72 585 8196
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent-gold" />
                    <span className="text-xs text-white/50 uppercase tracking-wide">Address</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    165 De Villiers Road<br />
                    Hillside, Randfontein 1759<br />
                    Gauteng, South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-white/50 text-sm">
            © {currentYear} Lynnsup (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-accent-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="text-white/50 hover:text-accent-gold transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/compliance" className="text-white/50 hover:text-accent-gold transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
