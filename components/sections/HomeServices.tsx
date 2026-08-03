import Link from 'next/link'
import { Code2, Brain, Palette } from 'lucide-react'

const services = [
  {
    Icon: Code2,
    title: 'Custom Software Development',
    description:
      'Web applications, internal tools and platforms built for how your business actually works — not off-the-shelf compromises.',
  },
  {
    Icon: Brain,
    title: 'AI & Automation',
    description:
      'Practical AI integration: smart workflows, content pipelines and data-driven features your team will use every day.',
  },
  {
    Icon: Palette,
    title: 'Product Design & Engineering',
    description:
      'From idea to launched product — strategy, UX design and engineering working together from day one.',
  },
]

export default function HomeServices() {
  return (
    <section aria-labelledby="services-heading" className="section-padding bg-warm">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            Services
          </p>
          <h2
            id="services-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            What we do
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-border p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon size={24} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-3">{title}</h3>
              <p className="font-body text-slate2 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:underline"
          >
            See all services
          </Link>
        </div>
      </div>
    </section>
  )
}
