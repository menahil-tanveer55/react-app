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
  {
    slug: 'workly-hour',
    name: 'Workly Hour',
    category: 'Rocket.io Product',
    tagline: 'An hourly services marketplace for Pakistan',
    description:
      'Workly Hour is a platform where users can post service jobs and skilled workers can bid on them. Customers review offers, compare workers and hire the right person for tasks such as repairs, cleaning, painting, tutoring or other hourly services.',
    status: 'In Development',
    currentMilestone: 'Platform architecture and bidding flow design',
    latestCompletedMilestone: 'Product discovery and market research',
    lastUpdated: '2025-08-07',
    techStack: ['Next.js', 'TypeScript', 'React', 'PostgreSQL'],
    targetAudience: 'Service seekers and skilled workers in Pakistan',
    features: [
      { title: 'Job Posting', description: 'Users post job requests with details, location and budget.' },
      { title: 'Worker Bidding', description: 'Skilled workers submit competitive bids for posted jobs.' },
      { title: 'Review and Hire', description: 'Customers compare offers and accept the right worker.' },
      { title: 'Pakistani Market Focus', description: 'Built specifically for the hourly services market in Pakistan.' },
    ],
    contributors: ['Rocket.io Product Team'],
    published: true,
  },
  {
    slug: 'futurepath',
    name: 'FuturePath',
    category: 'Rocket.io Product',
    tagline: 'A career and education guidance platform for students',
    description:
      'FuturePath helps students explore what they want to become in life and guides them towards the right academic path. Based on user goals and interests, it suggests suitable school subjects, degree directions, career options and long-term learning routes.',
    status: 'Discovery',
    currentMilestone: 'User research and problem validation',
    latestCompletedMilestone: 'Initial concept and target audience definition',
    lastUpdated: '2025-08-07',
    techStack: ['Next.js', 'TypeScript', 'React'],
    targetAudience: 'Students from school level through to early career stage',
    features: [
      { title: 'Career Discovery', description: 'Helps students identify what direction suits their interests and strengths.' },
      { title: 'Education Pathways', description: 'Recommends subject choices, degree directions and academic routes.' },
      { title: 'Subject Guidance', description: 'Supports decision-making around school subjects and degree selection.' },
      { title: 'Long-term Planning', description: 'Guides users from school-level decisions to long-term career goals.' },
    ],
    contributors: ['Rocket.io Product Team'],
    published: true,
  },
]

export const publishedProducts = products.filter((p) => p.published)

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.published)
}
