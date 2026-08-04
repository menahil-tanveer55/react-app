import type { NavItem } from '@/types/common'

export const siteConfig = {
  name: 'Rocket.io',
  tagline: 'Software development, product innovation and emerging talent.',
  description:
    'Rocket.io builds modern web, mobile and AI solutions for businesses, develops its own products, and provides practical opportunities for emerging technology talent.',
  url: 'https://rocket-io.vercel.app',
  ogImage: '/og-default.png',
  email: '',
  social: {
    linkedin: '',
    github: '',
    twitter: '',
  },
}

export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Team', href: '/about#team' },
  { label: 'Internships', href: '/internships' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  services: [
    { label: 'Software Development', href: '/services' },
    { label: 'AI and Automation', href: '/services' },
    { label: 'Product Design', href: '/services' },
    { label: 'Quality Engineering', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/about#team' },
    { label: 'Internships', href: '/internships' },
    { label: 'Updates', href: '/updates' },
  ],
  legal: [
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}
