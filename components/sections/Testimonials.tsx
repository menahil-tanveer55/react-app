import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="What clients say"
          description="Placeholder testimonials — replace with real client quotes before launch."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-white rounded-2xl border border-border p-8 flex flex-col"
            >
              <Quote size={32} className="text-primary/20 mb-4" aria-hidden="true" />
              <blockquote className="flex-1">
                <p className="font-body text-secondary leading-relaxed">{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-bold text-secondary">{t.author}</p>
                <p className="font-body text-sm text-muted">
                  {t.role} · {t.company}
                </p>
                <p className="font-body text-xs text-primary/60 mt-1">Placeholder — not a verified review</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
