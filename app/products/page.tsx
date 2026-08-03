import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'
import CallToAction from '@/components/sections/CallToAction'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Rocket.io software products — built for scale, designed for people.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Our Products"
            title="Software we design, build and operate"
            description="Each Rocket.io product is built to solve a specific problem with clarity and technical rigour. Placeholder content — real product details will be added as products launch."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction
        title="Building something that needs a product team?"
        description="Talk to us about how we can help you design and ship a product that works."
      />
    </>
  )
}
