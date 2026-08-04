import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'
import Button from '@/components/ui/Button'
import { publishedProducts } from '@/data/products'

export default function FeaturedProducts() {
  const featured = publishedProducts.slice(0, 3)

  return (
    <section aria-labelledby="products-heading" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          id="products-heading"
          eyebrow="Our Products"
          title="Software built to solve real problems"
          description="We design and operate our own products — giving us deep insight into what it takes to build software that scales."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
