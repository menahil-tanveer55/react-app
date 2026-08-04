import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import { caseStudies } from '@/data/work'

export const metadata: Metadata = {
  title: 'Client Work',
  description:
    'Rocket.io client work — software built for real operational needs, displayed with client permission.',
}

export default function WorkPage() {
  return (
    <>
      <section className="section-padding bg-warm">
        <div className="container-max">
          <SectionHeading
            eyebrow="Client Work"
            title="Software built for real businesses"
            description="We display client projects with confirmed permission only. Details are added as projects complete and clients approve publication."
          />
          {caseStudies.length === 0 ? (
            <div className="mt-14 border border-dashed border-border rounded-2xl p-14 text-center">
              <p className="font-body text-slate2">
                Client case studies will be published here with permission. Check back soon.
              </p>
            </div>
          ) : (
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((cs) => (
                <article
                  key={cs.slug}
                  className="group bg-white border border-border rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary font-body">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-slate2 font-body">{cs.year}</span>
                  </div>
                  <h2 className="font-display font-bold text-navy text-xl mb-3 group-hover:text-primary transition-colors leading-snug">
                    {cs.title}
                  </h2>
                  <p className="font-body text-sm text-slate2 leading-relaxed mb-4 flex-1">
                    {cs.problem}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-body px-3 py-1 bg-warm border border-border rounded-full text-slate2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <CallToAction
        title="Want to work with us?"
        description="Tell us about your project and we will discuss how we can help."
      />
    </>
  )
}
