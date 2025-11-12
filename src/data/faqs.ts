/**
 * FAQs Data
 * 
 * Frequently Asked Questions for the Lynnsup website.
 * Used by FaqAccordion component.
 */

export interface FAQ {
  id: number
  question: string
  answer: string
  category?: string
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What services does Lynnsup provide?',
    answer: 'Lynnsup (Pty) Ltd is a multi-service company offering comprehensive solutions including technical support, construction, plumbing, electrical services, PPE supply, mining participation, uniform supply, and labor supply. We position ourselves as a service supply hub that enables client companies to focus on their core business.',
    category: 'General'
  },
  {
    id: 2,
    question: 'Is Lynnsup a registered company?',
    answer: 'Yes, Lynnsup (Pty) Ltd is a registered South African company with CIPC Registration Number 2019/463569/07. We operate with full compliance to all industry standards and regulations.',
    category: 'General'
  },
  {
    id: 3,
    question: 'What areas do you serve?',
    answer: 'Lynnsup operates across South Africa with offices in Johannesburg, Pretoria, and Rustenburg. We serve clients nationwide and can mobilize teams to various locations as needed.',
    category: 'General'
  },
  {
    id: 4,
    question: 'How do I request a quote for services?',
    answer: 'You can request a quote by filling out our contact form on the website, calling us at +27 72 294 8797, or emailing info@lynnsup.co.za. Our team will respond within 24 hours with a detailed quotation.',
    category: 'Services'
  },
  {
    id: 5,
    question: 'Do you provide Certificates of Compliance (CoC)?',
    answer: 'Yes, we provide electrical Certificates of Compliance (CoC) as part of our electrical services. Our licensed electricians conduct thorough assessments and issue compliant certificates.',
    category: 'Services'
  },
  {
    id: 6,
    question: 'What is your approach to safety and compliance?',
    answer: 'Safety is our top priority. We maintain strict adherence to all health and safety regulations, provide comprehensive training to our staff, and ensure all work meets or exceeds industry standards. We are committed to creating a safe working environment for all stakeholders.',
    category: 'Compliance'
  },
  {
    id: 7,
    question: 'Can you provide both temporary and permanent labor?',
    answer: 'Yes, we offer flexible labor supply solutions including both temporary and permanent placements. All personnel are pre-screened, qualified, and compliant with labor regulations.',
    category: 'Services'
  },
  {
    id: 8,
    question: 'What makes Lynnsup different from other service providers?',
    answer: 'Lynnsup stands out through our commitment to excellence, integrity, and employment creation. We offer a comprehensive multi-service approach that allows clients to work with one trusted partner for all their supporting service needs. Our focus on quality, compliance, and customer satisfaction sets us apart.',
    category: 'General'
  },
]
