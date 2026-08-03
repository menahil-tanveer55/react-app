import type { NavItem } from '@/types/common'

export const siteConfig = {
  name: 'Rocket.io',
  tagline: 'Building digital products that move businesses forward.',
  description:
    'Rocket.io is a modern software and digital-product company. We design, build and operate scalable products — from AI platforms to mobile applications.',
  url: 'https://rocket.io', // [Replace with real domain]
  ogImage: '/og-default.png',
  email: 'hello@rocket.io', // [Replace with real email]
  address: '[Add Rocket.io office address]',
  founded: '[Add founding year]',
  social: {
    twitter: 'https://twitter.com/rocketio', // [Replace]
    linkedin: 'https://linkedin.com/company/rocketio', // [Replace]
    github: 'https://github.com/rocketio', // [Replace]
  },
}

export const mainNav: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Product Alpha', href: '/products/product-alpha' },
    { label: 'Product Beta', href: '/products/product-beta' },
    { label: 'Product Gamma', href: '/products/product-gamma' },
  ],
  services: [
    { label: 'Product Strategy', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Development', href: '/services' },
    { label: 'AI & Automation', href: '/services' },
    { label: 'Cloud & DevOps', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}
