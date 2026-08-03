import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProductBySlug } from '@/data/products'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CallToAction from '@/components/sections/CallToAction'
import { CheckCircle } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: product.description,
  }
}

const statusVariant: Record<string, 'success' | 'info' | 'warning'> = {
  Live: 'success', Beta: 'info', 'Coming Soon': 'warning',
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white border-b border-border">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted font-body">{product.category}</span>
                <Badge variant={statusVariant[product.status]}>{product.status}</Badge>
              </div>
              <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl lg:text-6xl mb-6">{product.name}</h1>
              <p className="font-body text-xl text-muted leading-relaxed mb-8 max-w-lg">{product.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg">Request Access</Button>
                <Button href="/products" variant="outline" size="lg">All Products</Button>
              </div>
            </div>
            {/* Product visual */}
            <div
              className="w-full lg:w-96 h-64 rounded-2xl flex items-center justify-center text-white font-display font-bold text-6xl"
              style={{ background: `linear-gradient(135deg, ${product.color}33 0%, ${product.color}66 100%)`, border: `2px solid ${product.color}44` }}
              aria-label={`${product.name} product preview placeholder`}
            >
              <span style={{ color: product.color }}>⬡</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface" aria-labelledby="features-heading">
        <div className="container-max">
          <h2 id="features-heading" className="font-display font-bold text-secondary text-3xl sm:text-4xl mb-12 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {product.features.map((f) => (
              <div key={f.title} className="flex gap-4 bg-white p-6 rounded-2xl border border-border">
                <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display font-bold text-secondary mb-1">{f.title}</h3>
                  <p className="font-body text-muted">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding bg-white" aria-labelledby="usecases-heading">
        <div className="container-max max-w-3xl">
          <h2 id="usecases-heading" className="font-display font-bold text-secondary text-3xl sm:text-4xl mb-8 text-center">Who it&apos;s for</h2>
          <ul className="space-y-4" role="list">
            {product.useCases.map((uc) => (
              <li key={uc} className="flex items-start gap-3 font-body text-muted text-lg">
                <span className="text-primary mt-1" aria-hidden="true">→</span> {uc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-padding bg-surface" aria-labelledby="product-tech-heading">
        <div className="container-max text-center">
          <h2 id="product-tech-heading" className="font-display font-bold text-secondary text-3xl sm:text-4xl mb-8">Built with</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {product.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white border border-border rounded-lg font-body font-medium text-secondary shadow-sm">
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted font-body">[Full technical documentation will be added at launch]</p>
        </div>
      </section>

      <CallToAction title={`Interested in ${product.name}?`} description="Tell us about your use case and we'll get back to you with details." />
    </>
  )
}
