import { Target, Palette, Code2, Smartphone, Brain, Cloud, ShieldCheck, Wrench } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const capabilities = [
  { icon: Target, title: 'Product Strategy', description: 'Vision, roadmap and prioritisation that connects user needs to business outcomes.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Research-driven interfaces that make complex software feel effortless.' },
  { icon: Code2, title: 'Web Application Development', description: 'Full-stack web platforms built with Next.js, React and TypeScript.' },
  { icon: Smartphone, title: 'Mobile Application Development', description: 'Cross-platform iOS and Android apps built with React Native.' },
  { icon: Brain, title: 'AI & Automation', description: 'LLM features, ML pipelines and intelligent workflow automation.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Scalable infrastructure on AWS, GCP or Azure with automated CI/CD.' },
  { icon: ShieldCheck, title: 'Quality Engineering', description: 'Unit, integration and end-to-end testing that ships confidence.' },
  { icon: Wrench, title: 'Product Maintenance', description: 'Ongoing engineering support, security updates and incremental improvements.' },
]

export default function Capabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          id="capabilities-heading"
          eyebrow="Capabilities"
          title="Everything your product needs, under one roof"
          description="From the first idea to post-launch growth, we cover the full spectrum of product development."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300"
            >
              <Icon size={28} className="text-primary mb-4" aria-hidden="true" />
              <h3 className="font-display font-bold text-secondary mb-2">{title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
