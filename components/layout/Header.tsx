'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { mainNav } from '@/config/site'
import MobileNav from './MobileNav'
import { cn } from '@/lib/utils'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm"
      >
        Skip to main content
      </a>

      <header
        data-testid="site-header"
        className={cn(
          'sticky top-0 z-30 w-full bg-navy transition-shadow duration-200',
          scrolled && 'shadow-lg'
        )}
      >
        {/* Orange accent strip */}
        <div className="h-1 w-full bg-primary" aria-hidden="true" />

        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="font-display font-bold text-xl text-white hover:text-primary transition-colors shrink-0"
              aria-label="Rocket.io home"
            >
              Rocket.io
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Main navigation"
              data-testid="desktop-navigation"
              className="hidden lg:flex items-center gap-0.5"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-semibold font-body text-white/80 hover:text-primary hover:bg-white/8 focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center bg-primary hover:bg-primary-hover text-white font-semibold font-body text-sm px-5 py-2.5 rounded-lg transition-colors"
                data-testid="header-cta"
              >
                Discuss Your Project
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                data-testid="mobile-menu-trigger"
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
