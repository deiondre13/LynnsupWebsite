'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [ticketNumber, setTicketNumber] = useState<string | null>(null)
  const [customerConfirmationSent, setCustomerConfirmationSent] = useState<boolean | null>(null)

  const generateTicketNumber = () => {
    const now = new Date()
    const yyyy = now.getFullYear()
    const mm = String(now.getMonth() + 1).padStart(2, '0')
    const dd = String(now.getDate()).padStart(2, '0')

    const bytes = new Uint8Array(6)
    crypto.getRandomValues(bytes)
    const rand = Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 8)
      .toUpperCase()

    return `LYN-${yyyy}${mm}${dd}-${rand}`
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTicketNumber(null)
    setCustomerConfirmationSent(null)
    
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const internalTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      const customerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID

      if (!serviceId || !internalTemplateId || !publicKey) {
        setStatus('error')
        return
      }

      const ticket = generateTicketNumber()

      // Send email using EmailJS
      const internalResult = await emailjs.send(
        serviceId,
        internalTemplateId,
        {
          ticket_number: ticket,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'machaputadiwa1@gmail.com',
        },
        publicKey
      )

      if (internalResult.text !== 'OK') {
        setStatus('error')
        return
      }

      if (!customerTemplateId) {
        setCustomerConfirmationSent(false)
      } else {
        try {
          const customerResult = await emailjs.send(
            serviceId,
            customerTemplateId,
            {
              ticket_number: ticket,
              customer_name: formData.name,
              customer_email: formData.email,
              subject: formData.subject,
              message: formData.message,
              to_email: formData.email,
              support_email: 'info@lynnsup.co.za',
            },
            publicKey
          )

          setCustomerConfirmationSent(customerResult.text === 'OK')
        } catch (error) {
          console.error('Customer confirmation email error:', error)
          setCustomerConfirmationSent(false)
        }
      }

      setStatus('success')
      setTicketNumber(ticket)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email send error:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const offices = [
    {
      name: 'Main Office - Rand West City',
      address: '165 De Villiers Road',
      city: 'Hillside, Randfontein 1759',
      region: 'Gauteng',
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Get in <span className="text-accent-gold">Touch</span>
              </h1>
              
              {/* Main description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
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
                  <div className="text-white/90 text-sm font-semibold mb-1">Main Office</div>
                  <div className="text-white/70 text-xs">Rand West City</div>
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
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-base mb-3">
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
                        <p className="text-sm text-green-700">
                          Your ticket number is{' '}
                          <span className="font-semibold">{ticketNumber || '—'}</span>. We&apos;ll get back to you within 24 hours.
                        </p>
                        {customerConfirmationSent === false && (
                          <p className="text-sm text-green-700">
                            If you don&apos;t receive a confirmation email, please keep this ticket number for reference.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Failed to send message</p>
                        <p className="text-sm text-red-700">Please try again or call us directly at +27 72 294 8797</p>
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
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-base mb-2">
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

      {/* Office Location - Professional Single Location Design */}
      <section className="relative section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-gold/10 to-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-base/5 to-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 text-accent-gold px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-accent-gold/20">
              <MapPin className="w-4 h-4" />
              <span>Visit Us</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Our <span className="bg-gradient-to-r from-accent-gold via-yellow-500 to-amber-500 bg-clip-text text-transparent">Headquarters</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Centrally located in Rand West City to serve clients across Gauteng and beyond
            </p>
          </motion.div>

          {/* Single Office - Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Decorative top bar */}
              <div className="h-2 bg-gradient-to-r from-accent-gold via-yellow-500 to-amber-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Visual/Map placeholder */}
                <div className="relative bg-gradient-to-br from-primary-base to-primary-contrast p-12 flex items-center justify-center overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent-gold/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Large icon */}
                    <div className="relative inline-block mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-accent-gold/30 transform hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-16 h-16 text-white" />
                      </div>
                      {/* Animated pulse rings */}
                      <div className="absolute inset-0 w-32 h-32 bg-accent-gold/30 rounded-3xl animate-ping"></div>
                      <div className="absolute inset-0 w-32 h-32 bg-accent-gold/20 rounded-3xl animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      Main Office
                    </h3>
                    <p className="text-white/80 text-sm">
                      Serving clients nationwide
                    </p>
                    
                    {/* Quick stats */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-accent-gold mb-1">24/7</div>
                        <div className="text-xs text-white/80">Available</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="text-2xl font-bold text-accent-gold mb-1">5min</div>
                        <div className="text-xs text-white/80">Response</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="p-10 lg:p-12">
                  <div className="space-y-8">
                    {/* Office name */}
                    <div>
                      <div className="inline-flex items-center gap-2 bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></span>
                        Headquarters
                      </div>
                      <h4 className="text-3xl font-heading font-bold text-primary-base mb-2">
                        {offices[0].name}
                      </h4>
                    </div>

                    {/* Address details */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 font-semibold mb-1">STREET ADDRESS</div>
                          <div className="text-gray-800 font-medium">{offices[0].address}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 font-semibold mb-1">CITY & POSTAL CODE</div>
                          <div className="text-gray-800 font-medium">{offices[0].city}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 font-semibold mb-1">PROVINCE</div>
                          <div className="text-gray-800 font-medium">{offices[0].region}, South Africa</div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=165+De+Villiers+Road+Hillside+Randfontein+1759+South+Africa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-base font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-gold/30 transition-all hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Get Directions
                      </a>
                      <a
                        href="tel:+27722948797"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-accent-gold text-accent-gold font-semibold rounded-xl hover:bg-accent-gold hover:text-white transition-all hover:scale-105"
                      >
                        <Phone className="w-5 h-5" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-base mb-2">Office Hours</h4>
              <p className="text-sm text-gray-600">Mon-Fri: 8AM-5PM<br/>Sat: 9AM-1PM</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-base mb-2">Walk-ins Welcome</h4>
              <p className="text-sm text-gray-600">No appointment needed for consultations</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary-base mb-2">Free Parking</h4>
              <p className="text-sm text-gray-600">Ample parking available on-site</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
