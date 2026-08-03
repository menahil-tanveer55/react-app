import Button from '@/components/ui/Button'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-white"
    >
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      {/* Orange glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F04E23 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold font-body mb-6">
              <Zap size={14} aria-hidden="true" />
              <span>Software products built to scale</span>
            </div>

            <h1 className="font-display font-bold text-secondary leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Building digital products that{' '}
              <span className="gradient-text">move businesses</span>{' '}
              forward.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted font-body leading-relaxed max-w-lg">
              Rocket.io turns ambitious ideas into scalable, production-ready software products — from AI platforms and SaaS tools to mobile apps and complex web systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/products" size="lg">
                Explore Our Products <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Start a Project
              </Button>
            </div>
          </div>

          {/* Abstract product visual */}
          <div aria-hidden="true" className="hidden lg:block">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-white rounded-2xl border border-border shadow-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-5 bg-surface rounded w-40" />
                </div>
                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Users', value: '24.8k', color: 'text-primary' },
                    { label: 'Revenue', value: '$142k', color: 'text-accent' },
                    { label: 'Uptime', value: '99.9%', color: 'text-emerald-600' },
                  ].map((m) => (
                    <div key={m.label} className="bg-surface rounded-xl p-4">
                      <p className="text-xs text-muted mb-1">{m.label}</p>
                      <p className={`text-xl font-bold font-display ${m.color}`}>{m.value}</p>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="bg-surface rounded-xl p-4 mb-4">
                  <div className="flex items-end gap-2 h-20">
                    {[40, 60, 45, 80, 65, 90, 70, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 7 ? '#F04E23' : '#E5E7EB',
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Pipeline */}
                <div className="flex gap-2">
                  {['Discovery', 'Design', 'Build', 'Launch'].map((step, i) => (
                    <div
                      key={step}
                      className="flex-1 text-center text-xs font-body font-semibold py-2 rounded-lg"
                      style={{
                        background: i === 2 ? '#F04E23' : '#F4F6F9',
                        color: i === 2 ? '#fff' : '#6B7280',
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-6 -left-10 bg-secondary text-white rounded-xl p-4 shadow-lg">
                <p className="text-xs text-slate-400 mb-1 font-body">AI Automation</p>
                <p className="font-bold font-display text-lg">Active ✓</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-border">
                <p className="text-xs text-muted mb-1 font-body">Deploy status</p>
                <p className="font-bold font-display text-emerald-600 text-sm">All systems live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
