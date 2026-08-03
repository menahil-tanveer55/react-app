export interface Product {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  longDescription: string
  status: 'Live' | 'Beta' | 'Coming Soon'
  features: Array<{ title: string; description: string }>
  useCases: string[]
  techStack: string[]
  featured: boolean
  color: string
}
