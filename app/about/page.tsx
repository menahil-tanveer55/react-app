import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import { publishedLeaders, publishedTeamMembers, publishedInterns } from '@/data/leadership'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Rocket.io — our mission, story and the principles behind how we build software, develop products and support emerging technology talent.',
}

const principles = [
  {
    title: 'Outcomes over outputs',
    description: 'We measure success by the impact a product has, not the volume of features shipped.',
  },
  {
    title: 'Simple over clever',
    description: 'The right solution is often the simpler one. We resist unnecessary complexity.',
  },
  {
    title: 'Honest by default',
    description: 'We tell clients what we actually think — about timelines, risks and trade-offs.',
  },
  {
    title: 'Quality is not optional',
    description: 'Speed and quality are not opposites. We build fast by building well.',
  },
]

export default function AboutPage() {
  const hasLeadership = publishedLeaders.length > 0
  const hasTeam = publishedTeamMembers.length > 0
  const hasInterns = publishedInterns.length > 0

  return (
    <>
      {/* Intro */}
      <section className="section-padding bg-warm">
        <div className="container-max max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">
            About Rocket.io
          </p>
          <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight">
            We build software for businesses, develop products of our own, and help emerging
            technology talent grow.
          </h1>
          <p className="font-body text-lg text-slate2 leading-relaxed mb-5">
            Rocket.io is a software studio that designs and builds modern web applications,
            AI-powered tools and digital platforms for businesses. We work with founders,
            product teams and organisations who need a reliable engineering partner — without
            the overhead of a large agency.
          </p>
          <p className="font-body text-lg text-slate2 leading-relaxed">
            Alongside client work, we develop our own software products and provide practical
            internship opportunities for university students and early-career developers. We
            believe software companies have a responsibility to contribute to the next
            generation of engineering talent.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white" aria-labelledby="mission-heading">
        <div className="container-max grid md:grid-cols-2 gap-10">
          <div className="bg-warm rounded-2xl border border-border p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3">
              Mission
            </p>
            <h2 id="mission-heading" className="font-display font-bold text-navy text-3xl mb-4">
              Why we exist
            </h2>
            <p className="font-body text-slate2 leading-relaxed text-lg">
              To help ambitious teams build software products that create lasting, measurable
              value — and to give emerging engineers the real-world experience they need to
              grow.
            </p>
          </div>
          <div className="bg-navy rounded-2xl p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3">
              Vision
            </p>
            <h2 className="font-display font-bold text-white text-3xl mb-4">
              Where we are headed
            </h2>
            <p className="font-body text-slate-400 leading-relaxed text-lg">
              To become the most trusted software partner for technology-driven businesses —
              known for shipping software that works, scales, improves over time and creates
              opportunity for the engineers who build it.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-warm" aria-labelledby="principles-heading">
        <div className="container-max">
          <SectionHeading id="principles-heading" eyebrow="Principles" title="How we work" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="p-6 border border-border rounded-2xl bg-white">
                <h3 className="font-display font-bold text-navy mb-2">{p.title}</h3>
                <p className="font-body text-sm text-slate2 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      {(hasLeadership || hasTeam || hasInterns) && (
        <section id="team" className="section-padding bg-white" aria-labelledby="people-heading">
          <div className="container-max">
            <SectionHeading
              id="people-heading"
              eyebrow="Our People"
              title="The People Behind Rocket.io"
              align="left"
            />

            {hasLeadership && (
              <div className="mt-12">
                <h3 className="font-display font-bold text-navy text-xl mb-8">Leadership</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {publishedLeaders.map((leader) => (
                    <div key={leader.slug} data-testid={`leadership-profile-${leader.slug}`} className="flex flex-col">
                      <div className="aspect-square w-full rounded-2xl bg-warm border border-border mb-4 overflow-hidden">
                        {leader.photoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={leader.photoUrl} alt={leader.fullName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="font-display font-bold text-4xl text-slate2">
                              {leader.fullName.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-navy">{leader.fullName}</h4>
                      <p className="font-body text-sm font-semibold text-primary">{leader.role}</p>
                      <p className="font-body text-sm text-slate2 mt-2 leading-relaxed">{leader.biography}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasTeam && (
              <div className="mt-14">
                <h3 className="font-display font-bold text-navy text-xl mb-8">Core Team</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {publishedTeamMembers.map((member) => (
                    <div key={member.slug} data-testid={`team-member-${member.slug}`} className="flex flex-col">
                      <div className="aspect-square w-full rounded-2xl bg-warm border border-border mb-4 overflow-hidden">
                        {member.photoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={member.photoUrl} alt={member.fullName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="font-display font-bold text-4xl text-slate2">
                              {member.fullName.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-navy">{member.fullName}</h4>
                      <p className="font-body text-sm font-semibold text-primary">{member.role}</p>
                      <p className="font-body text-sm text-slate2 mt-1">{member.responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasInterns && (
              <div className="mt-14">
                <h3 className="font-display font-bold text-navy text-xl mb-8">Emerging Talent</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {publishedInterns.map((intern) => (
                    <div key={intern.slug} data-testid={`intern-profile-${intern.slug}`} className="flex flex-col">
                      <div className="aspect-square w-full rounded-2xl bg-warm border border-border mb-4 overflow-hidden">
                        {intern.photoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={intern.photoUrl} alt={intern.fullName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="font-display font-bold text-4xl text-slate2">
                              {intern.fullName.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-navy">{intern.fullName}</h4>
                      <p className="font-body text-sm font-semibold text-primary">{intern.internshipRole}</p>
                      <p className="font-body text-sm text-slate2 mt-1 leading-relaxed">
                        Contributing to {intern.currentProject}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Philosophy */}
      <section className="section-padding bg-navy" aria-labelledby="philosophy-heading">
        <div className="container-max max-w-3xl text-center">
          <SectionHeading
            id="philosophy-heading"
            eyebrow="Philosophy"
            title="Products, not projects"
            description="A project ends when it ships. A product gets better over time. We build lasting relationships with the teams we work with — because great software is never truly finished."
            dark
          />
        </div>
      </section>

      <CallToAction />
    </>
  )
}
