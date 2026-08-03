import SectionHeading from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/process-steps'

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="section-padding bg-secondary">
      <div className="container-max">
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          title="A process designed for products that last"
          description="Seven stages, built on the principle that great products are discovered, not just delivered."
          dark
        />

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border-dark"
            aria-hidden="true"
          />

          <ol className="grid sm:grid-cols-2 lg:grid-cols-7 gap-8" role="list">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative">
                <div className="flex flex-col items-start lg:items-center">
                  <div
                    className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-lg mb-4 border-2"
                    style={{
                      background: i === 0 ? '#F04E23' : '#112240',
                      borderColor: i === 0 ? '#F04E23' : '#1E3A5F',
                      color: '#fff',
                    }}
                  >
                    {step.number}
                  </div>
                  <div className="lg:text-center">
                    <h3 className="font-display font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-slate-400 font-body text-sm leading-relaxed">{step.description}</p>
                    <p className="mt-2 text-xs font-semibold font-body text-primary">{step.duration}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
