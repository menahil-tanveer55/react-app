const points = [
  {
    title: 'Product-focused thinking',
    description:
      'We think about your users and business goals first — not just the technical spec.',
  },
  {
    title: 'Modern, maintainable engineering',
    description:
      'Clean, tested code your team can own and extend long after we hand it over.',
  },
  {
    title: 'Clear, honest collaboration',
    description:
      'We say what we think, flag risks early and keep you informed at every step.',
  },
]

export default function WhyUs() {
  return (
    <section aria-labelledby="why-us-heading" className="section-padding bg-warm">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            Why Rocket.io
          </p>
          <h2
            id="why-us-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            How we work differently
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {points.map(({ title, description }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6" />
              <h3 className="font-display font-bold text-navy text-xl mb-3">{title}</h3>
              <p className="font-body text-slate2 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
