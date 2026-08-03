import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Rocket.io — our mission, story and the principles behind how we build software.',
}

const principles = [
  { title: 'Outcomes over outputs', description: 'We measure success by the impact a product has, not the volume of features shipped.' },
  { title: 'Simple over clever', description: 'The right solution is often the simpler one. We resist unnecessary complexity.' },
  { title: 'Honest by default', description: 'We tell clients what we actually think — about timelines, risks and trade-offs.' },
  { title: 'Quality is not optional', description: 'Speed and quality are not opposites. We build fast by building well.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">About Rocket.io</p>
          <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight">
            We build software that moves businesses forward.
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed">
            [Add Rocket.io company story — founding vision, how the team came together, and what drives the work.]
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface" aria-labelledby="mission-heading">
        <div className="container-max grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border border-border p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3">Mission</p>
            <h2 id="mission-heading" className="font-display font-bold text-secondary text-3xl mb-4">Why we exist</h2>
            <p className="font-body text-muted leading-relaxed text-lg">
              To help ambitious teams build software products that create lasting, measurable value — with the engineering rigour and design thinking that serious products deserve.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3">Vision</p>
            <h2 className="font-display font-bold text-white text-3xl mb-4">Where we are headed</h2>
            <p className="font-body text-slate-400 leading-relaxed text-lg">
              To become the most trusted product engineering company for technology-driven businesses — known for shipping software that actually works, scales and improves over time.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-white" aria-labelledby="principles-heading">
        <div className="container-max">
          <SectionHeading id="principles-heading" eyebrow="Principles" title="How we work" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="p-6 border border-border rounded-2xl">
                <h3 className="font-display font-bold text-secondary mb-2">{p.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary" aria-labelledby="philosophy-heading">
        <div className="container-max max-w-3xl text-center">
          <SectionHeading
            id="philosophy-heading"
            eyebrow="Philosophy"
            title="Products, not projects"
            description="A project ends when it ships. A product gets better over time. We build relationships with the teams we work with because great software is never truly finished."
            dark
          />
        </div>
      </section>

      {/* Careers placeholder */}
      <section id="careers" className="section-padding bg-surface" aria-labelledby="careers-heading">
        <div className="container-max max-w-2xl text-center">
          <SectionHeading
            id="careers-heading"
            eyebrow="Careers"
            title="Join the team"
            description="[Add careers section — open roles, team values and how to apply will be listed here.]"
          />
          <div className="mt-8">
            <Button href={`mailto:${siteConfig.email}`} variant="outline">
              Send us your CV
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
