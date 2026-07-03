export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-linkedin-50 dark:from-linkedin-900 to-white dark:to-linkedin-950 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-linkedin-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-linkedin-900 dark:text-linkedin-50 mb-4">
          Hi, I'm Doris
        </h1>
        <p className="text-lg text-linkedin-600 dark:text-linkedin-400 mb-8 leading-relaxed">
          Frontend engineer building modern, performant web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-linkedin-500 dark:bg-linkedin-400 text-white dark:text-linkedin-950 px-6 py-3 rounded-lg font-medium hover:bg-linkedin-600 dark:hover:bg-linkedin-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linkedin-500 transition-all spring-transition"
        >
          See my work
        </a>
      </div>
    </section>
  )
}
