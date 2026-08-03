import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { MessageSquare } from 'lucide-react'

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
            <p className="text-sm font-semibold uppercase tracking-wider text-primary font-body mb-4">
              Contact
            </p>
            <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl mb-6 leading-tight">
              Let&apos;s talk about your project.
            </h1>
            <p className="font-body text-slate2 leading-relaxed mb-8">
              Fill in the form and we will get back to you. No commitment, no pressure — just
              an honest conversation about how we might help.
            </p>

            <div className="flex items-start gap-3">
              <MessageSquare size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-body font-semibold text-navy text-sm">We read every message</p>
                <p className="font-body text-slate2 text-sm">
                  We review every enquiry personally and respond as soon as we can.
                </p>
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
