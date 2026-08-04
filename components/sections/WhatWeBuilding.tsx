import Link from 'next/link'
import { publishedProducts } from '@/data/products'

const STATUS_COLORS: Record<string, string> = {
  Discovery: 'bg-slate-100 text-slate-600',
  Design: 'bg-blue-50 text-blue-700',
  'In Development': 'bg-primary/10 text-primary',
  'Internal Testing': 'bg-yellow-50 text-yellow-700',
  'Private Beta': 'bg-purple-50 text-purple-700',
  Live: 'bg-green-50 text-green-700',
}

export default function WhatWeBuilding() {
  const items = publishedProducts.slice(0, 3)

  if (items.length === 0) return null

  return (
    <section
      aria-labelledby="building-heading"
      data-testid="product-updates-section"
      className="section-padding bg-warm"
    >
      <div className="container-max">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary font-body mb-3">
              In progress
            </p>
            <h2
              id="building-heading"
              className="font-display font-bold text-navy text-3xl sm:text-4xl leading-tight"
            >
              What We&apos;re Building
            </h2>
          </div>
          <Link href="/updates" className="text-primary font-semibold font-body text-sm hover:underline shrink-0">
            View all updates →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <article
              key={product.slug}
              data-testid={`product-update-${product.slug}`}
              className="bg-white rounded-2xl border border-border p-7 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate2 font-body mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display font-bold text-navy text-xl">{product.name}</h3>
                </div>
                <span
                  className={`shrink-0 text-xs font-body font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${STATUS_COLORS[product.status] ?? 'bg-warm text-navy'}`}
                >
                  {product.status}
                </span>
              </div>
              <p className="font-body text-slate2 text-sm leading-relaxed mb-5 flex-1">
                {product.description}
              </p>
              {product.currentMilestone && (
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-body text-slate2 mb-1">Current focus</p>
                  <p className="text-sm font-body font-semibold text-navy">{product.currentMilestone}</p>
                </div>
              )}
              {product.lastUpdated && (
                <p className="text-xs font-body text-slate2 mt-3">
                  Updated {new Date(product.lastUpdated).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
