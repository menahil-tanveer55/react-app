import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import { caseStudies } from '@/data/work'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Rocket.io portfolio — products built, problems solved, and the technology behind them.',
}

export default function WorkPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Our Work"
            title="Products we've built, problems we've solved"
            description="Placeholder case studies — real client details and outcomes will be added with permission as projects complete."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <article key={cs.slug} className="group bg-surface border border-border rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary font-body">{cs.industry}</span>
                  <span className="text-xs text-muted font-body">{cs.year}</span>
                </div>
                <h2 className="font-display font-bold text-secondary text-xl mb-3 group-hover:text-primary transition-colors leading-snug">{cs.title}</h2>
                <p className="font-body text-sm text-muted leading-relaxed mb-4 flex-1">{cs.problem}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs font-body px-3 py-1 bg-white border border-border rounded-full text-muted">{t}</span>
                  ))}
                </div>
                <Link href={`/work/${cs.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold font-body text-sm hover:gap-3 transition-all" aria-label={`Read case study: ${cs.title}`}>
                  Read case study <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction title="Want to be on this page?" description="Tell us about your project and let's discuss how we can work together." />
    </>
  )
}
