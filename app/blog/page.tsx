import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import BlogCard from '@/components/ui/BlogCard'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on product engineering, design and technology from the Rocket.io team.',
}

export default function BlogPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          eyebrow="Insights"
          title="Thinking on products, engineering and design"
          description="We share what we learn building software — honest perspectives, not marketing content."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
