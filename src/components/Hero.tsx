export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-linkedin-50 dark:from-linkedin-900 to-white dark:to-linkedin-950 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-linkedin-900 dark:text-linkedin-50 mb-4">
          Hi, I'm Doris
        </h1>
        <p className="text-lg text-linkedin-600 dark:text-linkedin-400 mb-8 leading-relaxed">
          Frontend engineer building modern, performant web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-linkedin-500 dark:bg-linkedin-400 text-white dark:text-linkedin-950 px-6 py-3 rounded-lg font-medium hover:bg-linkedin-600 dark:hover:bg-linkedin-500 transition-colors"
        >
          See my work
        </a>
      </div>
    </section>
  )
}
