/**
 * Metrics Data
 * 
 * Company statistics and metrics for the Lynnsup website.
 * Used by MetricsCounter component.
 */

export interface Metric {
  id: number
  label: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
}

export const metrics: Metric[] = [
  {
    id: 1,
    label: 'Years in Service',
    value: 5,
    suffix: '+',
    description: 'Providing quality services since 2019'
  },
  {
    id: 2,
    label: 'Projects Completed',
    value: 150,
    suffix: '+',
    description: 'Successful projects across various sectors'
  },
  {
    id: 3,
    label: 'Happy Clients',
    value: 50,
    suffix: '+',
    description: 'Trusted by leading companies'
  },
  {
    id: 4,
    label: 'Team Members',
    value: 25,
    suffix: '+',
    description: 'Skilled professionals dedicated to excellence'
  },
  {
    id: 5,
    label: 'Service Categories',
    value: 9,
    description: 'Comprehensive multi-service solutions'
  },
  {
    id: 6,
    label: 'Office Locations',
    value: 3,
    description: 'Serving clients across South Africa'
  },
]
