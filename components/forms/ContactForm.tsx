'use client'

import { useState } from 'react'
import { submitContactForm, type ContactFormData } from '@/lib/contact-service'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const projectTypes = [
  'New Web Application',
  'AI Feature Integration',
  'Internal Tool or Portal',
  'Mobile Application',
  'Product Design',
  'Technical Consultancy',
  'Other',
]

const initialState: ContactFormData = {
  fullName: '',
  email: '',
  company: '',
  projectType: '',
  description: '',
  consent: false,
  _honeypot: '',
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
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'A valid email address is required.'
    if (!form.projectType) e.projectType = 'Please select a project type.'
    if (!form.description.trim() || form.description.length < 20)
      e.description = 'Please describe your project (at least 20 characters).'
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
        <h3 className="font-display font-bold text-navy text-2xl">Message received!</h3>
        <p className="font-body text-slate2 max-w-md">
          Thanks for reaching out. We review every enquiry and will be in touch soon.
        </p>
      </div>
    )
  }

  const fieldClass = (id: keyof ContactFormData) =>
    `w-full px-4 py-3 rounded-xl border font-body text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors ${
      errors[id] ? 'border-red-400' : 'border-border'
    }`

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
          <label htmlFor="fullName" className="block font-body font-semibold text-navy text-sm mb-2">
            Full name <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            autoComplete="name"
            placeholder="Jane Smith"
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            aria-invalid={errors.fullName ? true : undefined}
            className={fieldClass('fullName')}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />{errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-body font-semibold text-navy text-sm mb-2">
            Email <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            autoComplete="email"
            placeholder="jane@company.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? true : undefined}
            className={fieldClass('email')}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />{errors.email}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block font-body font-semibold text-navy text-sm mb-2">
            Company <span className="text-slate2 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            autoComplete="organization"
            placeholder="Acme Inc."
            className={fieldClass('company')}
          />
        </div>

        {/* Project type */}
        <div>
          <label htmlFor="projectType" className="block font-body font-semibold text-navy text-sm mb-2">
            Project type <span aria-label="required">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(e) => set('projectType', e.target.value)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
            aria-invalid={errors.projectType ? true : undefined}
            className={fieldClass('projectType')}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />{errors.projectType}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block font-body font-semibold text-navy text-sm mb-2">
            Tell us about your project <span aria-label="required">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            value={form.description}
            onChange={(e) => set('description', e.target.value)}
            placeholder="What are you trying to build or solve? The more context you share, the better we can help."
            aria-describedby={errors.description ? 'description-error' : undefined}
            aria-invalid={errors.description ? true : undefined}
            className={`w-full px-4 py-3 rounded-xl border font-body text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors resize-y ${
              errors.description ? 'border-red-400' : 'border-border'
            }`}
          />
          {errors.description && (
            <p id="description-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />{errors.description}
            </p>
          )}
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
            <span className="font-body text-sm text-slate2">
              I have read and agree to the{' '}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              I understand my data will be used to respond to this enquiry.
              <span aria-label="required"> *</span>
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" role="alert" className="mt-1.5 text-sm text-red-600 font-body flex items-center gap-1">
              <AlertCircle size={14} aria-hidden="true" />{errors.consent}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <div role="alert" aria-live="assertive" className="mt-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-body text-sm">
          <AlertCircle size={18} aria-hidden="true" />
          Something went wrong. Please try again or reach out to us directly.
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
            'Send Message'
          )}
        </button>
      </div>
    </form>
  )
}
