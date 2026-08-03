import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    slug: 'product-alpha',
    name: 'Orion Platform',
    category: 'SaaS Platform',
    tagline: 'Unified operations, intelligently automated.',
    description:
      "Orion Platform centralises your team's workflows, data and automations into a single, intelligent workspace — eliminating context switching and manual overhead.",
    longDescription:
      '[Add full product description for Orion Platform]',
    status: 'Beta',
    featured: true,
    color: '#F04E23',
    features: [
      { title: 'Unified Dashboard', description: 'All your key metrics and workflows in one view.' },
      { title: 'AI-Powered Automation', description: 'Automate repetitive tasks with configurable AI rules.' },
      { title: 'Team Collaboration', description: 'Real-time collaboration with roles, permissions and audit trails.' },
      { title: 'API-First Architecture', description: 'Connect to any tool via REST or webhook integrations.' },
    ],
    useCases: [
      'Operations teams managing complex workflows',
      'Startups replacing multiple disconnected SaaS tools',
      'Enterprises seeking process automation at scale',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes'],
  },
  {
    slug: 'product-beta',
    name: 'Nova Analytics',
    category: 'AI & Analytics',
    tagline: 'Turn raw data into decisions, instantly.',
    description:
      'Nova Analytics transforms complex datasets into clear, actionable intelligence — with AI-generated summaries, anomaly detection and predictive dashboards.',
    longDescription: '[Add full product description for Nova Analytics]',
    status: 'Coming Soon',
    featured: true,
    color: '#2563EB',
    features: [
      { title: 'Predictive Dashboards', description: 'Forecast trends using historical data and ML models.' },
      { title: 'Anomaly Detection', description: 'Instant alerts when your data behaves unexpectedly.' },
      { title: 'AI Summaries', description: 'Plain-English summaries of complex reports, generated automatically.' },
      { title: 'Multi-Source Connectors', description: 'Pull data from databases, APIs and spreadsheets.' },
    ],
    useCases: [
      'Product teams tracking engagement and retention',
      'Finance teams monitoring real-time KPIs',
      'Data analysts replacing manual reporting',
    ],
    techStack: ['Python', 'React', 'ClickHouse', 'Apache Kafka', 'AWS'],
  },
  {
    slug: 'product-gamma',
    name: 'Pulse Mobile',
    category: 'Mobile Application',
    tagline: 'Your team, always connected — wherever work happens.',
    description:
      'Pulse Mobile is a cross-platform team communication and task management app built for distributed teams who need speed, reliability and focus.',
    longDescription: '[Add full product description for Pulse Mobile]',
    status: 'Coming Soon',
    featured: true,
    color: '#F59E0B',
    features: [
      { title: 'Instant Messaging', description: 'Threaded channels, direct messages and voice notes.' },
      { title: 'Task Management', description: 'Create, assign and track tasks without leaving the app.' },
      { title: 'Offline Mode', description: 'Full functionality even without an internet connection.' },
      { title: 'End-to-End Encryption', description: 'All communications encrypted at rest and in transit.' },
    ],
    useCases: [
      'Remote and distributed product teams',
      'Field teams needing reliable offline access',
      'Organisations replacing fragmented communication tools',
    ],
    techStack: ['React Native', 'Expo', 'Node.js', 'WebSockets', 'SQLite'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
