import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section aria-labelledby="about-section-heading" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-4">
              About
            </p>
            <h2
              id="about-section-heading"
              className="font-display font-bold text-navy text-3xl sm:text-4xl leading-tight mb-6"
            >
              A software studio that takes your product seriously
            </h2>
            <p className="font-body text-slate2 leading-relaxed mb-4">
              Rocket.io is a small software studio that designs and builds modern digital products.
              We work with founders, product teams and businesses who need a reliable engineering
              partner — not a large agency overhead.
            </p>
            <p className="font-body text-slate2 leading-relaxed mb-8">
              We care about craft: writing clean code, designing thoughtful experiences and
              shipping software that actually works.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:underline"
            >
              Learn more about us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Visual placeholder */}
          <div
            aria-hidden="true"
            className="hidden lg:flex items-center justify-center bg-warm rounded-2xl border border-border h-72"
          >
            <p className="font-body text-slate2 text-sm">Team photo coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
