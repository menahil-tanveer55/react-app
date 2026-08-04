import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      data-testid="home-hero"
      className="relative overflow-hidden bg-warm hero-grid"
    >
      {/* Orange glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      {/* Gradient fade at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <div>
            <p className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Software development, product innovation and emerging talent
            </p>

            <h1 className="font-display font-bold text-navy leading-tight text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              We build software for businesses, develop products of our own, and help emerging
              technology talent grow.
            </h1>

            <p className="mt-6 text-lg text-slate2 font-body leading-relaxed">
              Rocket.io partners with organisations to design and develop modern web, mobile
              and AI solutions. Alongside client work, we create our own products and provide
              practical opportunities for university students and early-career developers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                data-testid="hero-primary-cta"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-7 py-3.5 rounded-lg transition-colors shadow-sm text-base"
              >
                Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/products"
                data-testid="hero-products-cta"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold font-body px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                See What We&apos;re Building
              </Link>
            </div>
          </div>

          {/* Abstract product visual */}
          <div aria-hidden="true" className="hidden lg:block">
            <div className="relative">
              {/* Main app card */}
              <div className="bg-white rounded-2xl border border-border shadow-xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                  <div className="ml-3 flex-1 h-4 bg-warm rounded-full" />
                </div>
                <div className="flex gap-4 mb-4">
                  {/* Sidebar */}
                  <div className="w-1/3 space-y-2">
                    <div className="h-8 bg-primary/15 rounded-lg" />
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-6 bg-warm rounded-lg" />
                    ))}
                  </div>
                  {/* Content area */}
                  <div className="flex-1 space-y-3">
                    <div className="h-20 bg-warm rounded-xl" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 bg-primary/10 rounded-xl" />
                      <div className="h-14 bg-navy/5 rounded-xl" />
                    </div>
                    <div className="h-7 bg-warm rounded-lg" />
                  </div>
                </div>
                {/* Step indicator */}
                <div className="flex gap-2">
                  {['Discover', 'Design', 'Build', 'Launch'].map((s, i) => (
                    <div
                      key={s}
                      className="flex-1 text-center text-xs font-body font-semibold py-1.5 rounded-md"
                      style={{
                        background: i === 2 ? '#F97316' : '#FFF7ED',
                        color: i === 2 ? '#fff' : '#475569',
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-8 bg-navy text-white rounded-xl p-4 shadow-lg">
                <p className="text-xs text-slate-400 mb-1 font-body">Build status</p>
                <p className="font-display font-bold text-sm text-green-400">All checks passing</p>
              </div>
              <div className="absolute -top-4 -right-6 bg-white rounded-xl p-4 shadow-lg border border-border">
                <p className="text-xs text-slate2 mb-1 font-body">Internship cohort</p>
                <p className="font-display font-bold text-navy text-sm">Active programme</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
