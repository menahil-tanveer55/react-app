'use client'

import { useState } from 'react'
import { X, Megaphone } from 'lucide-react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div
      role="banner"
      aria-label="Announcement"
      className="bg-secondary text-white text-sm font-body py-2.5 px-4 flex items-center justify-center gap-3 relative"
    >
      <Megaphone size={14} aria-hidden="true" className="text-accent-alt shrink-0" />
      <p className="text-center">
        <span className="font-semibold text-accent-alt">New:</span>{' '}
        Orion Platform is now in beta.{' '}
        <Link href="/products/product-alpha" className="underline hover:text-accent-alt transition-colors">
          Request early access →
        </Link>
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  )
}
