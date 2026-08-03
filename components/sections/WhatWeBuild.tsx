const examples = [
  {
    tag: 'SaaS Platforms',
    description:
      'Multi-tenant web applications with authentication, billing and role-based access — built for scale from the start.',
  },
  {
    tag: 'Internal Tools & Portals',
    description:
      'Custom dashboards, admin systems and workflow tools that save your team hours every week.',
  },
  {
    tag: 'AI-Powered Features',
    description:
      'Smart search, content generation, data extraction and automation — integrated into your existing product or built from scratch.',
  },
]

export default function WhatWeBuild() {
  return (
    <section aria-labelledby="what-we-build-heading" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            Examples
          </p>
          <h2
            id="what-we-build-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Types of software we build
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {examples.map(({ tag, description }) => (
            <div
              key={tag}
              className="border border-border rounded-2xl p-8 bg-warm hover:border-primary/40 transition-colors"
            >
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
                {tag}
              </span>
              <p className="font-body text-navy leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
