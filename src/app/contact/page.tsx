'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const offices = [
    {
      name: 'Main Office - Rand West City',
      address: '165 De Villiers Road',
      city: 'Hillside, Randfontein 1759',
      region: 'Gauteng',
    },
    {
      name: 'Office 2 - Merafong',
      address: '53 Platinum Street',
      city: 'Carletonville 2499',
      region: 'Merafong',
    },
    {
      name: 'Office 3 - Free State',
      address: '37 Mazeppa Way, Conera',
      city: 'Virginia',
      region: 'Free State',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section - Enlarged & Enhanced */}
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-primary-base via-primary-contrast to-primary-base text-white overflow-hidden">
        {/* Decorative blur orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Mail className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Get in <span className="text-accent-gold">Touch</span>
              </h1>
              
              {/* Main description */}
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
                Ready to discuss your project? Contact us today for a consultation and discover 
                how Lynnsup can support your business needs.
              </p>

              {/* Additional context */}
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12">
                Our team is available to answer your questions, provide quotes, and discuss how our 
                comprehensive services can meet your specific requirements.
              </p>

              {/* Contact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <Phone className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-white/90 text-sm font-semibold mb-1">Phone Support</div>
                  <div className="text-white/70 text-xs">Available 24/7</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <Mail className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-white/90 text-sm font-semibold mb-1">Email Response</div>
                  <div className="text-white/70 text-xs">Within 24 hours</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <MapPin className="w-8 h-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-white/90 text-sm font-semibold mb-1">3 Locations</div>
                  <div className="text-white/70 text-xs">Across South Africa</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Modernized */}
      <section className="section-padding bg-gradient-to-b from-white via-neutral-light/30 to-white relative">
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Modernized */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-neutral-light">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-accent-gold/10 text-accent-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Send className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-base mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-neutral-muted">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-base mb-2">
                        Full Name <span className="text-accent-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-neutral-light/50 border border-neutral-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-base mb-2">
                        Email Address <span className="text-accent-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-neutral-light/50 border border-neutral-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary-base mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 12 345 6789"
                        className="w-full px-4 py-3.5 bg-neutral-light/50 border border-neutral-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-primary-base mb-2">
                        Subject <span className="text-accent-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-3.5 bg-neutral-light/50 border border-neutral-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-base mb-2">
                      Message <span className="text-accent-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3.5 bg-neutral-light/50 border border-neutral-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-base font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className={`w-5 h-5 ${status === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'}`} />
                      {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                    </span>
                  </button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm text-green-700">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information - Modernized */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-light">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-base mb-2">
                    Contact Information
                  </h2>
                  <p className="text-neutral-muted">
                    Reach out through any of these channels
                  </p>
                </div>

                <div className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="group p-4 bg-gradient-to-r from-neutral-light/50 to-transparent rounded-xl hover:from-accent-gold/5 hover:to-transparent transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-gold/20">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-base mb-2 flex items-center gap-2">
                          Email
                          <span className="text-xs bg-accent-gold/10 text-accent-gold px-2 py-0.5 rounded-full">Preferred</span>
                        </h3>
                        <a href="mailto:info@lynnsup.co.za" className="text-neutral-muted hover:text-accent-gold transition-colors block text-sm mb-1">
                          info@lynnsup.co.za
                        </a>
                        <a href="mailto:admin@lynnsup.co.za" className="text-neutral-muted hover:text-accent-gold transition-colors block text-sm">
                          admin@lynnsup.co.za
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group p-4 bg-gradient-to-r from-neutral-light/50 to-transparent rounded-xl hover:from-accent-gold/5 hover:to-transparent transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-gold/20">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-base mb-2">Phone</h3>
                        <a href="tel:+27722948797" className="text-neutral-muted hover:text-accent-gold transition-colors block text-sm mb-1">
                          +27 72 294 8797
                        </a>
                        <a href="tel:+27725858196" className="text-neutral-muted hover:text-accent-gold transition-colors block text-sm">
                          +27 72 585 8196
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="group p-4 bg-gradient-to-r from-neutral-light/50 to-transparent rounded-xl hover:from-accent-gold/5 hover:to-transparent transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-gold/20">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-base mb-2">Main Office</h3>
                        <p className="text-neutral-muted text-sm leading-relaxed">
                          165 De Villiers Road<br />
                          Hillside, Randfontein 1759<br />
                          Gauteng, South Africa
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Business Hours - Modernized */}
              <div className="bg-gradient-to-br from-primary-base to-primary-contrast rounded-2xl shadow-xl p-8 text-white border border-primary-contrast">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/80">Monday - Friday</span>
                    <span className="font-semibold text-accent-gold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/80">Saturday</span>
                    <span className="font-semibold text-accent-gold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-semibold text-white/60">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm text-white/90 flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>We respond to all inquiries within 24 hours during business days.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations - Colorful & Modern Redesign */}
      <section className="relative section-padding bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-200">
              <MapPin className="w-4 h-4" />
              <span>Find Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Locations</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We operate from multiple locations across South Africa to better serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => {
              const gradients = [
                'from-purple-500 via-pink-500 to-rose-500',
                'from-blue-500 via-cyan-500 to-teal-500',
                'from-orange-500 via-amber-500 to-yellow-500'
              ]
              const bgGradients = [
                'from-purple-50 to-pink-50',
                'from-blue-50 to-cyan-50',
                'from-orange-50 to-yellow-50'
              ]
              const shadowColors = [
                'hover:shadow-purple-500/20',
                'hover:shadow-blue-500/20',
                'hover:shadow-orange-500/20'
              ]
              
              return (
                <motion.div
                  key={office.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative bg-white rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl ${shadowColors[index]} border border-gray-100`}
                >
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${bgGradients[index]} rounded-bl-full opacity-50`}></div>
                  
                  {/* Icon container with gradient */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    {/* Pulse ring */}
                    <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl mx-auto opacity-20 animate-ping`}></div>
                  </div>
                  
                  {/* Office number badge */}
                  <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${gradients[index]} text-white text-sm font-bold rounded-full mb-4 shadow-md`}>
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {office.name}
                  </h3>
                  
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center justify-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {office.address}
                    </p>
                    <p className="text-sm font-medium">{office.city}</p>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${bgGradients[index]} rounded-full text-sm font-semibold mt-2`}>
                      {office.region}
                    </div>
                  </div>

                  {/* View on map link */}
                  <div className="mt-6">
                    <a 
                      href="#" 
                      className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                    >
                      View on Map
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
