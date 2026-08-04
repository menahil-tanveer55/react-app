'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { mainNav } from '@/config/site'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement
      closeButtonRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      triggerRef.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        data-testid="mobile-navigation"
        className="fixed top-0 right-0 h-full w-80 max-w-full bg-navy z-50 shadow-2xl flex flex-col lg:hidden"
      >
        <div className="h-1 w-full bg-primary shrink-0" aria-hidden="true" />
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Link
            href="/"
            onClick={onClose}
            className="font-display font-bold text-xl text-white hover:text-primary transition-colors"
          >
            Rocket.io
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto" role="list">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 min-h-[44px] rounded-lg font-semibold font-body text-white/80 hover:text-primary hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6 border-t border-white/10 shrink-0">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-semibold font-body py-3.5 px-6 rounded-lg transition-colors min-h-[44px]"
          >
            Discuss Your Project
          </Link>
        </div>
      </nav>
    </>
  )
}
