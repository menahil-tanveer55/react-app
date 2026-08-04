export type ProductStatus =
  | 'Discovery'
  | 'Design'
  | 'In Development'
  | 'Internal Testing'
  | 'Private Beta'
  | 'Live'

export interface Product {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  longDescription?: string
  status: ProductStatus
  currentMilestone?: string
  latestCompletedMilestone?: string
  lastUpdated?: string
  screenshotUrl?: string
  contributors?: string[]
  targetAudience?: string
  features?: Array<{ title: string; description: string }>
  useCases?: string[]
  techStack: string[]
  published: boolean
}

