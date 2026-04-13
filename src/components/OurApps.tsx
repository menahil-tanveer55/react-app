const apps = [
  {
    emoji: '🛸',
    title: 'Innovative',
    subtitle: 'Next Gen',
    alt: 'innovative app',
  },
  {
    emoji: '🤖',
    title: 'AI Powered',
    subtitle: 'Best Seller!',
    alt: 'AI powered app',
  },
  {
    emoji: '⚡',
    title: 'High Performance',
    subtitle: 'Top Rated!',
    alt: 'high performance app',
  },
]

export default function OurApps() {
  return (
    <section
      id="rockets"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Apps
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col items-center sm:flex-row gap-8">
        {apps.map((app) => (
          <li
            key={app.title}
            className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:bg-black dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl"
          >
            <div className="text-[6rem] mb-6 select-none">{app.emoji}</div>
            <h3 className="text-3xl text-center text-slate-900 dark:text-amber-400">
              {app.title}
            </h3>
            <p className="text-2xl text-center text-slate-500 dark:text-slate-400 mt-2">
              {app.subtitle}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
