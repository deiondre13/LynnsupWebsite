/**
 * Motion Variants Library
 * 
 * Centralized Framer Motion variants for consistent animations across the Lynnsup website.
 * All variants respect prefers-reduced-motion user preference.
 */

import { Variants } from 'framer-motion'

/**
 * Stagger container for sequential child animations
 * @param stagger - Delay between each child animation (default: 0.15s)
 */
export const staggerContainer = (stagger = 0.15): Variants => ({
  hidden: {},
  show: {
    transition: { 
      staggerChildren: stagger, 
      when: 'beforeChildren' 
    }
  }
})

/**
 * Fade up animation - element fades in while moving up
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
}

/**
 * Simple fade in animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
}

/**
 * Slide in animation from specified direction
 * @param dir - Direction to slide from: 'up' | 'down' | 'left' | 'right'
 */
export const slideIn = (dir: 'up' | 'down' | 'left' | 'right'): Variants => {
  const map = { 
    up: { y: 16 }, 
    down: { y: -16 }, 
    left: { x: 16 }, 
    right: { x: -16 } 
  }[dir]
  
  return { 
    hidden: { opacity: 0, ...map }, 
    show: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    } 
  }
}

/**
 * Scale in animation - element fades in while scaling up
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
}

/**
 * Hover lift effect for cards
 */
export const hoverLift = {
  rest: { y: 0 },
  hover: { 
    y: -6, 
    transition: { duration: 0.2, ease: 'easeOut' } 
  }
}

/**
 * Hover scale effect for buttons
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02, 
    transition: { duration: 0.2, ease: 'easeOut' } 
  }
}
