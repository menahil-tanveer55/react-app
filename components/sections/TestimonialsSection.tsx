import { verifiedTestimonials } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  if (verifiedTestimonials.length === 0) return null

  return (
    <section
      aria-labelledby="testimonials-heading"
      data-testid="testimonials-section"
      className="section-padding bg-warm"
    >
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl leading-tight"
          >
            What clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedTestimonials
            .sort((a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99))
            .map((t) => (
              <figure
                key={t.id}
                data-testid={`testimonial-${t.id}`}
                className="bg-white rounded-2xl border border-border p-8 flex flex-col"
              >
                <Quote size={28} className="text-primary/20 mb-4" aria-hidden="true" />
                <blockquote className="flex-1">
                  <p className="font-body text-navy leading-relaxed">{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-start gap-3">
                    {t.photoUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.photoUrl}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                    )}
                    <div>
                      <p className="font-display font-bold text-navy text-sm">{t.author}</p>
                      <p className="font-body text-xs text-slate2">
                        {t.role} · {t.company}
                        {t.country && `, ${t.country}`}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  )
}
