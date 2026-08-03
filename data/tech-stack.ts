export interface TechGroup {
  category: string
  items: string[]
}

export const techStack: TechGroup[] = [
  {
    category: 'Front End',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Back End',
    items: ['Node.js', 'Python', 'Go', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    category: 'AI & Data',
    items: ['OpenAI', 'LangChain', 'PyTorch', 'Apache Kafka', 'ClickHouse'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase'],
  },
  {
    category: 'Testing',
    items: ['Vitest', 'Playwright', 'Jest', 'Storybook'],
  },
]
