import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import CallToAction from '@/components/sections/CallToAction'
import { publishedLeaders, publishedTeamMembers, publishedInterns } from '@/data/leadership'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the people behind Rocket.io — our leadership, core team and emerging talent building modern software products.',
}

export default function TeamPage() {
  const hasLeadership = publishedLeaders.length > 0
  const hasTeam = publishedTeamMembers.length > 0
  const hasInterns = publishedInterns.length > 0
  const hasPeople = hasLeadership || hasTeam || hasInterns

  return (
    <>
      <section className="section-padding bg-warm">
        <div className="container-max">
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind Rocket.io"
            description="We are a small, focused team of engineers, designers and product thinkers building software that lasts."
          />

          {!hasPeople && (
            <div className="mt-14 border border-dashed border-border rounded-2xl p-14 text-center">
              <p className="font-body text-slate2">
                Team profiles will appear here once confirmed. Check back soon.
              </p>
            </div>
          )}

          {hasLeadership && (
            <div className="mt-14">
              <h2 className="font-display font-bold text-navy text-xl mb-8">Leadership</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishedLeaders.map((leader) => (
                  <div key={leader.slug} data-testid={`leadership-profile-${leader.slug}`} className="flex flex-col">
                    <div className="aspect-square w-full rounded-2xl bg-white border border-border mb-4 overflow-hidden">
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
                    <h3 className="font-display font-bold text-navy">{leader.fullName}</h3>
                    <p className="font-body text-sm font-semibold text-primary">{leader.role}</p>
                    <p className="font-body text-sm text-slate2 mt-2 leading-relaxed">{leader.biography}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hasTeam && (
            <div className="mt-14">
              <h2 className="font-display font-bold text-navy text-xl mb-8">Core Team</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {publishedTeamMembers.map((member) => (
                  <div key={member.slug} data-testid={`team-member-${member.slug}`} className="flex flex-col">
                    <div className="aspect-square w-full rounded-2xl bg-white border border-border mb-4 overflow-hidden">
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
                    <h3 className="font-display font-bold text-navy">{member.fullName}</h3>
                    <p className="font-body text-sm font-semibold text-primary">{member.role}</p>
                    <p className="font-body text-sm text-slate2 mt-1">{member.responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hasInterns && (
            <div className="mt-14">
              <h2 className="font-display font-bold text-navy text-xl mb-8">Emerging Talent</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {publishedInterns.map((intern) => (
                  <div key={intern.slug} data-testid={`intern-profile-${intern.slug}`} className="flex flex-col">
                    <div className="aspect-square w-full rounded-2xl bg-white border border-border mb-4 overflow-hidden">
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
                    <h3 className="font-display font-bold text-navy">{intern.fullName}</h3>
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

      <CallToAction />
    </>
  )
}
