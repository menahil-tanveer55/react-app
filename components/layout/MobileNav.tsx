'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/', slug: 'home' },
  { label: 'Services', href: '/services', slug: 'services' },
  { label: 'Products', href: '/products', slug: 'products' },
  { label: 'Team', href: '/team', slug: 'team' },
  { label: 'About', href: '/about', slug: 'about' },
  { label: 'Contact', href: '/contact', slug: 'contact' },
]

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <nav
      id="mobile-nav"
      data-testid="mobile-navigation"
      aria-label="Mobile navigation"
      className="fixed top-[60px] md:top-[64px] left-0 right-0 z-40 lg:hidden bg-[#0F172A] border-t border-white/10 shadow-lg"
    >
      <ul
        data-testid="mobile-navigation-list"
        role="list"
        className="py-2 px-4 max-h-[calc(100vh-63px)] overflow-y-auto"
      >
        {navLinks.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <li key={item.slug} data-testid={`mobile-navigation-item-${item.slug}`}>
              <Link
                href={item.href}
                data-testid={`mobile-navigation-link-${item.slug}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={onClose}
                className={cn(
                  'flex items-center px-4 py-3.5 rounded-md text-[15px] font-medium font-body min-h-[48px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]',
                  isActive
                    ? 'text-white border-l-2 border-[#F97316] pl-[14px]'
                    : 'text-[#CBD5E1] hover:text-white hover:bg-white/5'
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
