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
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Get in <span className="text-accent-gold">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to discuss your project? Contact us today for a consultation and discover 
              how Lynnsup can support your business needs.
            </p>
          </motion.div>
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
