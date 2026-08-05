import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  { name: 'Client API v2', tag: 'Build', tagClass: 'text-primary bg-primary/10', testId: 'client-api' },
  { name: 'Nova Dashboard', tag: 'Review', tagClass: 'text-blue-600 bg-blue-50', testId: 'nova-dashboard' },
  { name: 'Onboarding Flow', tag: 'Live', tagClass: 'text-green-600 bg-green-50', testId: 'onboarding-flow' },
]

const stats: { val: string; label: string; testId: string; highlight?: boolean }[] = [
  { val: '3', label: 'Active', testId: 'active' },
  { val: '12', label: 'Shipped', testId: 'shipped' },
  { val: '99%', label: 'Uptime', testId: 'uptime', highlight: true },
]

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      data-testid="home-hero"
      className="relative overflow-hidden bg-warm hero-grid"
    >
      {/* Subtle orange glow */}
      <div
        data-testid="home-hero-glow"
        className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.14]"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Main container — compact responsive padding replaces the previous py-10/py-20 scale */}
      <div
        data-testid="home-hero-container"
        className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-7 pb-9 sm:py-10 lg:py-12 xl:py-14"
      >
        <div data-testid="home-hero-content" className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div data-testid="home-hero-left" className="max-w-lg">
            <p
              data-testid="home-hero-eyebrow"
              className="inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-5"
            >
              <span data-testid="home-hero-eyebrow-dash" className="w-5 h-[2px] bg-primary rounded-full" aria-hidden="true" />
              Software · Products · Talent
            </p>

            <h1
              data-testid="home-hero-heading"
              className="font-display font-bold text-navy leading-[1.1] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem]"
            >
              We build software that helps businesses move forward.
            </h1>

            <p
              data-testid="home-hero-description"
              className="mt-5 text-base sm:text-[1.0625rem] text-slate2 font-body leading-relaxed"
            >
              Rocket.io creates modern web, mobile and AI solutions for businesses, while building
              internal products and supporting emerging technology talent through real project work.
            </p>

            <div data-testid="home-hero-actions" className="mt-8 flex flex-wrap gap-3">
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

            <div
              data-testid="home-hero-social-proof"
              className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate2 font-body"
            >
              <span data-testid="home-hero-proof-active" className="flex items-center gap-1.5">
                <span
                  data-testid="home-hero-proof-dot"
                  className="inline-block w-2 h-2 rounded-full bg-green-400 shrink-0"
                  aria-hidden="true"
                />
                Active client projects
              </span>
              <span data-testid="home-hero-proof-sep-1" className="hidden sm:inline" aria-hidden="true">·</span>
              <span data-testid="home-hero-proof-products">Products in production</span>
              <span data-testid="home-hero-proof-sep-2" className="hidden sm:inline" aria-hidden="true">·</span>
              <span data-testid="home-hero-proof-internships">Internship programme open</span>
            </div>
          </div>

          {/* ── Right: Dashboard visual ── */}
          <div data-testid="home-hero-visual" aria-hidden="true" className="hidden lg:block">
            {/* Reduced outer padding (py-7 px-7 = 28px) so floats fit without inflating column height */}
            <div data-testid="home-hero-dashboard-wrapper" className="relative mx-auto max-w-[400px] py-7 px-7">

              {/* Main card */}
              <div
                data-testid="home-hero-dashboard"
                className="bg-white rounded-2xl border border-border shadow-[0_4px_32px_rgba(15,23,42,0.07)] p-5"
              >
                <div data-testid="home-hero-dashboard-header" className="flex items-center justify-between mb-4">
                  <p
                    data-testid="home-hero-dashboard-title"
                    className="text-[11px] font-semibold uppercase tracking-wider text-slate2 font-body"
                  >
                    Active Projects
                  </p>
                  <span
                    data-testid="home-hero-dashboard-live"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold font-body text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full"
                  >
                    <span data-testid="home-hero-dashboard-live-dot" className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                </div>

                <div data-testid="home-hero-dashboard-projects" className="space-y-0.5">
                  {projects.map((proj) => (
                    <div
                      key={proj.testId}
                      data-testid={`home-hero-project-${proj.testId}`}
                      className="flex items-center justify-between py-2.5 border-b border-border/60 last:border-0"
                    >
                      <div data-testid={`home-hero-project-${proj.testId}-info`} className="flex items-center gap-3">
                        <div
                          data-testid={`home-hero-project-${proj.testId}-icon`}
                          className="w-7 h-7 rounded-lg bg-warm border border-border flex items-center justify-center shrink-0"
                        >
                          <div data-testid={`home-hero-project-${proj.testId}-icon-inner`} className="w-3 h-3 rounded-sm bg-slate2/20" />
                        </div>
                        <span data-testid={`home-hero-project-${proj.testId}-name`} className="text-sm font-medium font-body text-navy">
                          {proj.name}
                        </span>
                      </div>
                      <span
                        data-testid={`home-hero-project-${proj.testId}-tag`}
                        className={`text-[11px] font-semibold font-body px-2 py-0.5 rounded-md ${proj.tagClass}`}
                      >
                        {proj.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div data-testid="home-hero-dashboard-stats" className="mt-4 pt-3.5 border-t border-border grid grid-cols-3 gap-2 text-center">
                  {stats.map(({ val, label, testId, highlight }) => (
                    <div key={testId} data-testid={`home-hero-stat-${testId}`}>
                      <p
                        data-testid={`home-hero-stat-${testId}-value`}
                        className={`text-base font-bold font-display ${highlight ? 'text-primary' : 'text-navy'}`}
                      >
                        {val}
                      </p>
                      <p data-testid={`home-hero-stat-${testId}-label`} className="text-[11px] text-slate2 font-body">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Float: bottom-left — deployment status */}
              <div
                data-testid="home-hero-float-deploy"
                className="absolute bottom-2 -left-2 bg-navy text-white rounded-xl shadow-xl p-3.5 w-44 hover:-translate-y-1 transition-transform duration-300 cursor-default"
              >
                <div data-testid="home-hero-float-deploy-header" className="flex items-center gap-2 mb-1.5">
                  <div
                    data-testid="home-hero-float-deploy-icon"
                    className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center shrink-0"
                  >
                    <div data-testid="home-hero-float-deploy-dot" className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <p data-testid="home-hero-float-deploy-label" className="text-[10px] font-semibold font-body text-slate-400 uppercase tracking-wide">
                    Deploy
                  </p>
                </div>
                <p data-testid="home-hero-float-deploy-status" className="text-sm font-bold font-display text-white">
                  Production live
                </p>
                <p data-testid="home-hero-float-deploy-meta" className="text-[10px] text-slate-400 font-body mt-0.5">
                  v2.4.1 · 2 min ago
                </p>
              </div>

              {/* Float: top-right — sprint progress */}
              <div
                data-testid="home-hero-float-sprint"
                className="absolute top-2 -right-2 bg-white rounded-xl shadow-lg border border-border p-3.5 w-40 hover:-translate-y-1 transition-transform duration-300 cursor-default"
              >
                <p data-testid="home-hero-float-sprint-label" className="text-[10px] font-semibold uppercase tracking-wide text-slate2 font-body mb-2">
                  Sprint 14
                </p>
                <div data-testid="home-hero-float-sprint-bar" className="w-full h-1.5 bg-warm rounded-full overflow-hidden mb-2">
                  <div data-testid="home-hero-float-sprint-fill" className="h-full rounded-full bg-primary" style={{ width: '80%' }} />
                </div>
                <p data-testid="home-hero-float-sprint-text" className="text-xs font-medium font-body text-navy">
                  8 of 10 tasks done
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        data-testid="home-hero-gradient-fade"
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-warm to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
