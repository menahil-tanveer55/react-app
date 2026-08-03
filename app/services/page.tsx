import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { services, engagementModels } from '@/data/services'
import { generalFaqs } from '@/data/faqs'
import { Target, Palette, Code2, Smartphone, Brain, Cloud, ShieldCheck, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-spectrum software development services — from product strategy and design to engineering, AI and cloud infrastructure.',
}

const iconMap: Record<string, LucideIcon> = {
  Target, Palette, Code2, Smartphone, Brain, Cloud, ShieldCheck, Wrench,
}

function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={28} className="text-primary" aria-hidden="true" />
}

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Services"
            title="What we can build together"
            description="From a single capability to full product delivery — we work at the level your project needs."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.slug} className="group bg-surface border border-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <ServiceIcon name={service.icon} />
                <h3 className="font-display font-bold text-secondary mt-4 mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.deliverables.map((d) => (
                    <li key={d} className="text-xs font-body text-muted flex items-start gap-2">
                      <span className="text-primary mt-0.5" aria-hidden="true">·</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-padding bg-secondary" aria-labelledby="engagement-heading">
        <div className="container-max">
          <SectionHeading
            id="engagement-heading"
            eyebrow="Engagement Models"
            title="Work with us your way"
            description="Every engagement is different. We offer structured models to fit your stage, team and goals."
            dark
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.title} className="bg-surface-dark border border-border-dark rounded-2xl p-8">
                <h3 className="font-display font-bold text-white text-lg mb-3">{model.title}</h3>
                <p className="font-body text-slate-400 leading-relaxed mb-4">{model.description}</p>
                <p className="text-sm font-body font-semibold text-primary">Best for: {model.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface" aria-labelledby="faqs-heading">
        <div className="container-max max-w-3xl">
          <SectionHeading id="faqs-heading" eyebrow="FAQ" title="Common questions" />
          <div className="mt-12">
            <FAQAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to discuss your project?"
        description="Tell us about what you're building and we'll suggest the right engagement model."
      />
    </>
  )
}
