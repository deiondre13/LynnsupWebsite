/**
 * Testimonials Data
 * 
 * Client testimonials and reviews for the Lynnsup website.
 * Used by TestimonialsSlider component.
 */

export interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Lynnsup has been an invaluable partner in our operations. Their technical expertise and commitment to safety standards have consistently exceeded our expectations.',
    author: 'John Mokwena',
    position: 'Operations Manager',
    company: 'Mining Solutions SA'
  },
  {
    id: 2,
    quote: 'The quality of service and professionalism demonstrated by Lynnsup is outstanding. They handle all our supporting services efficiently, allowing us to focus on our core business.',
    author: 'Sarah van der Merwe',
    position: 'Procurement Director',
    company: 'Industrial Holdings Ltd'
  },
  {
    id: 3,
    quote: 'We have worked with Lynnsup for over three years. Their electrical compliance services are thorough, and their team is always responsive and professional.',
    author: 'David Nkosi',
    position: 'Facilities Manager',
    company: 'Corporate Properties Group'
  },
  {
    id: 4,
    quote: 'Lynnsup\'s commitment to employment creation and quality service delivery makes them stand out. They are a reliable partner for all our construction and maintenance needs.',
    author: 'Linda Botha',
    position: 'CEO',
    company: 'Development Enterprises'
  },
]
