'use client'

import { useState } from 'react'
import { submitContactForm, type ContactFormData } from '@/lib/contact-service'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const projectTypes = ['New Product Build', 'Platform Modernisation', 'AI Feature Integration', 'Mobile Application', 'Technical Consultancy', 'Ongoing Support', 'Other']
const budgetRanges = ['Under $10k', '$10k – $25k', '$25k – $75k', '$75k – $150k', '$150k+', 'Not sure yet']
const timelines = ['As soon as possible', '1 – 3 months', '3 – 6 months', '6+ months', 'Flexible']

const initialState: ContactFormData = {
  fullName: '', email: '', phone: '', company: '',
  projectType: '', serviceInterest: '', budget: '', timeline: '',
  description: '', consent: false, _honeypot: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const set = (field: keyof ContactFormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const validate = (): boolean => {
    const e: typeof errors = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'A valid email address is required.'
    if (!form.projectType) e.projectType = 'Please select a project type.'
    if (!form.description.trim() || form.description.length < 20) e.description = 'Please describe your project (at least 20 characters).'
    if (!form.consent) e.consent = 'Please confirm you have read our privacy policy.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const result = await submitContactForm(form)
      setStatus(result.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center text-center py-16 gap-4">
        <CheckCircle size={56} className="text-emerald-500" aria-hidden="true" />
        <h3 className="font-display font-bold text-secondary text-2xl">Message received!</h3>
        <p className="font-body text-muted max-w-md">
          Thanks for reaching out. We review every enquiry and will be in touch within one business day.
        </p>
      </div>
    )
  }

  const field = (id: keyof ContactFormData) => ({
    id,
    name: id,
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
    'aria-invalid': errors[id] ? (true as const) : undefined,
    className: `w-full px-4 py-3 rounded-xl border font-body text-secondary bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors ${errors[id] ? 'border-red-400' : 'border-border'}`,
  })

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="_honeypot"
        value={form._honeypot}
        onChange={(e) => set('_honeypot', e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        autoComplete="off"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Full name */}
        <div>
          <label htmlFor="fullName" className="block font-body font-semibold text-secondary text-sm mb-2">
            Full name <span aria-label="required">*</span>
          </label>
          <input type="text" {...field('fullName')} value={form.fullName} onChange={(e) => set('fullName', e.target.value)} autoComplete="name" placeholder="Jane Smith" />
          {errors.fullName && <p id="fullName-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1"><AlertCircle size={14} aria-hidden="true" />{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-body font-semibold text-secondary text-sm mb-2">
            Work email <span aria-label="required">*</span>
          </label>
          <input type="email" {...field('email')} value={form.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" placeholder="jane@company.com" />
          {errors.email && <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1"><AlertCircle size={14} aria-hidden="true" />{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-body font-semibold text-secondary text-sm mb-2">Phone <span className="text-muted font-normal">(optional)</span></label>
          <input type="tel" {...field('phone')} value={form.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" placeholder="+1 555 000 0000" />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block font-body font-semibold text-secondary text-sm mb-2">Company <span className="text-muted font-normal">(optional)</span></label>
          <input type="text" {...field('company')} value={form.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" placeholder="Acme Inc." />
        </div>

        {/* Project type */}
        <div>
          <label htmlFor="projectType" className="block font-body font-semibold text-secondary text-sm mb-2">Project type <span aria-label="required">*</span></label>
          <select {...field('projectType')} value={form.projectType} onChange={(e) => set('projectType', e.target.value)}>
            <option value="">Select a project type</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.projectType && <p id="projectType-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1"><AlertCircle size={14} aria-hidden="true" />{errors.projectType}</p>}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block font-body font-semibold text-secondary text-sm mb-2">Estimated budget</label>
          <select {...field('budget')} value={form.budget} onChange={(e) => set('budget', e.target.value)}>
            <option value="">Select a range</option>
            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Timeline */}
        <div className="sm:col-span-2">
          <label htmlFor="timeline" className="block font-body font-semibold text-secondary text-sm mb-2">Preferred timeline</label>
          <select {...field('timeline')} value={form.timeline} onChange={(e) => set('timeline', e.target.value)}>
            <option value="">Select a timeline</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block font-body font-semibold text-secondary text-sm mb-2">
            Tell us about your project <span aria-label="required">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            value={form.description}
            onChange={(e) => set('description', e.target.value)}
            placeholder="Describe the product, problem or idea you want to discuss..."
            aria-describedby={errors.description ? 'description-error' : undefined}
            aria-invalid={errors.description ? true : undefined}
            className={`w-full px-4 py-3 rounded-xl border font-body text-secondary bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors resize-y ${errors.description ? 'border-red-400' : 'border-border'}`}
          />
          {errors.description && <p id="description-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1"><AlertCircle size={14} aria-hidden="true" />{errors.description}</p>}
        </div>

        {/* Consent */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={form.consent}
              onChange={(e) => set('consent', e.target.checked)}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              aria-invalid={errors.consent ? true : undefined}
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/40"
            />
            <span className="font-body text-sm text-muted">
              I have read and agree to the{' '}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              I understand my data will be used to respond to this enquiry.
              <span aria-label="required"> *</span>
            </span>
          </label>
          {errors.consent && <p id="consent-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1"><AlertCircle size={14} aria-hidden="true" />{errors.consent}</p>}
        </div>
      </div>

      {status === 'error' && (
        <div role="alert" aria-live="assertive" className="mt-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-body text-sm">
          <AlertCircle size={18} aria-hidden="true" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold font-body px-8 py-4 rounded-xl transition-colors text-base"
        >
          {status === 'loading' ? (
            <><Loader2 size={18} aria-hidden="true" className="animate-spin" /> Sending...</>
          ) : (
            'Send Enquiry'
          )}
        </button>
      </div>
    </form>
  )
}
