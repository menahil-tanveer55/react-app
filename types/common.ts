export interface NavItem {
  label: string
  href: string
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

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  isPlaceholder: true
}
