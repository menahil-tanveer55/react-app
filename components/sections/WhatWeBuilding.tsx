import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { publishedProducts } from '@/data/products'

const STATUS_COLORS: Record<string, string> = {
  Discovery:        'bg-slate-100 text-slate-600',
  Design:           'bg-blue-50 text-blue-700',
  'In Development': 'bg-primary/10 text-primary',
  'Internal Testing': 'bg-yellow-50 text-yellow-700',
  'Private Beta':   'bg-purple-50 text-purple-700',
  Live:             'bg-green-50 text-green-700',
}

const TYPE_BADGES: Record<string, { label: string; cls: string }> = {
  'workly-hour': { label: 'Marketplace', cls: 'bg-blue-50 text-blue-700' },
  futurepath:    { label: 'EdTech',      cls: 'bg-green-50 text-green-700' },
}

export default function WhatWeBuilding() {
  const items = publishedProducts

  return (
    <section
      aria-labelledby="products-heading"
      data-testid="products-section"
      className="section-padding bg-warm"
    >
      <div data-testid="products-container" className="container-max">

        {/* Section header */}
        <div data-testid="products-header" className="mb-10 lg:mb-12 max-w-2xl">
          <p
            data-testid="products-eyebrow"
            className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3"
          >
            What We&apos;re Building
          </p>
          <h2
            id="products-heading"
            data-testid="products-heading"
            className="font-display font-bold text-navy text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight mb-4"
          >
            Our Products
          </h2>
          <p
            data-testid="products-description"
            className="font-body text-slate2 text-base leading-relaxed"
          >
            Rocket.io is building practical digital products focused on real user needs,
            from local service marketplaces to education and guidance tools.
          </p>
        </div>

        {/* Product card grid */}
        {items.length > 0 ? (
          <div
            data-testid="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((product) => {
              const badge = TYPE_BADGES[product.slug]
              const statusCls = STATUS_COLORS[product.status] ?? 'bg-warm text-navy'
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  data-testid={`product-card-${product.slug}`}
                  aria-label={`View ${product.name} product details`}
                  className="group flex flex-col bg-white border border-border rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 hover:bg-orange-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:border-primary/50 active:translate-y-0 active:shadow-sm"
                >
                  {/* Category + status row */}
                  <div
                    data-testid={`product-card-${product.slug}-meta`}
                    className="flex items-start justify-between gap-3 mb-5"
                  >
                    <p
                      data-testid={`product-card-${product.slug}-category`}
                      className="text-xs font-semibold uppercase tracking-widest text-primary font-body"
                    >
                      {product.category}
                    </p>
                    <span
                      data-testid={`product-card-${product.slug}-status`}
                      className={`shrink-0 text-xs font-body font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${statusCls}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Product name */}
                  <h3
                    data-testid={`product-card-${product.slug}-name`}
                    className="font-display font-bold text-navy text-xl mb-2 leading-snug"
                  >
                    {product.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    data-testid={`product-card-${product.slug}-tagline`}
                    className="font-body text-slate2 text-sm italic mb-4"
                  >
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p
                    data-testid={`product-card-${product.slug}-description`}
                    className="font-body text-slate2 leading-relaxed text-sm mb-6 flex-1"
                  >
                    {product.description}
                  </p>

                  {/* Footer: type badge + CTA */}
                  <div
                    data-testid={`product-card-${product.slug}-footer`}
                    className="flex items-center justify-between gap-2 pt-4 border-t border-border"
                  >
                    {badge ? (
                      <span
                        data-testid={`product-card-${product.slug}-badge`}
                        className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${badge.cls}`}
                      >
                        {badge.label}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span
                      data-testid={`product-card-${product.slug}-cta`}
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary transition-all duration-200"
                      aria-hidden="true"
                    >
                      View Product
                      <ArrowRight
                        data-testid={`product-card-${product.slug}-cta-arrow`}
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div
            data-testid="products-empty"
            className="border border-dashed border-border rounded-2xl p-10 text-center"
          >
            <p
              data-testid="products-empty-text"
              className="font-body text-slate2 text-sm"
            >
              Product details will be published as they progress through development.
            </p>
          </div>
        )}

        {/* View all link */}
        <div data-testid="products-view-all" className="mt-8">
          <Link
            href="/products"
            data-testid="products-view-all-link"
            className="inline-flex items-center gap-2 text-primary font-semibold font-body text-sm hover:underline"
          >
            View all products →
          </Link>
        </div>

      </div>
    </section>
  )
}
