import type { Metadata } from 'next'
import { publishedUpdates } from '@/data/updates'

export const metadata: Metadata = {
  title: 'Updates',
  description:
    'The latest from Rocket.io — product releases, internship announcements, team news and company updates.',
}

const TYPE_LABELS: Record<string, string> = {
  'product-release': 'Product',
  'internship-announcement': 'Internships',
  'team-update': 'Team',
  'company-news': 'Company',
  article: 'Article',
}

export default function UpdatesPage() {
  const updates = publishedUpdates

  return (
    <section className="section-padding bg-warm">
      <div className="container-max">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">
            Updates
          </p>
          <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Latest at Rocket.io
          </h1>
          <p className="font-body text-lg text-slate2 leading-relaxed">
            Product releases, internship announcements, team news and company updates.
          </p>
        </div>

        {updates.length === 0 ? (
          <div className="border border-dashed border-border rounded-2xl p-14 text-center">
            <p className="font-body text-slate2">
              Updates will appear here as they are published.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {updates.map((update) => (
              <div key={update.slug} className="py-8 flex items-start justify-between gap-6">
                <div className="flex items-start gap-4 min-w-0">
                  <span className="shrink-0 font-body text-xs font-semibold uppercase tracking-widest text-primary bg-white border border-border px-2.5 py-1 rounded-full">
                    {TYPE_LABELS[update.type] ?? update.type}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display font-bold text-navy text-xl leading-snug mb-2">
                      {update.title}
                    </h2>
                    <p className="font-body text-slate2 leading-relaxed">{update.summary}</p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <time
                    dateTime={update.date}
                    className="text-sm font-body text-slate2 whitespace-nowrap"
                  >
                    {new Date(update.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
