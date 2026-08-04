import type { CaseStudy } from '@/types/work'

// Only case studies with confirmed client permission and real outcomes should be added here.
// Do not invent client names, outcomes or statistics.
export const caseStudies: CaseStudy[] = []

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
