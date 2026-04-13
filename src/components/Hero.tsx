export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white mb-10">
          We build{' '}
          <span className="text-violet-700 dark:text-amber-400">
            Amazing AI-Powered{' '}
          </span>
          apps...
        </h2>
        <p className="max-w-md text-2xl text-center sm:text-left text-slate-700 dark:text-slate-400 mb-8">
          At Rocket.IO we build next generation apps today. From AI to
          Blockchain, we've got you covered...
        </p>
        <div className="flex justify-center sm:justify-start">
          <a
            href="#contact"
            className="bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none text-2xl text-center"
          >
            Contact Us
          </a>
        </div>
      </article>

      <div className="w-1/2 flex items-center justify-center text-[10rem] select-none">
        🚀
      </div>
    </section>
  )
}
