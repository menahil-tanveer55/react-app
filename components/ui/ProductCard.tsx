import Link from 'next/link'
import Badge from './Badge'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

const statusVariant: Record<Product['status'], 'success' | 'warning' | 'info'> = {
  Live: 'success',
  Beta: 'info',
  'Coming Soon': 'warning',
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Visual placeholder */}
      <div
        className="w-full h-40 rounded-xl mb-6 flex items-center justify-center text-white font-display font-bold text-2xl"
        style={{ background: `linear-gradient(135deg, ${product.color}22 0%, ${product.color}44 100%)` }}
        aria-hidden="true"
      >
        <span style={{ color: product.color }} className="opacity-80 text-4xl">⬡</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted font-body">
          {product.category}
        </span>
        <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
      </div>

      <h3 className="text-xl font-bold font-display text-secondary mb-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-base text-muted font-body leading-relaxed mb-6 flex-1">
        {product.description}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 text-primary font-semibold font-body text-sm hover:gap-3 transition-all"
        aria-label={`View ${product.name} product details`}
      >
        View Product <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  )
}
