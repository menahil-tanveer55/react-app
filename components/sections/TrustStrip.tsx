import { Code2, Brain, Globe, Smartphone, Cloud, Palette } from 'lucide-react'

const pillars = [
  { icon: Code2, label: 'Product Engineering' },
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Globe, label: 'Web Platforms' },
  { icon: Smartphone, label: 'Mobile Applications' },
  { icon: Cloud, label: 'Cloud Architecture' },
  { icon: Palette, label: 'Product Design' },
]

export default function TrustStrip() {
  return (
    <section
      aria-label="Capability areas"
      className="border-y border-border bg-surface py-10"
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted font-body mb-8">
          What we build
        </p>
        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {pillars.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm">
                <Icon size={22} className="text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold font-body text-secondary">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
