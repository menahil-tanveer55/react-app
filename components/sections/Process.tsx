const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We learn your business context, goals and constraints before writing a line of code.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We map out the user experience, system architecture and scope — together.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We ship incrementally, with working software at every checkpoint.',
  },
  {
    number: '04',
    title: 'Launch & Improve',
    description: 'We help you go live, then keep improving based on real user feedback.',
  },
]

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="section-padding bg-navy">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            A process built for software that lasts
          </h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {steps.map((step, i) => (
            <li key={step.number} className="relative">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg mb-5 border-2"
                style={{
                  background: i === 0 ? '#F97316' : '#1E293B',
                  borderColor: i === 0 ? '#F97316' : '#334155',
                  color: '#fff',
                }}
              >
                {step.number}
              </div>
              <h3 className="font-display font-bold text-white mb-2 text-lg">{step.title}</h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
