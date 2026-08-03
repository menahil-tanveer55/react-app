import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CallToActionProps {
  title?: string
  description?: string
}

export default function CallToAction({
  title = 'Have a software idea or business problem worth solving?',
  description = 'Tell us what you are working on and we will help you understand the most practical next step.',
}: CallToActionProps) {
  return (
    <section aria-labelledby="cta-heading" className="section-padding bg-navy relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="container-max relative z-10 text-center">
        <h2
          id="cta-heading"
          className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto"
        >
          {title}
        </h2>
        <p className="mt-6 text-lg text-slate-400 font-body max-w-xl mx-auto">{description}</p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-8 py-4 rounded-lg transition-colors shadow-sm text-lg"
          >
            Discuss Your Project <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
