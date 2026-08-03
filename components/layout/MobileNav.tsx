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

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className="fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-2xl flex flex-col md:hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display font-bold text-xl text-secondary">
            🚀 Rocket.io
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg hover:bg-surface transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-1 flex-1" role="list">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 rounded-lg font-semibold font-body text-secondary hover:bg-surface hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6 border-t border-border">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-semibold font-body py-3 px-6 rounded-lg transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </nav>
    </>
  )
}
