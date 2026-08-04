import type { Product } from '@/types/product'

// Set published: true only when a product has confirmed real information.
// Status values: Discovery | Design | In Development | Internal Testing | Private Beta | Live
export const products: Product[] = [
  {
    slug: 'kaamconnect',
    name: 'KaamConnect',
    category: 'Employment Platform',
    tagline: 'Connecting local talent with opportunities.',
    description:
      'KaamConnect is an employment and opportunity platform being developed by the Rocket.io product team, with contributions from internship engineers.',
    status: 'In Development',
    currentMilestone: 'Authentication and user profile module',
    latestCompletedMilestone: 'Product discovery and requirements',
    lastUpdated: '2025-08-01',
    techStack: ['Next.js', 'TypeScript', 'React', 'PostgreSQL'],
    targetAudience: 'Job seekers and employers in emerging markets',
    contributors: ['Rocket.io Product Team'],
    published: false,
  },
]

export const publishedProducts = products.filter((p) => p.published)

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.published)
}
