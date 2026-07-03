export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-linkedin-950">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-linkedin-900 dark:text-linkedin-50 mb-4">Contact</h2>
        <p className="text-linkedin-600 dark:text-linkedin-400 mb-8">
          Have a question or want to work together? Drop me a message.
        </p>
        <a
          href="mailto:doris@example.com"
          className="inline-block bg-linkedin-500 dark:bg-linkedin-400 text-white dark:text-linkedin-950 px-6 py-3 rounded-lg font-medium hover:bg-linkedin-600 dark:hover:bg-linkedin-500 transition-colors"
        >
          Say hello
        </a>
      </div>
    </section>
  )
}
