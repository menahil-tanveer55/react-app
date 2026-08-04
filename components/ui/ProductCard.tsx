import Link from 'next/link'
import type { Product } from '@/types/product'

const STATUS_COLORS: Record<string, string> = {
  Discovery: 'bg-slate-100 text-slate-600',
  Design: 'bg-blue-50 text-blue-700',
  'In Development': 'bg-primary/10 text-primary',
  'Internal Testing': 'bg-yellow-50 text-yellow-700',
  'Private Beta': 'bg-purple-50 text-purple-700',
  Live: 'bg-green-50 text-green-700',
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      data-testid={`product-card-${product.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Visual placeholder */}
      <div
        className="w-full h-40 rounded-xl mb-6 bg-warm border border-border flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-slate2 text-sm">
          {product.name}
        </span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate2 font-body">
          {product.category}
        </span>
        <span
          className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[product.status] ?? 'bg-warm text-navy'}`}
        >
          {product.status}
        </span>
      </div>

      <h3 className="text-xl font-bold font-display text-navy mb-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-slate2 font-body leading-relaxed mb-6 flex-1">
        {product.description}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 text-primary font-semibold font-body text-sm hover:underline"
        aria-label={`View ${product.name} details`}
      >
        View details →
      </Link>
    </article>
  )
}
