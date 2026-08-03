import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudyBySlug } from '@/data/work'
import Button from '@/components/ui/Button'
import CallToAction from '@/components/sections/CallToAction'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) return { title: 'Case Study Not Found' }
  return { title: cs.title, description: cs.problem }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug)
  if (!cs) notFound()

  return (
    <>
      <section className="section-padding bg-white border-b border-border">
        <div className="container-max max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">{cs.industry} · {cs.category}</p>
          <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl mb-6 leading-tight">{cs.title}</h1>
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span key={t} className="text-sm font-body px-3 py-1.5 bg-surface border border-border rounded-lg text-secondary">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max max-w-4xl grid sm:grid-cols-3 gap-12">
          <div className="sm:col-span-2 space-y-10">
            <div>
              <h2 className="font-display font-bold text-secondary text-2xl mb-4">The Problem</h2>
              <p className="font-body text-muted leading-relaxed text-lg">{cs.problem}</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-secondary text-2xl mb-4">The Solution</h2>
              <p className="font-body text-muted leading-relaxed text-lg">{cs.solution}</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-secondary text-2xl mb-4">The Outcome</h2>
              <p className="font-body text-muted leading-relaxed text-lg">{cs.outcome}</p>
            </div>
          </div>
          <aside>
            <div className="bg-white border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="font-display font-bold text-secondary mb-4">Project Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted font-body">Industry</dt>
                  <dd className="font-body text-secondary mt-1">{cs.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted font-body">Category</dt>
                  <dd className="font-body text-secondary mt-1">{cs.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted font-body">Year</dt>
                  <dd className="font-body text-secondary mt-1">{cs.year}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Button href="/contact" className="w-full justify-center">Start a Similar Project</Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
