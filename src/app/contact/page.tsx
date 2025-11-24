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
                <span>Let's Connect</span>
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

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-base mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary-base mb-6">
                  Contact Information
                </h2>
                <p className="text-neutral-muted mb-8">
                  Reach out to us through any of the following channels. We&apos;re here to help!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-base mb-2">Email</h3>
                      <a href="mailto:info@lynnsup.co.za" className="text-neutral-muted hover:text-accent-gold transition-colors block">
                        info@lynnsup.co.za
                      </a>
                      <a href="mailto:admin@lynnsup.co.za" className="text-neutral-muted hover:text-accent-gold transition-colors block">
                        admin@lynnsup.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-base mb-2">Phone</h3>
                      <a href="tel:+27722948797" className="text-neutral-muted hover:text-accent-gold transition-colors block">
                        +27 72 294 8797
                      </a>
                      <a href="tel:+27725858196" className="text-neutral-muted hover:text-accent-gold transition-colors block">
                        +27 72 585 8196
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-base mb-2">Main Office</h3>
                      <p className="text-neutral-muted">
                        165 De Villiers Road<br />
                        Hillside, Randfontein 1759<br />
                        Gauteng, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card bg-neutral-light">
                <h3 className="font-semibold text-primary-base mb-4">Business Hours</h3>
                <div className="space-y-2 text-neutral-muted">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-primary-base mb-4">
              Our <span className="gradient-text">Locations</span>
            </h2>
            <div className="divider-gold mx-auto mb-6"></div>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto">
              We operate from multiple locations across South Africa to better serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-base mb-3">
                  {office.name}
                </h3>
                <p className="text-neutral-muted">
                  {office.address}<br />
                  {office.city}<br />
                  {office.region}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
