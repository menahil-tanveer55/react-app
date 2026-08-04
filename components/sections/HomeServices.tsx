import Link from 'next/link'
import { Code2, Brain, Palette, ShieldCheck } from 'lucide-react'

const featuredServices = [
  {
    slug: 'custom-software',
    Icon: Code2,
    title: 'Custom Software Development',
    description:
      'Scalable web applications, internal tools and platforms built around how your business actually works.',
  },
  {
    slug: 'ai-automation',
    Icon: Brain,
    title: 'AI and Automation',
    description:
      'Intelligent workflows, smart features and data-driven automation that your team will use every day.',
  },
  {
    slug: 'product-design',
    Icon: Palette,
    title: 'Product Design and Engineering',
    description:
      'Strategy, UX design and engineering working together from first idea to launched product.',
  },
  {
    slug: 'quality-engineering',
    Icon: ShieldCheck,
    title: 'Quality Engineering',
    description:
      'Comprehensive testing strategies — automated, accessible and built into your development process.',
  },
]

export default function HomeServices() {
  return (
    <section
      aria-labelledby="services-heading"
      data-testid="services-section"
      className="section-padding bg-warm"
    >
      <div className="container-max">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            What we do
          </p>
          <h2
            id="services-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
          >
            Our services
          </h2>
          <p className="font-body text-slate2 text-lg leading-relaxed max-w-2xl">
            From early product decisions to development, testing and launch, Rocket.io helps
            organisations turn ideas and operational challenges into reliable software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map(({ slug, Icon, title, description }) => (
            <div
              key={slug}
              data-testid={`service-card-${slug}`}
              className="bg-white rounded-2xl border border-border p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Icon size={22} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-3 leading-snug">
                {title}
              </h3>
              <p className="font-body text-slate2 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:underline"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
