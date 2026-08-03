import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-white">
      {/* Orange glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Product Engineering Studio
            </p>

            <h1 className="font-display font-bold text-navy leading-tight text-4xl sm:text-5xl lg:text-6xl">
              We design and build software that{' '}
              <span className="text-primary">moves businesses</span>{' '}
              forward.
            </h1>

            <p className="mt-6 text-lg text-slate2 font-body leading-relaxed max-w-lg">
              Rocket.io partners with founders and teams to ship modern web applications,
              AI-powered tools and digital platforms — built to last.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-7 py-3.5 rounded-lg transition-colors shadow-sm"
              >
                Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold font-body px-7 py-3.5 rounded-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Abstract software visual */}
          <div aria-hidden="true" className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl border border-border shadow-xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                  <div className="ml-3 flex-1 h-5 bg-warm rounded-full" />
                </div>
                {/* App layout mockup */}
                <div className="flex gap-4">
                  <div className="w-1/3 space-y-2">
                    <div className="h-8 bg-primary/15 rounded-lg" />
                    <div className="h-7 bg-warm rounded-lg" />
                    <div className="h-7 bg-warm rounded-lg" />
                    <div className="h-7 bg-warm rounded-lg" />
                    <div className="h-7 bg-primary/10 rounded-lg" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="h-20 bg-warm rounded-xl" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 bg-primary/10 rounded-xl" />
                      <div className="h-14 bg-navy/5 rounded-xl" />
                    </div>
                    <div className="h-8 bg-warm rounded-lg" />
                  </div>
                </div>
                {/* Process steps */}
                <div className="flex gap-2 mt-4">
                  {['Discover', 'Design', 'Build', 'Launch'].map((step, i) => (
                    <div
                      key={step}
                      className="flex-1 text-center text-xs font-body font-semibold py-2 rounded-lg"
                      style={{
                        background: i === 2 ? '#F97316' : '#FFF7ED',
                        color: i === 2 ? '#fff' : '#475569',
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-5 -left-8 bg-navy text-white rounded-xl p-4 shadow-lg">
                <p className="text-xs text-slate-400 mb-1 font-body">Build status</p>
                <p className="font-bold font-display text-sm text-green-400">All tests passing</p>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-xl p-4 shadow-lg border border-border">
                <p className="text-xs text-slate2 mb-1 font-body">Current sprint</p>
                <p className="font-bold font-display text-navy text-sm">On track ✓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
