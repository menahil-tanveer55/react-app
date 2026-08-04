import Link from 'next/link'
import { publishedClientProjects, publishedInternshipProjects } from '@/data/projects'
import { publishedProducts } from '@/data/products'

function EmptyState({ label }: { label: string }) {
  return (
    <div className="border border-dashed border-border rounded-2xl p-10 text-center">
      <p className="font-body text-slate2 text-sm">
        {label}
      </p>
    </div>
  )
}

export default function FeaturedWorkProducts() {
  const hasClientWork = publishedClientProjects.length > 0
  const hasProducts = publishedProducts.length > 0
  const hasInternship = publishedInternshipProjects.length > 0

  return (
    <section
      aria-labelledby="work-heading"
      data-testid="featured-work-section"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            Our Work
          </p>
          <h2
            id="work-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Projects and products
          </h2>
        </div>

        {/* Client Work */}
        <div className="mb-14" data-testid="client-work-subsection">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-white bg-navy px-3 py-1 rounded-full">
              Client Work
            </span>
          </div>
          {hasClientWork ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedClientProjects.map((project) => (
                <article
                  key={project.slug}
                  data-testid={`project-card-${project.slug}`}
                  className="border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2">
                    {project.industry}
                  </p>
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{project.title}</h3>
                  <p className="font-body text-slate2 text-sm leading-relaxed mb-4">{project.problem}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs font-body bg-warm text-navy px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState label="Client projects are published when permission is confirmed. Check back soon." />
          )}
        </div>

        {/* Rocket.io Products */}
        <div className="mb-14" data-testid="products-section">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-white bg-primary px-3 py-1 rounded-full">
              Rocket.io Products
            </span>
          </div>
          {hasProducts ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedProducts.map((product) => (
                <article
                  key={product.slug}
                  data-testid={`product-card-${product.slug}`}
                  className="border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{product.name}</h3>
                  <p className="font-body text-slate2 text-sm leading-relaxed mb-4">{product.description}</p>
                  <span className="inline-block text-xs font-body font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {product.status}
                  </span>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState label="Product details will be published as they progress through development." />
          )}
          <div className="mt-6">
            <Link href="/products" className="text-primary font-semibold font-body text-sm hover:underline">
              View all products →
            </Link>
          </div>
        </div>

        {/* Internship Lab */}
        <div data-testid="internship-lab-subsection">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-navy bg-warm border border-border px-3 py-1 rounded-full">
              Internship Lab
            </span>
            <span className="text-xs font-body text-slate2">
              Supervised learning and innovation projects
            </span>
          </div>
          {hasInternship ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedInternshipProjects.map((project) => (
                <article
                  key={project.slug}
                  data-testid={`project-card-${project.slug}`}
                  className="border border-border rounded-2xl p-7 hover:shadow-md transition-shadow bg-warm"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-2">
                    {project.projectType}
                  </p>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{project.name}</h3>
                  <p className="font-body text-slate2 text-sm leading-relaxed mb-3">{project.learningObjective}</p>
                  <p className="text-xs font-body text-slate2">Mentor: {project.mentor}</p>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState label="Internship project details are published with participant permission. Details coming soon." />
          )}
        </div>
      </div>
    </section>
  )
}
