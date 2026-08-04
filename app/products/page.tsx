import type { Metadata } from 'next'
import ProductCard from '@/components/ui/ProductCard'
import CallToAction from '@/components/sections/CallToAction'
import { publishedProducts } from '@/data/products'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Software products being designed, built and developed by the Rocket.io product team.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="section-padding bg-warm">
        <div className="container-max">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">
              Rocket.io Products
            </p>
            <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Products we are building
            </h1>
            <p className="font-body text-lg text-slate2 leading-relaxed">
              Our internal product team designs and develops practical software for real users
              and industries — separate from client work, guided by the same engineering
              standards.
            </p>
          </div>

          {publishedProducts.length === 0 ? (
            <div className="border border-dashed border-border rounded-2xl p-14 text-center">
              <p className="font-body text-slate2">
                Product details will be published as they progress through development. Check
                back soon.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CallToAction
        title="Building something that needs a product team?"
        description="Talk to us about how we can help you design and ship software that works."
      />
    </>
  )
}
