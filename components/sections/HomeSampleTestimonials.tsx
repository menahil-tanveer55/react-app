import { Quote } from 'lucide-react'

interface SampleTestimonial {
  id: string
  quote: string
  author: string
  role: string
  country: string
  initials: string
  label: string
  testId: string
}

// These are sample / placeholder testimonials illustrating the kind of feedback
// Rocket.io aims to earn. Replace with verified, permission-confirmed quotes before
// using as real client endorsements.
const sampleTestimonials: SampleTestimonial[] = [
  {
    id: 'sarah-mitchell',
    quote:
      'Rocket.io took our initial idea and turned it into a clean, practical platform. Communication was clear throughout, and the team focused on what would genuinely work for our users.',
    author: 'Sarah Mitchell',
    role: 'Operations Manager',
    country: 'United Kingdom',
    initials: 'SM',
    label: 'Sample Testimonial',
    testId: 'sarah-mitchell',
  },
  {
    id: 'daniel-brooks',
    quote:
      'What stood out most was the product thinking. They did not just build screens — they helped shape a better workflow and prioritise the features that mattered.',
    author: 'Daniel Brooks',
    role: 'Founder',
    country: 'Canada',
    initials: 'DB',
    label: 'Sample Testimonial',
    testId: 'daniel-brooks',
  },
  {
    id: 'emily-carter',
    quote:
      'The team was responsive, organised and easy to work with. Even at an early stage, they showed strong ownership, structure and attention to detail.',
    author: 'Emily Carter',
    role: 'Programme Lead',
    country: 'Australia',
    initials: 'EC',
    label: 'Sample Testimonial',
    testId: 'emily-carter',
  },
  {
    id: 'michael-reed',
    quote:
      'Rocket.io combines technical capability with a collaborative approach. They were thoughtful about usability, delivery and future scalability.',
    author: 'Michael Reed',
    role: 'Product Consultant',
    country: 'United States',
    initials: 'MR',
    label: 'Sample Testimonial',
    testId: 'michael-reed',
  },
]

export default function HomeSampleTestimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      data-testid="testimonials-section"
      className="section-padding bg-warm"
    >
      <div data-testid="testimonials-container" className="container-max">

        {/* Section header */}
        <div data-testid="testimonials-header" className="mb-10 lg:mb-12 max-w-2xl mx-auto text-center">
          <p
            data-testid="testimonials-eyebrow"
            className="text-xs font-semibold uppercase tracking-widest text-primary font-body mb-3"
          >
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            data-testid="testimonials-section-heading"
            className="font-display font-bold text-navy text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight mb-4"
          >
            What people say
          </h2>
          <p
            data-testid="testimonials-description"
            className="font-body text-slate2 text-base leading-relaxed"
          >
            A preview of the type of feedback Rocket.io aims to earn through practical
            product thinking, clear communication and responsible engineering.
          </p>
        </div>

        {/* Testimonial card grid — 1 col mobile, 2 col tablet+ */}
        <div
          data-testid="testimonials-grid"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {sampleTestimonials.map((t) => (
            <figure
              key={t.id}
              data-testid={`testimonial-card-${t.testId}`}
              className="flex flex-col bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Sample label + decorative quote icon */}
              <div
                data-testid={`testimonial-card-${t.testId}-header`}
                className="flex items-center justify-between mb-5"
              >
                <span
                  data-testid={`testimonial-card-${t.testId}-label`}
                  className="inline-block text-[10px] font-semibold uppercase tracking-widest font-body text-slate2 bg-warm border border-border/80 px-2.5 py-1 rounded-full"
                >
                  {t.label}
                </span>
                <Quote
                  size={22}
                  className="text-primary/20 shrink-0"
                  aria-hidden="true"
                />
              </div>

              {/* Quote */}
              <blockquote
                data-testid={`testimonial-card-${t.testId}-blockquote`}
                className="flex-1 mb-6"
              >
                <p
                  data-testid={`testimonial-card-${t.testId}-quote`}
                  className="font-body text-navy leading-relaxed text-sm sm:text-base"
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption
                data-testid={`testimonial-card-${t.testId}-figcaption`}
                className="border-t border-border pt-5"
              >
                <div
                  data-testid={`testimonial-card-${t.testId}-author-row`}
                  className="flex items-center gap-3"
                >
                  {/* Initials badge — no fake photo used */}
                  <div
                    data-testid={`testimonial-card-${t.testId}-avatar`}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span
                      data-testid={`testimonial-card-${t.testId}-initials`}
                      className="text-xs font-bold font-body text-primary select-none"
                    >
                      {t.initials}
                    </span>
                  </div>

                  <div data-testid={`testimonial-card-${t.testId}-author-info`}>
                    <p
                      data-testid={`testimonial-card-${t.testId}-author-name`}
                      className="font-display font-bold text-navy text-sm"
                    >
                      {t.author}
                    </p>
                    <p
                      data-testid={`testimonial-card-${t.testId}-author-meta`}
                      className="font-body text-xs text-slate2"
                    >
                      {t.role}
                      <span
                        data-testid={`testimonial-card-${t.testId}-author-country`}
                      >
                        {' '}·{' '}{t.country}
                      </span>
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
