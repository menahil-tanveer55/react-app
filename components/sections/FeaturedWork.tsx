import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { caseStudies } from '@/data/work'
import Button from '../ui/Button'

export default function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured)

  return (
    <section aria-labelledby="work-heading" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          id="work-heading"
          eyebrow="Our Work"
          title="Products we've shipped, problems we've solved"
          description="Placeholder case studies — real projects and outcomes will be added as we publish them."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <article
              key={cs.slug}
              className="group bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary font-body">
                  {cs.industry}
                </span>
                <span className="text-xs font-body text-muted">{cs.category}</span>
              </div>
              <h3 className="font-display font-bold text-secondary text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {cs.title}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed mb-3 flex-1">
                <strong className="text-secondary font-semibold">Problem:</strong> {cs.problem}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {cs.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-body font-medium text-muted bg-surface px-3 py-1 rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/work/${cs.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold font-body text-sm hover:gap-3 transition-all"
                aria-label={`Read case study: ${cs.title}`}
              >
                Read case study <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/work" variant="outline">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  )
}
