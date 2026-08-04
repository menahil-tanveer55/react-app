import type { Testimonial } from '@/types/common'

// Only testimonials with verified === true AND permissionConfirmed === true are rendered.
// Do not set these flags to true until Rocket.io has a genuine quote and confirmed permission.
export const testimonials: Testimonial[] = []

export const verifiedTestimonials = testimonials.filter(
  (t) => t.verified && t.permissionConfirmed
)
