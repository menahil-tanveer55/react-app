import type { ClientProject, InternshipProject } from '@/types/work'

// Set published: true only when clientPermissionStatus === 'Approved' and outcome is confirmed.
// Do not invent client names, countries or outcomes.
export const clientProjects: ClientProject[] = [
  {
    slug: 'fintech-platform-rebuild',
    title: 'Fintech Operations Platform',
    client: 'Confidential',
    industry: 'Financial Technology',
    problem:
      "The client's internal operations platform was built on fragmented legacy tools, causing daily manual work and an inability to scale.",
    contribution:
      'Rocket.io designed and built a unified operations platform, centralising workflows and providing real-time visibility.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    clientPermissionStatus: 'Confidential',
    published: false,
  },
  {
    slug: 'ai-content-platform',
    title: 'AI Content Intelligence Tool',
    client: 'Confidential',
    industry: 'Media & Publishing',
    problem:
      'Editorial teams needed to quickly understand audience sentiment and identify trending topics without manual analysis.',
    contribution:
      'We built a content intelligence dashboard integrating LLM-powered sentiment analysis and automated performance reporting.',
    technologies: ['React', 'Python', 'OpenAI API', 'GCP'],
    clientPermissionStatus: 'Confidential',
    published: false,
  },
  {
    slug: 'logistics-mobile-app',
    title: 'Field Logistics Mobile App',
    client: 'Confidential',
    industry: 'Logistics & Supply Chain',
    problem:
      "Field teams were coordinating via paper forms and messaging apps, leading to delays and poor management visibility.",
    contribution:
      'Rocket.io designed and delivered a React Native app with offline-first architecture and a management dashboard.',
    technologies: ['React Native', 'Expo', 'Node.js', 'Firebase'],
    clientPermissionStatus: 'Confidential',
    published: false,
  },
]

// Set published: true when intern permission is confirmed and project details are accurate.
export const internshipProjects: InternshipProject[] = []

export const publishedClientProjects = clientProjects.filter((p) => p.published)
export const publishedInternshipProjects = internshipProjects.filter((p) => p.published)
