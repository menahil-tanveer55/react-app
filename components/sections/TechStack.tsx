import SectionHeading from '@/components/ui/SectionHeading'
import { techStack } from '@/data/tech-stack'

export default function TechStack() {
  return (
    <section aria-labelledby="tech-heading" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          id="tech-heading"
          eyebrow="Technology"
          title="Our technology choices"
          description="We use proven, modern tools chosen for performance, maintainability and scale."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="font-display font-bold text-secondary text-sm uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-body font-medium text-secondary bg-surface px-3 py-1.5 rounded-lg border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
