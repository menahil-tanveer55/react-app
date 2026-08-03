import type { NavItem } from '@/types/common'

export const siteConfig = {
  name: 'Rocket.io',
  tagline: 'We design and build software that helps businesses move faster.',
  description:
    'Rocket.io is a software company that designs and builds modern web applications, AI-powered tools and digital platforms for businesses.',
  url: 'https://rocket-io.vercel.app',
  ogImage: '/og-default.png',
  // Email — add a real, monitored address before publishing
  email: '',
  social: {
    // Add real URLs before showing these links
    linkedin: '',
    github: '',
    twitter: '',
  },
}

// Main navigation — Products, Work, Blog hidden until real content exists
export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  services: [
    { label: 'Custom Software', href: '/services' },
    { label: 'AI & Automation', href: '/services' },
    { label: 'Product Design', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}
