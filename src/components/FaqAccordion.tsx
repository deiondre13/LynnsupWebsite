'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/**
 * Component: FaqAccordion
 * Purpose: Accessible accordion component for FAQs with smooth animations.
 * 
 * Props:
 * - items: Array<{ id: number; question: string; answer: string }> - FAQ items
 * - allowMultiple?: boolean - Allow multiple items open (default: false)
 * 
 * Usage:
 * <FaqAccordion items={faqs} />
 * 
 * Accessibility:
 * - Keyboard navigable (Enter/Space to toggle, Tab to navigate)
 * - ARIA attributes (aria-expanded, aria-controls)
 * - Focus states visible
 * - Screen reader friendly
 */

interface FaqItem {
  id: number
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  allowMultiple?: boolean
}

export default function FaqAccordion({ items, allowMultiple = false }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      )
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id])
    }
  }

  const isOpen = (id: number) => openItems.includes(id)

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="bg-white dark:bg-brand-graphite rounded-2xl shadow-elevation-md overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleItem(item.id)
              }
            }}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            aria-expanded={isOpen(item.id)}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="font-heading font-semibold text-lg text-brand-navy dark:text-white pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: isOpen(item.id) ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-brand-gold" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {isOpen(item.id) && (
              <motion.div
                id={`faq-answer-${item.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-neutral-muted dark:text-neutral-surface leading-relaxed">
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
