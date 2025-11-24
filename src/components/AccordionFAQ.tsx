'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/**
 * AccordionFAQ Component
 * 
 * Expandable FAQ accordion with smooth animations.
 * 
 * Props:
 * @param items - Array of FAQ items with question and answer
 */

interface FAQItem {
  question: string
  answer: string
}

interface AccordionFAQProps {
  items: FAQItem[]
}

export default function AccordionFAQ({ items }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="card overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-neutral-light transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-heading font-semibold text-lg text-primary-base pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-accent-gold flex-shrink-0" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-6 text-neutral-muted">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
