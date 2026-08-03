import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Rocket.io Privacy Policy.',
}

export default function PrivacyPage() {
  const year = new Date().getFullYear()
  return (
    <article className="section-padding bg-white">
      <div className="container-max max-w-3xl">
        <h1 className="font-display font-bold text-secondary text-4xl sm:text-5xl mb-4">Privacy Policy</h1>
        <p className="font-body text-muted mb-10">Last updated: {year}</p>
        <div className="space-y-8 font-body text-secondary leading-relaxed">
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 font-semibold">Placeholder</p>
            <p className="text-amber-700 mt-1">This is a placeholder privacy policy. Replace with a legally reviewed policy before launch.</p>
          </div>
          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="font-display font-bold text-xl mb-3">Information We Collect</h2>
            <p className="text-muted">[Add details of data collected — e.g. enquiry form data, analytics, cookies.]</p>
          </section>
          <section aria-labelledby="data-use">
            <h2 id="data-use" className="font-display font-bold text-xl mb-3">How We Use Your Information</h2>
            <p className="text-muted">[Add explanation of data usage.]</p>
          </section>
          <section aria-labelledby="data-rights">
            <h2 id="data-rights" className="font-display font-bold text-xl mb-3">Your Rights</h2>
            <p className="text-muted">[Add user rights information — GDPR, CCPA, etc.]</p>
          </section>
          <section aria-labelledby="data-contact">
            <h2 id="data-contact" className="font-display font-bold text-xl mb-3">Contact</h2>
            <p className="text-muted">For privacy-related questions, contact us at <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.</p>
          </section>
        </div>
      </div>
    </article>
  )
}
