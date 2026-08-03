import SectionHeading from '@/components/ui/SectionHeading'
import BlogCard from '@/components/ui/BlogCard'
import Button from '@/components/ui/Button'
import { blogPosts } from '@/data/blog'

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section aria-labelledby="blog-heading" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          id="blog-heading"
          eyebrow="Insights"
          title="Thinking on products, engineering and design"
          description="We share what we learn building software — honest perspectives, not marketing content."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  )
}
