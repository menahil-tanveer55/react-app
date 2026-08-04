import type { LeadershipProfile, TeamMember, InternProfile } from '@/types/leadership'

// Set published: true only when real photograph, biography and permission are confirmed.
// Never invent names, biographies or credentials.
export const leadershipProfiles: LeadershipProfile[] = []

// Set published: true when photograph, role and responsibility are confirmed.
export const teamMembers: TeamMember[] = []

// Set published: true only when permissionToPublish === true and all details are confirmed.
// Do not publish an intern profile without confirmed permission.
export const internProfiles: InternProfile[] = []

export const publishedLeaders = leadershipProfiles.filter((l) => l.published)
export const publishedTeamMembers = teamMembers.filter((m) => m.published)
export const publishedInterns = internProfiles.filter((i) => i.published && i.permissionToPublish)
