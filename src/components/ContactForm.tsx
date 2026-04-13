import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height scroll-mt-20"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Contact Us
      </h2>
      {submitted ? (
        <p className="max-w-6xl mx-auto text-2xl text-center text-violet-700 dark:text-amber-400">
          Thanks for reaching out! We'll get back to you soon. 🚀
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto text-2xl sm:text-3xl flex flex-col items-start gap-4 text-slate-900 dark:text-white"
        >
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="Your Subject"
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <button
            type="submit"
            className="bg-violet-700 hover:bg-violet-600 active:bg-violet-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none cursor-pointer"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  )
}
