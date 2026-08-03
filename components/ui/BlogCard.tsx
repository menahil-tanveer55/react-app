import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary font-body mb-4">
        {post.category}
      </span>
      <h3 className="text-xl font-bold font-display text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="text-base text-muted font-body leading-relaxed mb-6 flex-1">{post.excerpt}</p>

      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-2 text-sm text-muted font-body">
          <Clock size={14} aria-hidden="true" />
          <span>{post.readTime}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-primary font-semibold font-body text-sm hover:gap-2 transition-all"
          aria-label={`Read ${post.title}`}
        >
          Read <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
