import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  { name: 'Client API v2', tag: 'Build', tagClass: 'text-primary bg-primary/10' },
  { name: 'Nova Dashboard', tag: 'Review', tagClass: 'text-blue-600 bg-blue-50' },
  { name: 'Onboarding Flow', tag: 'Live', tagClass: 'text-green-600 bg-green-50' },
] as const

const stats: { val: string; label: string; highlight?: boolean }[] = [
  { val: '3', label: 'Active' },
  { val: '12', label: 'Shipped' },
  { val: '99%', label: 'Uptime', highlight: true },
]

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      data-testid="home-hero"
      className="relative overflow-hidden bg-warm hero-grid"
    >
      {/* Subtle orange glow — smaller and softer than before */}
      <div
        className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.14]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 xl:py-20">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-lg">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-5">
              <span className="w-5 h-[2px] bg-primary rounded-full" aria-hidden="true" />
              Software · Products · Talent
            </p>

            {/* Headline — tighter scale than before */}
            <h1 className="font-display font-bold text-navy leading-[1.1] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem]">
              We build software that helps businesses move forward.
            </h1>

            {/* Supporting copy — shorter, punchier */}
            <p className="mt-5 text-base sm:text-[1.0625rem] text-slate2 font-body leading-relaxed">
              Rocket.io creates modern web, mobile and AI solutions for businesses, while building
              internal products and supporting emerging technology talent through real project work.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                data-testid="hero-primary-cta"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-6 py-3 rounded-lg transition-colors shadow-sm text-sm"
              >
                Explore Services <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/products"
                data-testid="hero-products-cta"
                className="inline-flex items-center gap-2 border border-navy/25 bg-white hover:bg-navy hover:text-white hover:border-navy text-navy font-semibold font-body px-6 py-3 rounded-lg transition-all duration-150 text-sm"
              >
                See Our Products
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate2 font-body">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
                Active client projects
              </span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Products in production</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Internship programme open</span>
            </div>
          </div>

          {/* ── Right: Dashboard visual ── */}
          <div aria-hidden="true" className="hidden lg:block">
            {/* Outer wrapper: padding creates room for the floating cards */}
            <div className="relative mx-auto max-w-[400px] pt-10 pb-10 pl-8 pr-8">

              {/* ─ Main card: Active Projects ─ */}
              <div className="bg-white rounded-2xl border border-border shadow-[0_4px_32px_rgba(15,23,42,0.07)] p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate2 font-body">
                    Active Projects
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold font-body text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Project rows */}
                <div className="space-y-0.5">
                  {projects.map((proj) => (
                    <div
                      key={proj.name}
                      className="flex items-center justify-between py-2.5 border-b border-border/60 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-warm border border-border flex items-center justify-center shrink-0">
                          <div className="w-3 h-3 rounded-sm bg-slate2/20" />
                        </div>
                        <span className="text-sm font-medium font-body text-navy">{proj.name}</span>
                      </div>
                      <span className={`text-[11px] font-semibold font-body px-2 py-0.5 rounded-md ${proj.tagClass}`}>
                        {proj.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats footer */}
                <div className="mt-4 pt-3.5 border-t border-border grid grid-cols-3 gap-2 text-center">
                  {stats.map(({ val, label, highlight }) => (
                    <div key={label}>
                      <p className={`text-base font-bold font-display ${highlight ? 'text-primary' : 'text-navy'}`}>
                        {val}
                      </p>
                      <p className="text-[11px] text-slate2 font-body">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─ Float: bottom-left — deployment status ─ */}
              <div className="absolute bottom-2 -left-2 bg-navy text-white rounded-xl shadow-xl p-3.5 w-44 hover:-translate-y-1 transition-transform duration-300 cursor-default">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <p className="text-[10px] font-semibold font-body text-slate-400 uppercase tracking-wide">
                    Deploy
                  </p>
                </div>
                <p className="text-sm font-bold font-display text-white">Production live</p>
                <p className="text-[10px] text-slate-400 font-body mt-0.5">v2.4.1 · 2 min ago</p>
              </div>

              {/* ─ Float: top-right — sprint progress ─ */}
              <div className="absolute top-2 -right-2 bg-white rounded-xl shadow-lg border border-border p-3.5 w-40 hover:-translate-y-1 transition-transform duration-300 cursor-default">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate2 font-body mb-2">
                  Sprint 14
                </p>
                <div className="w-full h-1.5 bg-warm rounded-full overflow-hidden mb-2">
                  <div className="h-full rounded-full bg-primary" style={{ width: '80%' }} />
                </div>
                <p className="text-xs font-medium font-body text-navy">8 of 10 tasks done</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Gradient fade at bottom — smaller */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-warm to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
