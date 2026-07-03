export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-linkedin-50 to-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-linkedin-900 mb-4">
          Hi, I'm Doris
        </h1>
        <p className="text-lg text-linkedin-600 mb-8 leading-relaxed">
          Frontend engineer building modern, performant web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block bg-linkedin-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-linkedin-600 transition-colors"
        >
          See my work
        </a>
      </div>
    </section>
  )
}
