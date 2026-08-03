import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface CallToActionProps {
  title?: string
  description?: string
}

export default function CallToAction({
  title = "Have a product idea? Let's build it.",
  description = "Tell us about your product, platform or software challenge. We'll tell you honestly whether and how we can help.",
}: CallToActionProps) {
  return (
    <section aria-labelledby="cta-heading" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F04E23 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="container-max relative z-10 text-center">
        <h2
          id="cta-heading"
          className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto"
        >
          {title}
        </h2>
        <p className="mt-6 text-lg text-slate-400 font-body max-w-xl mx-auto">{description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Start a Conversation <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="/products" variant="ghost" size="lg" className="text-white hover:bg-surface-dark">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  )
}
