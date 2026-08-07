import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RepresentativeProject {
  slug: string
  name: string
  type: string
  industry: string
  description: string
  tags: string[]
  testId: string
}

// These are representative project examples showing the kinds of work Rocket.io
// can help design and develop. They are not published client case studies.
const projects: RepresentativeProject[] = [
  {
    slug: 'clinicflow-scheduler',
    name: 'ClinicFlow Scheduler',
    type: 'Client Project',
    industry: 'Healthcare',
    description:
      'A scheduling and workflow platform designed to help healthcare teams manage appointments, staff coordination and day-to-day operational flow more efficiently.',
    tags: ['Healthcare', 'Scheduling', 'Dashboard'],
    testId: 'clinicflow-scheduler',
  },
  {
    slug: 'fieldops-dispatch',
    name: 'FieldOps Dispatch',
    type: 'Client Project',
    industry: 'Operations / Field Services',
    description:
      'A job dispatch and tracking dashboard for businesses managing field teams, assignments, task progress and service updates across multiple locations.',
    tags: ['Operations', 'Tracking', 'Internal Tool'],
    testId: 'fieldops-dispatch',
  },
  {
    slug: 'learntrack-portal',
    name: 'LearnTrack Portal',
    type: 'Client Project',
    industry: 'Education',
    description:
      'A learning and progress portal for training providers and education teams, helping track student progress, resources, communication and key milestones.',
    tags: ['Education', 'Portal', 'Web Platform'],
    testId: 'learntrack-portal',
  },
]

export default function HomeClientProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      data-testid="projects-section"
      className="section-padding bg-white"
    >
      <div data-testid="projects-container" className="container-max">

        {/* Section header */}
        <div data-testid="projects-header" className="mb-10 lg:mb-12 max-w-2xl">
          <p
            data-testid="projects-eyebrow"
            className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3"
          >
            Selected Work
          </p>
          <h2
            id="projects-heading"
            data-testid="projects-section-heading"
            className="font-display font-bold text-navy text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight mb-4"
          >
            Client Projects
          </h2>
          <p
            data-testid="projects-description"
            className="font-body text-slate2 text-base leading-relaxed"
          >
            Examples of the kinds of platforms and digital products Rocket.io can help
            design and develop.
          </p>
        </div>

        {/* Project card grid */}
        <div
          data-testid="projects-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map(({ name, type, industry, description, tags, testId }) => (
            <Link
              key={testId}
              href="/work"
              data-testid={`project-card-${testId}`}
              aria-label={`View ${name} project details`}
              className="group flex flex-col bg-white border border-border rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 hover:bg-orange-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:border-primary/50 active:translate-y-0 active:shadow-sm"
            >
              {/* Type label */}
              <p
                data-testid={`project-card-${testId}-type`}
                className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-1"
              >
                {type}
              </p>

              {/* Industry */}
              <p
                data-testid={`project-card-${testId}-industry`}
                className="text-xs font-body text-slate2 uppercase tracking-wider mb-4"
              >
                {industry}
              </p>

              {/* Project name */}
              <h3
                data-testid={`project-card-${testId}-name`}
                className="font-display font-bold text-navy text-xl mb-3 leading-snug"
              >
                {name}
              </h3>

              {/* Description */}
              <p
                data-testid={`project-card-${testId}-description`}
                className="font-body text-slate2 leading-relaxed text-sm mb-5 flex-1"
              >
                {description}
              </p>

              {/* Tags */}
              <div
                data-testid={`project-card-${testId}-tags`}
                className="flex flex-wrap gap-2 mb-5"
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    data-testid={`project-card-${testId}-tag-${tag.toLowerCase().replace(/[\s/]+/g, '-')}`}
                    className="text-xs font-body bg-warm text-navy px-2.5 py-1 rounded-full border border-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span
                data-testid={`project-card-${testId}-cta`}
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary transition-all duration-200"
                aria-hidden="true"
              >
                View Project
                <ArrowRight
                  data-testid={`project-card-${testId}-cta-arrow`}
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* View all work link */}
        <div data-testid="projects-view-all" className="mt-8">
          <Link
            href="/work"
            data-testid="projects-view-all-link"
            className="inline-flex items-center gap-2 text-primary font-semibold font-body text-sm hover:underline"
          >
            View all client work →
          </Link>
        </div>

      </div>
    </section>
  )
}
