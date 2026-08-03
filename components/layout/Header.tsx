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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-white px-4 py-2 rounded-lg font-semibold"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'sticky top-0 z-30 w-full transition-all duration-200',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-white border-b border-transparent'
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-display font-bold text-xl text-secondary hover:text-primary transition-colors"
              aria-label="Rocket.io home"
            >
              🚀 Rocket.io
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold font-body text-secondary/80 hover:text-primary hover:bg-surface transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-primary hover:bg-primary-hover text-white font-semibold font-body text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Discuss Your Project
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
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
