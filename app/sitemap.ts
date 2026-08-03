import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { products } from '@/data/products'
import { caseStudies } from '@/data/work'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const staticRoutes = ['', '/products', '/services', '/work', '/about', '/blog', '/contact'].map(
    (route) => ({ url: `${base}${route}`, lastModified: now, changeFrequency: 'monthly' as const, priority: route === '' ? 1 : 0.8 })
  )

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const workRoutes = caseStudies.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...workRoutes, ...blogRoutes]
}
