'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQ } from '@/data/faqs'

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-surface transition-colors"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            <span className="font-semibold font-display text-secondary">{faq.question}</span>
            <ChevronDown
              size={20}
              aria-hidden="true"
              className={cn(
                'shrink-0 text-muted transition-transform duration-200',
                openIndex === i && 'rotate-180'
              )}
            />
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === i ? 'max-h-96' : 'max-h-0'
            )}
          >
            <p className="px-6 pb-5 pt-2 text-muted font-body leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
