export type UpdateType =
  | 'product-release'
  | 'internship-announcement'
  | 'team-update'
  | 'company-news'
  | 'article'

export interface SiteUpdate {
  slug: string
  type: UpdateType
  title: string
  summary: string
  date: string
  linkHref?: string
  linkLabel?: string
  published: boolean
}
