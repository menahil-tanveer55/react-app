export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  author: {
    name: string
    role: string
  }
  featured: boolean
  tags: string[]
}
