import Link from 'next/link'
import { Code2, Package, GraduationCap } from 'lucide-react'

const pillars = [
  {
    slug: 'client-software',
    testId: 'client-software',
    Icon: Code2,
    label: 'Client Software',
    title: 'Software built around your business',
    description:
      'Custom web, mobile and AI solutions designed around real operational needs.',
    href: '/services',
    cta: 'Our Services',
    ariaLabel: 'Explore Rocket.io software development services',
  },
  {
    slug: 'rocketio-products',
    testId: 'products',
    Icon: Package,
    label: 'Rocket.io Products',
    title: 'Products we are building',
    description:
      'Our internal product team explores and develops practical software ideas for real users and industries.',
    href: '/products',
    cta: 'Our Products',
    ariaLabel: 'View Rocket.io internal products',
  },
  {
    slug: 'emerging-talent',
    testId: 'emerging-talent',
    Icon: GraduationCap,
    label: 'Emerging Talent',
    title: 'Practical opportunities for new talent',
    description:
      'We support students and early-career developers through mentoring, internships and supervised product work.',
    href: '/internships',
    cta: 'Explore Internships',
    ariaLabel: 'Learn about Rocket.io internship and emerging talent opportunities',
  },
]

export default function CompanyPillars() {
  return (
    <section
      aria-labelledby="focus-heading"
      data-testid="company-pillars-section"
      className="section-padding bg-white"
    >
      <div data-testid="home-focus-container" className="container-max">

        {/* Section header */}
        <div data-testid="home-focus-header" className="mb-10 lg:mb-12 max-w-2xl">
          <p
            data-testid="home-focus-eyebrow"
            className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3"
          >
            What We Do
          </p>
          <h2
            id="focus-heading"
            data-testid="home-focus-heading"
            className="font-display font-bold text-navy text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight mb-4"
          >
            Our Services and Focus Areas
          </h2>
          <p
            data-testid="home-focus-description"
            className="font-body text-slate2 text-base leading-relaxed"
          >
            From client software and internal products to opportunities for emerging talent,
            Rocket.io combines practical engineering with long-term product thinking.
          </p>
        </div>

        {/* Card grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div
          data-testid="home-focus-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map(({ slug, testId, Icon, label, title, description, href, cta, ariaLabel }) => (
            <Link
              key={slug}
              href={href}
              aria-label={ariaLabel}
              data-testid={`focus-card-${testId}`}
              className="group flex flex-col bg-white border border-border rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 hover:bg-orange-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:border-primary/50 active:translate-y-0 active:shadow-sm"
            >
              {/* Icon */}
              <div
                data-testid={`focus-card-${testId}-icon`}
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-primary/20 group-focus-visible:bg-primary/20"
              >
                <Icon size={24} className="text-primary" aria-hidden="true" />
              </div>

              {/* Label */}
              <p
                data-testid={`focus-card-${testId}-label`}
                className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2"
              >
                {label}
              </p>

              {/* Heading */}
              <h3
                data-testid={`focus-card-${testId}-heading`}
                className="font-display font-bold text-navy text-xl mb-3 leading-snug"
              >
                {title}
              </h3>

              {/* Description */}
              <p
                data-testid={`focus-card-${testId}-description`}
                className="font-body text-slate2 leading-relaxed text-sm mb-6 flex-1"
              >
                {description}
              </p>

              {/* CTA pill — decorative indicator; aria-hidden because the wrapping Link already describes the destination */}
              <span
                data-testid={`focus-card-${testId}-action`}
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary bg-primary/10 group-hover:bg-primary/20 px-4 py-2 rounded-full transition-colors duration-200 self-start"
                aria-hidden="true"
              >
                <span data-testid={`focus-card-${testId}-cta-text`}>{cta}</span>
                <span
                  data-testid={`focus-card-${testId}-arrow`}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
