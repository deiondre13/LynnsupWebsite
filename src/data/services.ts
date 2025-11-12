/**
 * Services Data
 * 
 * Content for all Lynnsup service offerings.
 * Used by ServiceCard components and service pages.
 */

import { 
  Wrench, 
  Building2, 
  Droplet, 
  Zap, 
  HardHat, 
  Users, 
  Shirt,
  Mountain,
  Boxes,
  LucideIcon
} from 'lucide-react'

export interface Service {
  id: number
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  href?: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Technical Support & Design',
    description: 'Expert technical specialists in Mining and Engineering with extensive experience in care and maintenance underground.',
    icon: Wrench,
    features: [
      'Experienced technical specialists in Mining and Engineering',
      'Care and maintenance underground expertise',
      'Design and development of training learning materials',
      'Technical consultancy and advisory services',
      'Scrap metal collection and cleanup services',
    ],
    href: '/services#technical'
  },
  {
    id: 2,
    title: 'Sourcing Services',
    description: 'Comprehensive sourcing solutions that allow companies to focus on their core business while we handle supporting functions.',
    icon: Boxes,
    features: [
      'Supply of 12.1 labour (flexible and adaptable)',
      'Industrial tools and mining materials sourcing',
      'Supply of refuse bags and general materials',
      'Relief from non-core business functions',
      'End-to-end procurement management',
    ],
    href: '/services#sourcing'
  },
  {
    id: 3,
    title: 'General Plumbing',
    description: 'Comprehensive plumbing solutions delivered by experienced professionals with proven track records.',
    icon: Droplet,
    features: [
      'Fit and supply services on all plumbing work',
      'Supply and installation of Gas Geysers',
      'Supply and install Solar Geysers',
      'Emergency plumbing repairs',
      'Maintenance and inspection services',
    ],
    href: '/services#plumbing'
  },
  {
    id: 4,
    title: 'General Construction',
    description: 'Full-spectrum construction services from foundation to finish, delivered with quality and precision.',
    icon: Building2,
    features: [
      'Building construction and general work',
      'Renovation and demolition services',
      'Bricklaying and masonry',
      'Plastering and finishing',
      'Paving and landscaping',
    ],
    href: '/services#construction'
  },
  {
    id: 5,
    title: 'Electrical Services & CoC',
    description: 'Professional electrical services with focus on compliance, safety, and quality workmanship.',
    icon: Zap,
    features: [
      'Electrical compliance assessments',
      'Certificate of Compliance (CoC) issuance',
      'Fault detection and correction',
      'Recommendations for safety improvements',
      'Installation and maintenance services',
    ],
    href: '/services#electrical'
  },
  {
    id: 6,
    title: 'PPE Supply',
    description: 'Personal Protective Equipment supply according to company specifications and safety standards.',
    icon: HardHat,
    features: [
      'Supply according to company specifications',
      'Wide range of safety equipment',
      'Quality assurance and compliance',
      'Bulk ordering and delivery',
      'Custom branding options',
    ],
    href: '/services#ppe'
  },
  {
    id: 7,
    title: 'Mining Participation',
    description: 'Comprehensive mining support services including training, tools, and labor supply.',
    icon: Mountain,
    features: [
      'SAQA/QCTO training materials development',
      'Industrial tools and equipment supply',
      'Skilled and unskilled labor supply',
      'Mining operations support',
      'Safety compliance assistance',
    ],
    href: '/services#mining'
  },
  {
    id: 8,
    title: 'Uniform Supply',
    description: 'Professional uniform supply services for corporate and industrial clients.',
    icon: Shirt,
    features: [
      'Corporate uniforms and workwear',
      'Custom branding and embroidery',
      'Bulk orders and regular supply',
      'Quality fabrics and durability',
      'Size range and fitting services',
    ],
    href: '/services#uniforms'
  },
  {
    id: 9,
    title: 'Labour Supply',
    description: 'Flexible labor supply solutions to meet your workforce needs.',
    icon: Users,
    features: [
      'Skilled and unskilled labor',
      'Temporary and permanent placements',
      'Pre-screened and qualified personnel',
      'Compliance with labor regulations',
      'Flexible staffing solutions',
    ],
    href: '/services#labour'
  },
]
