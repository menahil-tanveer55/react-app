import Link from 'next/link'
import { Code2, Package, GraduationCap } from 'lucide-react'

const pillars = [
  {
    slug: 'client-software',
    Icon: Code2,
    label: 'Client Software',
    title: 'Software built around your business',
    description:
      'Custom web, mobile and AI solutions designed around real operational needs.',
    href: '/services',
    cta: 'Our Services',
  },
  {
    slug: 'rocketio-products',
    Icon: Package,
    label: 'Rocket.io Products',
    title: 'Products we are building',
    description:
      'Our internal product team explores and develops practical software ideas for real users and industries.',
    href: '/products',
    cta: 'Our Products',
  },
  {
    slug: 'emerging-talent',
    Icon: GraduationCap,
    label: 'Emerging Talent',
    title: 'Practical opportunities for new talent',
    description:
      'We support students and early-career developers through mentoring, internships and supervised product work.',
    href: '/internships',
    cta: 'Explore Internships',
  },
]

export default function CompanyPillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      data-testid="company-pillars-section"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <h2 id="pillars-heading" className="sr-only">
          What Rocket.io does
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map(({ slug, Icon, label, title, description, href, cta }) => (
            <div
              key={slug}
              className="group border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2">
                {label}
              </p>
              <h3 className="font-display font-bold text-navy text-xl mb-3 leading-snug">
                {title}
              </h3>
              <p className="font-body text-slate2 leading-relaxed text-sm mb-6 flex-1">
                {description}
              </p>
              <Link
                href={href}
                className="font-body text-sm font-semibold text-primary hover:underline"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
