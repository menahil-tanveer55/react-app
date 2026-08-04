import Link from 'next/link'
import { latestUpdates } from '@/data/updates'

const TYPE_LABELS: Record<string, string> = {
  'product-release': 'Product',
  'internship-announcement': 'Internships',
  'team-update': 'Team',
  'company-news': 'Company',
  article: 'Article',
}

export default function LatestUpdates() {
  if (latestUpdates.length === 0) return null

  return (
    <section
      aria-labelledby="latest-heading"
      data-testid="latest-updates-section"
      className="section-padding-sm bg-white"
    >
      <div className="container-max">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2
            id="latest-heading"
            className="font-display font-bold text-navy text-2xl sm:text-3xl"
          >
            Latest at Rocket.io
          </h2>
          <Link href="/updates" className="text-primary font-semibold font-body text-sm hover:underline">
            All updates →
          </Link>
        </div>

        <div className="divide-y divide-border">
          {latestUpdates.map((update) => (
            <div key={update.slug} className="py-5 flex items-start justify-between gap-6">
              <div className="flex items-start gap-4 min-w-0">
                <span className="shrink-0 font-body text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {TYPE_LABELS[update.type] ?? update.type}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-navy text-base leading-snug mb-1">
                    {update.title}
                  </h3>
                  <p className="font-body text-slate2 text-sm leading-relaxed">{update.summary}</p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <time
                  dateTime={update.date}
                  className="text-xs font-body text-slate2 whitespace-nowrap"
                >
                  {new Date(update.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
                {update.linkHref && (
                  <div className="mt-2">
                    <Link
                      href={update.linkHref}
                      className="text-xs font-body font-semibold text-primary hover:underline"
                    >
                      {update.linkLabel ?? 'Read more'} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
