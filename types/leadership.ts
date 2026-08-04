export interface LeadershipProfile {
  slug: string
  fullName: string
  role: string
  biography: string
  expertise: string[]
  photoUrl?: string
  linkedinUrl?: string
  published: boolean
}

export interface TeamMember {
  slug: string
  fullName: string
  role: string
  responsibility: string
  skills: string[]
  photoUrl?: string
  linkedinUrl?: string
  portfolioUrl?: string
  published: boolean
}

export interface InternProfile {
  slug: string
  fullName: string
  internshipRole: string
  university?: string
  subject?: string
  currentProject: string
  technologies: string[]
  mentor: string
  status: 'Active' | 'Completed' | 'Starting'
  photoUrl?: string
  linkedinUrl?: string
  portfolioUrl?: string
  permissionToPublish: boolean
  published: boolean
}
