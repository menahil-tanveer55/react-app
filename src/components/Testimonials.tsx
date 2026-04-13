const testimonials = [
  {
    quote: (
      <>
        Using Rocket.IO has been a game changer for our business. We've seen a{' '}
        <span className="italic">300% increase </span> in sales since we started
        using it!
      </>
    ),
    author: 'CEO, ALL2Code GmbH',
  },
  {
    quote:
      "Business has never been better since we started using Rocket.IO. Our customers love it and we love it too! It's a win-win!",
    author: 'Regional Manager, CurryCoders GmbH',
  },
  {
    quote: "Rocket.IO is the best! I can't believe I didn't start using it sooner! Life changing! I'm a Rocket.IO customer for life!",
    author: 'Max Mustermann, Genius',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonials
      </h2>
      {testimonials.map((t, i) => (
        <figure key={i} className="my-12">
          <blockquote className="bg-violet-900 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:text-white before:left-0 before:top-0 before:text-9xl before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:text-white after:right-0 after:-bottom-20 after:text-9xl after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-5">
              {t.quote}
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            &#8212; {t.author}
          </figcaption>
        </figure>
      ))}
    </section>
  )
}
