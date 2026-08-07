import { publishedClientProjects, publishedInternshipProjects } from '@/data/projects'

function EmptyState({ label, testId }: { label: string; testId: string }) {
  return (
    <div data-testid={testId} className="border border-dashed border-border rounded-2xl p-10 text-center">
      <p data-testid={`${testId}-text`} className="font-body text-slate2 text-sm">
        {label}
      </p>
    </div>
  )
}

export default function FeaturedWorkProducts() {
  const hasClientWork = publishedClientProjects.length > 0
  const hasInternship = publishedInternshipProjects.length > 0

  return (
    <section
      aria-labelledby="work-heading"
      data-testid="featured-work-section"
      className="section-padding bg-white"
    >
      <div data-testid="featured-work-container" className="container-max">
        <div data-testid="featured-work-header" className="mb-12">
          <p
            data-testid="featured-work-eyebrow"
            className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3"
          >
            Our Work
          </p>
          <h2
            id="work-heading"
            data-testid="featured-work-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Projects and products
          </h2>
        </div>

        {/* Client Work */}
        <div data-testid="client-work-subsection" className="mb-14">
          <div data-testid="client-work-label-row" className="flex items-center gap-3 mb-6">
            <span
              data-testid="client-work-label"
              className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-white bg-navy px-3 py-1 rounded-full"
            >
              Client Work
            </span>
          </div>
          {hasClientWork ? (
            <div data-testid="client-work-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedClientProjects.map((project) => (
                <article
                  key={project.slug}
                  data-testid={`client-work-card-${project.slug}`}
                  className="border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
                >
                  <p
                    data-testid={`client-work-card-${project.slug}-industry`}
                    className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2"
                  >
                    {project.industry}
                  </p>
                  <h3
                    data-testid={`client-work-card-${project.slug}-title`}
                    className="font-display font-bold text-navy text-lg mb-3"
                  >
                    {project.title}
                  </h3>
                  <p
                    data-testid={`client-work-card-${project.slug}-problem`}
                    className="font-body text-slate2 text-sm leading-relaxed mb-4"
                  >
                    {project.problem}
                  </p>
                  <div data-testid={`client-work-card-${project.slug}-tech`} className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        data-testid={`client-work-card-${project.slug}-tech-${t.toLowerCase().replace(/[\s.]+/g, '-')}`}
                        className="text-xs font-body bg-warm text-navy px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              testId="client-work-empty"
              label="Client projects are published when permission is confirmed. Check back soon."
            />
          )}
        </div>

        {/* Internship Lab */}
        <div data-testid="internship-lab-subsection">
          <div data-testid="internship-lab-label-row" className="flex items-center gap-3 mb-6">
            <span
              data-testid="internship-lab-label"
              className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-navy bg-warm border border-border px-3 py-1 rounded-full"
            >
              Internship Lab
            </span>
            <span data-testid="internship-lab-subtitle" className="text-xs font-body text-slate2">
              Supervised learning and innovation projects
            </span>
          </div>
          {hasInternship ? (
            <div data-testid="internship-lab-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedInternshipProjects.map((project) => (
                <article
                  key={project.slug}
                  data-testid={`internship-card-${project.slug}`}
                  className="border border-border rounded-2xl p-7 hover:shadow-md transition-shadow bg-warm"
                >
                  <p
                    data-testid={`internship-card-${project.slug}-type`}
                    className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2"
                  >
                    {project.projectType}
                  </p>
                  <h3
                    data-testid={`internship-card-${project.slug}-name`}
                    className="font-display font-bold text-navy text-lg mb-2"
                  >
                    {project.name}
                  </h3>
                  <p
                    data-testid={`internship-card-${project.slug}-objective`}
                    className="font-body text-slate2 text-sm leading-relaxed mb-3"
                  >
                    {project.learningObjective}
                  </p>
                  <p
                    data-testid={`internship-card-${project.slug}-mentor`}
                    className="text-xs font-body text-slate2"
                  >
                    Mentor: {project.mentor}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState
              testId="internship-lab-empty"
              label="Internship project details are published with participant permission. Details coming soon."
            />
          )}
        </div>
      </div>
    </section>
  )
}
