import Link from 'next/link'
import { publishedLeaders, publishedTeamMembers, publishedInterns } from '@/data/leadership'

function PersonCard({
  photoUrl,
  fullName,
  role,
  detail,
  linkedinUrl,
  testId,
}: {
  photoUrl?: string
  fullName: string
  role: string
  detail: string
  linkedinUrl?: string
  testId: string
}) {
  return (
    <div data-testid={testId} className="flex flex-col">
      <div className="w-full aspect-square rounded-2xl bg-warm border border-border mb-4 overflow-hidden">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={fullName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-border flex items-center justify-center">
              <span className="font-display font-bold text-2xl text-slate2">
                {fullName.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>
      <h4 className="font-display font-bold text-navy text-base">{fullName}</h4>
      <p className="font-body text-sm font-semibold text-primary">{role}</p>
      <p className="font-body text-sm text-slate2 mt-1 leading-relaxed">{detail}</p>
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-xs font-body font-semibold text-primary hover:underline"
        >
          LinkedIn →
        </a>
      )}
    </div>
  )
}

export default function PeopleSection() {
  const hasLeadership = publishedLeaders.length > 0
  const hasTeam = publishedTeamMembers.length > 0
  const hasInterns = publishedInterns.length > 0

  if (!hasLeadership && !hasTeam && !hasInterns) {
    return null
  }

  return (
    <section
      aria-labelledby="people-heading"
      id="team"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
            Our People
          </p>
          <h2
            id="people-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl lg:text-5xl leading-tight"
          >
            The People Behind Rocket.io
          </h2>
        </div>

        {/* Leadership */}
        {hasLeadership && (
          <div data-testid="leadership-section" className="mb-16">
            <h3 className="font-display font-bold text-navy text-xl mb-8 pb-4 border-b border-border">
              Leadership
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedLeaders.map((leader) => (
                <PersonCard
                  key={leader.slug}
                  photoUrl={leader.photoUrl}
                  fullName={leader.fullName}
                  role={leader.role}
                  detail={leader.biography}
                  linkedinUrl={leader.linkedinUrl}
                  testId={`leadership-profile-${leader.slug}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Core Team */}
        {hasTeam && (
          <div data-testid="team-section" className="mb-16">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <h3 className="font-display font-bold text-navy text-xl">Core Team</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {publishedTeamMembers.slice(0, 4).map((member) => (
                <PersonCard
                  key={member.slug}
                  photoUrl={member.photoUrl}
                  fullName={member.fullName}
                  role={member.role}
                  detail={member.responsibility}
                  linkedinUrl={member.linkedinUrl}
                  testId={`team-member-${member.slug}`}
                />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/about#team"
                className="text-primary font-semibold font-body text-sm hover:underline"
              >
                Meet the Team →
              </Link>
            </div>
          </div>
        )}

        {/* Interns */}
        {hasInterns && (
          <div data-testid="interns-section">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <h3 className="font-display font-bold text-navy text-xl">Emerging Talent at Rocket.io</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {publishedInterns.slice(0, 4).map((intern) => (
                <PersonCard
                  key={intern.slug}
                  photoUrl={intern.photoUrl}
                  fullName={intern.fullName}
                  role={intern.internshipRole}
                  detail={`Contributing to ${intern.currentProject} using ${intern.technologies.slice(0, 2).join(', ')}.`}
                  linkedinUrl={intern.linkedinUrl}
                  testId={`intern-profile-${intern.slug}`}
                />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/internships"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold font-body text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                Explore Internships
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
