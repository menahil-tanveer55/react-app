import type { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  {
    slug: 'product-thinking-over-project-thinking',
    title: 'Why Product Thinking Beats Project Thinking Every Time',
    excerpt:
      'Most software projects fail not because of poor engineering but because of poor framing. Here is how shifting from project to product thinking changes everything.',
    category: 'Product',
    readTime: '5 min read',
    publishedAt: '2024-07-01',
    author: { name: '[Author Name]', role: 'Product Lead' },
    featured: true,
    tags: ['product', 'strategy', 'engineering'],
  },
  {
    slug: 'building-ai-features-that-actually-help',
    title: 'Building AI Features That Actually Help Users',
    excerpt:
      'LLMs are powerful but often misused. The best AI product features are those users barely notice — because they just work. Here is our framework for getting it right.',
    category: 'AI & Engineering',
    readTime: '7 min read',
    publishedAt: '2024-06-18',
    author: { name: '[Author Name]', role: 'Principal Engineer' },
    featured: true,
    tags: ['AI', 'product engineering', 'UX'],
  },
  {
    slug: 'design-systems-for-product-teams',
    title: 'How a Good Design System Pays for Itself in Six Months',
    excerpt:
      'The upfront cost of a design system feels high. But teams that invest early consistently ship faster, maintain consistency and spend less time on rework.',
    category: 'Design',
    readTime: '6 min read',
    publishedAt: '2024-06-05',
    author: { name: '[Author Name]', role: 'Senior Designer' },
    featured: false,
    tags: ['design systems', 'UI', 'teams'],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
