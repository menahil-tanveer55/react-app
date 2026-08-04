import type { SiteUpdate } from '@/types/update'

// Set published: true when the update is ready to go live.
// Use real dates and confirmed content only.
export const siteUpdates: SiteUpdate[] = []

export const publishedUpdates = siteUpdates.filter((u) => u.published)

export const latestUpdates = publishedUpdates
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)
