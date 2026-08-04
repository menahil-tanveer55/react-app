'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import MobileNav from './MobileNav'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/', slug: 'home' },
  { label: 'Services', href: '/services', slug: 'services' },
  { label: 'Products', href: '/products', slug: 'products' },
  { label: 'Team', href: '/team', slug: 'team' },
  { label: 'About', href: '/about', slug: 'about' },
  { label: 'Contact', href: '/contact', slug: 'contact' },
]

function LogoMark() {
  return (
    <svg
      data-testid="site-logo-svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Rocket body: curved nose cone + straight body */}
      <path
        data-testid="site-logo-body"
        d="M15 2C20 3 21 8 21 13V22H9V13C9 8 10 3 15 2Z"
        fill="#F97316"
      />
      {/* Swept left fin */}
      <path
        data-testid="site-logo-fin-left"
        d="M9 20L4 27L9 24Z"
        fill="#EA580C"
      />
      {/* Swept right fin */}
      <path
        data-testid="site-logo-fin-right"
        d="M21 20L26 27L21 24Z"
        fill="#EA580C"
      />
      {/* Porthole window */}
      <circle
        data-testid="site-logo-window"
        cx="15"
        cy="15"
        r="2.5"
        fill="white"
        opacity="0.85"
      />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <a
        href="#main-content"
        data-testid="skip-link"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm"
      >
        Skip to main content
      </a>

      <header
        data-testid="site-header"
        className={cn(
          'sticky top-0 z-30 w-full bg-[#0F172A] transition-shadow duration-200',
          scrolled && 'shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
        )}
      >
        <div
          data-testid="site-header-accent-strip"
          className="h-[3px] w-full bg-[#F97316]"
          aria-hidden="true"
        />

        <div
          data-testid="site-header-container"
          className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-[57px] md:h-[61px] lg:h-[65px]"
        >
          <Link
            href="/"
            data-testid="site-brand-link"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Rocket.io – go to homepage"
          >
            <span data-testid="site-logo-wrapper" className="flex items-center shrink-0">
              <LogoMark />
            </span>
            <span
              data-testid="site-wordmark"
              className="font-display font-bold text-[22px] leading-none text-white group-hover:text-[#F97316] transition-colors duration-150"
            >
              Rocket.io
            </span>
          </Link>

          <nav
            data-testid="desktop-navigation"
            aria-label="Main navigation"
            className="hidden lg:flex items-center"
          >
            <ul
              data-testid="desktop-navigation-list"
              role="list"
              className="flex items-center gap-1"
            >
              {navLinks.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <li key={item.slug} data-testid={`desktop-navigation-item-${item.slug}`}>
                    <Link
                      href={item.href}
                      data-testid={`desktop-navigation-link-${item.slug}`}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'relative px-3.5 py-2 rounded-md text-[15px] font-medium font-body transition-colors duration-150 outline-none',
                        'focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]',
                        isActive ? 'text-white' : 'text-[#CBD5E1] hover:text-white'
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span
                          data-testid={`desktop-navigation-active-indicator-${item.slug}`}
                          className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#F97316] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            data-testid="mobile-menu-button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]"
          >
            <span
              data-testid="mobile-menu-icon-wrapper"
              className="flex items-center justify-center w-5 h-5"
            >
              {mobileOpen ? (
                <X size={20} aria-hidden="true" data-testid="mobile-menu-close-icon" />
              ) : (
                <Menu size={20} aria-hidden="true" data-testid="mobile-menu-open-icon" />
              )}
            </span>
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={closeMobile} />
    </>
  )
}
