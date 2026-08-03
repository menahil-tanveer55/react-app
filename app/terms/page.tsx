import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Rocket.io Terms of Service.',
}

export default function TermsPage() {
  const year = new Date().getFullYear()
  return (
    <article className="section-padding bg-white">
      <div className="container-max max-w-3xl">
        <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl mb-4">Terms of Service</h1>
        <p className="font-body text-muted mb-10">Last updated: {year}</p>
        <div className="space-y-8 font-body text-secondary leading-relaxed">
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold">Placeholder</p>
            <p className="text-amber-700 mt-1">This is a placeholder terms document. Replace with legally reviewed terms before launch.</p>
          </div>
          <section aria-labelledby="terms-use">
            <h2 id="terms-use" className="font-display font-bold text-xl mb-3">Use of Services</h2>
            <p className="text-muted">[Add acceptable use terms.]</p>
          </section>
          <section aria-labelledby="terms-ip">
            <h2 id="terms-ip" className="font-display font-bold text-xl mb-3">Intellectual Property</h2>
            <p className="text-muted">[Add IP ownership terms.]</p>
          </section>
          <section aria-labelledby="terms-liability">
            <h2 id="terms-liability" className="font-display font-bold text-xl mb-3">Limitation of Liability</h2>
            <p className="text-muted">[Add liability limitation clauses.]</p>
          </section>
          <section aria-labelledby="terms-contact">
            <h2 id="terms-contact" className="font-display font-bold text-xl mb-3">Contact</h2>
            <p className="text-muted">For questions about these terms, contact <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.</p>
          </section>
        </div>
      </div>
    </article>
  )
}
