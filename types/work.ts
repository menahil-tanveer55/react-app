export type ClientPermissionStatus = 'Approved' | 'Pending' | 'Anonymous' | 'Confidential'

export interface ClientProject {
  slug: string
  title: string
  client: string
  clientCountry?: string
  industry: string
  problem: string
  contribution: string
  technologies: string[]
  screenshotUrl?: string
  outcome?: string
  clientPermissionStatus: ClientPermissionStatus
  published: boolean
}

export interface InternshipProject {
  slug: string
  name: string
  projectType: string
  learningObjective: string
  currentMilestone: string
  technologies: string[]
  internContributors: string[]
  mentor: string
  screenshotUrl?: string
  status: 'Planning' | 'In Progress' | 'Completed'
  published: boolean
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  problem: string
  solution: string
  outcome: string
  technologies: string[]
  featured: boolean
  year: string
  category: string
}
