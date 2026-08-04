import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { publishedProducts, getProductBySlug } from '@/data/products'
import CallToAction from '@/components/sections/CallToAction'
import { CheckCircle } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return publishedProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: product.description,
  }
}

const STATUS_COLORS: Record<string, string> = {
  Discovery: 'bg-slate-100 text-slate-600',
  Design: 'bg-blue-50 text-blue-700',
  'In Development': 'bg-primary/10 text-primary',
  'Internal Testing': 'bg-yellow-50 text-yellow-700',
  'Private Beta': 'bg-purple-50 text-purple-700',
  Live: 'bg-green-50 text-green-700',
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      <section className="section-padding bg-warm border-b border-border">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate2 font-body">
                  {product.category}
                </span>
                <span
                  className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[product.status] ?? 'bg-warm text-navy'}`}
                >
                  {product.status}
                </span>
              </div>
              <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl lg:text-6xl mb-6">
                {product.name}
              </h1>
              <p className="font-body text-xl text-slate2 leading-relaxed mb-8 max-w-lg">
                {product.description}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold font-body px-7 py-3.5 rounded-lg transition-colors"
              >
                Get in touch
              </a>
            </div>
            <div
              className="w-full lg:w-80 h-64 rounded-2xl bg-white border border-border flex items-center justify-center shrink-0"
              aria-label={`${product.name} screenshot placeholder`}
            >
              <p className="font-body text-slate2 text-sm text-center px-6">
                {product.screenshotUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.screenshotUrl} alt={product.name} className="rounded-xl" />
                ) : (
                  'Screenshot coming soon'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {product.currentMilestone && (
        <section className="section-padding bg-white" aria-labelledby="milestone-heading">
          <div className="container-max max-w-3xl">
            <h2 id="milestone-heading" className="font-display font-bold text-navy text-2xl mb-4">
              Current focus
            </h2>
            <p className="font-body text-navy text-lg">{product.currentMilestone}</p>
          </div>
        </section>
      )}

      {product.features && product.features.length > 0 && (
        <section className="section-padding bg-warm" aria-labelledby="features-heading">
          <div className="container-max">
            <h2
              id="features-heading"
              className="font-display font-bold text-navy text-3xl sm:text-4xl mb-12 text-center"
            >
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {product.features.map((f) => (
                <div key={f.title} className="flex gap-4 bg-white p-6 rounded-2xl border border-border">
                  <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-bold text-navy mb-1">{f.title}</h3>
                    <p className="font-body text-slate2 text-sm">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white" aria-labelledby="product-tech-heading">
        <div className="container-max text-center">
          <h2
            id="product-tech-heading"
            className="font-display font-bold text-navy text-3xl sm:text-4xl mb-8"
          >
            Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-warm border border-border rounded-lg font-body font-medium text-navy"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={`Interested in ${product.name}?`}
        description="Tell us about your use case and we will get back to you with details."
      />
    </>
  )
}
