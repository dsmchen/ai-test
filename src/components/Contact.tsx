export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-linkedin-900 mb-4">Contact</h2>
        <p className="text-linkedin-600 mb-8">
          Have a question or want to work together? Drop me a message.
        </p>
        <a
          href="mailto:doris@example.com"
          className="inline-block bg-linkedin-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-linkedin-600 transition-colors"
        >
          Say hello
        </a>
      </div>
    </section>
  )
}
