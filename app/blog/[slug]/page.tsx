import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import { formatDate } from '@/lib/utils'
import { Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return { title: 'Article Not Found' }
  return { title: post.title, description: post.excerpt }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="section-padding bg-white">
      <div className="container-max max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">{post.category}</p>
        <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted font-body mb-10 pb-10 border-b border-border">
          <span>{post.author.name} · {post.author.role}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={13} aria-hidden="true" />{post.readTime}</span>
        </div>
        <div className="prose prose-lg max-w-none font-body text-secondary">
          <p className="text-xl text-muted leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 p-6 bg-surface rounded-2xl border border-border">
            <p className="text-muted font-body">[Full article content will be added here. This is a placeholder blog post structure.]</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <Button href="/blog" variant="outline">← Back to Insights</Button>
        </div>
      </div>
    </article>
  )
}
