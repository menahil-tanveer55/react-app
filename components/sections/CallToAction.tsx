import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CallToActionProps {
  title?: string
  description?: string
}

export default function CallToAction({
  title = 'Have an idea, operational challenge or software project?',
  description = 'Tell us what you are trying to achieve and we will help you understand the most practical next step.',
}: CallToActionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      data-testid="contact-cta-section"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container-max">
        <div className="bg-navy rounded-2xl px-8 py-14 sm:px-14 text-center relative overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto mb-6"
            >
              {title}
            </h2>
            <p className="text-lg text-slate-400 font-body max-w-xl mx-auto mb-10">
              {description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-8 py-4 rounded-lg transition-colors shadow-sm text-lg"
            >
              Discuss Your Project <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
