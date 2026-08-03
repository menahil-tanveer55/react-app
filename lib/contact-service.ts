export interface ContactFormData {
  fullName: string
  email: string
  company?: string
  projectType: string
  description: string
  consent: boolean
  _honeypot?: string // spam prevention — must remain empty
}

export interface ContactResult {
  success: boolean
  message: string
}

/**
 * Stub contact service.
 * Replace the body of this function to connect to your real backend:
 *   - REST API endpoint
 *   - Next.js Server Action
 *   - Supabase / Firebase
 *   - Email service (Resend, SendGrid, etc.)
 *   - CRM webhook
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  if (data._honeypot) {
    return { success: true, message: 'Thank you — we will be in touch.' }
  }

  // Simulate network latency in development
  await new Promise((resolve) => setTimeout(resolve, 1200))

  console.info('[ContactService] Form submission received:', {
    name: data.fullName,
    email: data.email,
    projectType: data.projectType,
  })

  return {
    success: true,
    message: 'Thanks for reaching out. We will be in touch soon.',
  }
}
