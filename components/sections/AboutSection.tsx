import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-section-heading"
      data-testid="about-section"
      className="section-padding bg-white"
    >
      <div className="container-max max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-4">
          About
        </p>
        <h2
          id="about-section-heading"
          className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
        >
          Building more than software
        </h2>
        <p className="font-body text-lg text-slate2 leading-relaxed mb-8">
          Rocket.io is a software company focused on practical digital products, responsible
          engineering and meaningful opportunities for emerging technology talent. We work with
          organisations, build products of our own and help new developers gain experience
          through supervised real-world work.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold font-body px-6 py-3 rounded-lg transition-colors"
          >
            About Rocket.io
          </Link>
          <Link
            href="/about#team"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold font-body px-6 py-3 rounded-lg transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  )
}
