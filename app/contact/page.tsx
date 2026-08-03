import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/config/site'
import { Mail, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Rocket.io — tell us about your project and we will be in touch.',
}

export default function ContactPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left col */}
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">Contact</p>
            <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl mb-6 leading-tight">
              Let&apos;s talk about your project.
            </h1>
            <p className="font-body text-muted leading-relaxed mb-8">
              Fill in the form and we will get back to you within one business day. No commitment, no pressure — just an honest conversation about how we might help.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-body font-semibold text-secondary text-sm">Email us directly</p>
                  <a href={`mailto:${siteConfig.email}`} className="font-body text-muted text-sm hover:text-primary transition-colors">{siteConfig.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-body font-semibold text-secondary text-sm">Response time</p>
                  <p className="font-body text-muted text-sm">Within one business day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-surface rounded-2xl border border-border p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
