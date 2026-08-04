import type { Metadata } from 'next'
import CallToAction from '@/components/sections/CallToAction'
import { publishedInterns } from '@/data/leadership'

export const metadata: Metadata = {
  title: 'Internships',
  description:
    'Rocket.io provides practical opportunities for university students and early-career developers through mentoring, internships and supervised product work.',
}

export default function InternshipsPage() {
  const interns = publishedInterns

  return (
    <>
      <section className="section-padding bg-warm" aria-labelledby="internships-hero">
        <div className="container-max max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">
            Internships
          </p>
          <h1
            id="internships-hero"
            className="font-display font-bold text-navy text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight"
          >
            Grow through real-world software work.
          </h1>
          <p className="font-body text-lg text-slate2 leading-relaxed mb-5">
            At Rocket.io, we believe the best way to develop as a software engineer is to work on
            real products with experienced mentors. Our internship programme gives university
            students and early-career developers hands-on experience building and shipping
            software across our client projects and internal products.
          </p>
          <p className="font-body text-lg text-slate2 leading-relaxed">
            Interns are supervised, supported and contributing meaningfully from day one — not
            completing arbitrary exercises.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="programme-heading">
        <div className="container-max">
          <h2
            id="programme-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl mb-10"
          >
            What to expect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Real project work',
                description:
                  'You will contribute to actual software products used by real people — not toy projects or isolated exercises.',
              },
              {
                title: 'Experienced mentorship',
                description:
                  'Every intern is paired with a senior engineer who guides, reviews and supports their development throughout.',
              },
              {
                title: 'Modern technology stack',
                description:
                  'Work with Next.js, TypeScript, React, databases, APIs and cloud services in a professional engineering environment.',
              },
              {
                title: 'Code review and feedback',
                description:
                  'Your code is reviewed and improved alongside experienced engineers — the fastest way to learn production standards.',
              },
              {
                title: 'Portfolio-worthy contributions',
                description:
                  'Meaningful commits to real codebases that you can reference, explain and be proud of in future applications.',
              },
              {
                title: 'Flexible and remote-friendly',
                description:
                  'We work with interns to find arrangements that fit around study commitments and locations.',
              },
            ].map(({ title, description }) => (
              <div key={title} className="border border-border rounded-2xl p-7">
                <h3 className="font-display font-bold text-navy mb-2">{title}</h3>
                <p className="font-body text-slate2 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {interns.length > 0 && (
        <section className="section-padding bg-warm" aria-labelledby="current-interns-heading">
          <div className="container-max">
            <h2
              id="current-interns-heading"
              className="font-display font-bold text-navy text-3xl sm:text-4xl mb-10"
            >
              Current interns
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interns.map((intern) => (
                <div
                  key={intern.slug}
                  data-testid={`intern-profile-${intern.slug}`}
                  className="bg-white rounded-2xl border border-border p-6"
                >
                  <div className="w-full aspect-square rounded-xl bg-warm border border-border mb-4 flex items-center justify-center overflow-hidden">
                    {intern.photoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={intern.photoUrl} alt={intern.fullName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-display font-bold text-3xl text-slate2">
                        {intern.fullName.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-navy">{intern.fullName}</h3>
                  <p className="font-body text-sm font-semibold text-primary">{intern.internshipRole}</p>
                  {intern.university && (
                    <p className="font-body text-xs text-slate2 mt-1">{intern.university}</p>
                  )}
                  <p className="font-body text-sm text-slate2 mt-2 leading-relaxed">
                    Contributing to {intern.currentProject}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white" aria-labelledby="apply-heading">
        <div className="container-max max-w-2xl text-center">
          <h2
            id="apply-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl mb-6"
          >
            Interested in an internship?
          </h2>
          <p className="font-body text-slate2 text-lg leading-relaxed mb-8">
            We accept applications from undergraduate and postgraduate students studying
            computer science, software engineering and related disciplines. Experience with
            web technologies is helpful but not required.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-7 py-3.5 rounded-lg transition-colors"
          >
            Get in touch to apply
          </a>
        </div>
      </section>

      <CallToAction
        title="Have a project for our interns to contribute to?"
        description="If you have a suitable project and are interested in working with our supervised internship team, get in touch."
      />
    </>
  )
}
