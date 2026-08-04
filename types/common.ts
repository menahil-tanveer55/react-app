export interface NavItem {
  label: string
  href: string
  slug?: string
  children?: NavItem[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface Feature {
  title: string
  description: string
  icon?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  country?: string
  photoUrl?: string
  publicSourceUrl?: string
  verified: boolean
  permissionConfirmed: boolean
  displayOrder?: number
}
