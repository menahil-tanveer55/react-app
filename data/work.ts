import type { CaseStudy } from '@/types/work'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-platform-rebuild',
    title: 'Rebuilding a Fintech Operations Platform',
    client: '[Client name placeholder]',
    industry: 'Financial Technology',
    problem:
      "The client's internal operations platform was built on a fragmented stack of legacy tools, causing daily manual work, frequent errors and an inability to scale their growing team.",
    solution:
      'Rocket.io designed and built a unified operations platform — centralising workflows, automating reconciliation and providing real-time visibility across the business.',
    outcome: '[Add measurable outcome once available]',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Stripe'],
    featured: true,
    year: '[Year]',
    category: 'Platform Engineering',
  },
  {
    slug: 'ai-content-product',
    title: 'Designing an AI-Powered Content Intelligence Tool',
    client: '[Client name placeholder]',
    industry: 'Media & Publishing',
    problem:
      'A media company needed to help editorial teams quickly understand audience sentiment, identify trending topics and measure content performance without manual analysis.',
    solution:
      'We built a content intelligence dashboard integrating LLM-powered sentiment analysis, trend detection and automated performance reporting into the editorial workflow.',
    outcome: '[Add measurable outcome once available]',
    technologies: ['React', 'Python', 'OpenAI API', 'ClickHouse', 'GCP'],
    featured: true,
    year: '[Year]',
    category: 'AI Product',
  },
  {
    slug: 'logistics-mobile-app',
    title: 'Cross-Platform Mobile App for Field Logistics',
    client: '[Client name placeholder]',
    industry: 'Logistics & Supply Chain',
    problem:
      "A logistics operator's field teams were coordinating via paper forms and WhatsApp groups, leading to delays, lost data and poor visibility for management.",
    solution:
      'Rocket.io designed and delivered a React Native mobile application with offline-first architecture, real-time sync and a management dashboard — replacing the manual processes entirely.',
    outcome: '[Add measurable outcome once available]',
    technologies: ['React Native', 'Expo', 'Node.js', 'SQLite', 'Firebase'],
    featured: true,
    year: '[Year]',
    category: 'Mobile Application',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
