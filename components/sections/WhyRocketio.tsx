import { Target, Layers, MessageSquare, RefreshCw } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const differentiators = [
  {
    icon: Target,
    title: 'Product-first thinking',
    description:
      'We start with outcomes, not deliverables. Every decision — from architecture to typography — is made in service of the product goal.',
  },
  {
    icon: Layers,
    title: 'Scalable engineering',
    description:
      'We build for the state your product needs to be in twelve months from now, not just for the demo. Clean code, tested, documented and ready to grow.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent collaboration',
    description:
      'No black boxes. You have full visibility into progress, decisions and challenges — with regular reviews, shared workspaces and clear documentation.',
  },
  {
    icon: RefreshCw,
    title: 'Long-term ownership',
    description:
      "We don't just build and disappear. We design for maintainability, provide thorough handoffs and offer ongoing support so your product keeps improving.",
  },
]

export default function WhyRocketio() {
  return (
    <section aria-labelledby="why-heading" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Rocket.io"
          title="The way we work is as important as the work itself"
          description="Four principles that shape how we approach every product we build."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-2xl border border-border p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-secondary text-lg mb-3">{title}</h3>
              <p className="font-body text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
