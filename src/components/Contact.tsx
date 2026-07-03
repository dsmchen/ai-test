import { useState, type SubmitEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email address'
  }
  if (!data.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    const subject = encodeURIComponent(`Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    setSubmitted(true)
    window.location.href = `mailto:doris@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-linkedin-950">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-linkedin-900 dark:text-linkedin-50 mb-4 text-center">Contact</h2>
        <p className="text-linkedin-600 dark:text-linkedin-400 mb-10 text-center">
          Have a question or want to work together? Drop me a message.
        </p>

        {submitted ? (
          <p className="text-center text-linkedin-500 dark:text-linkedin-400">
            Thanks! Your email client should open shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-linkedin-700 dark:text-linkedin-300 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-linkedin-200 dark:border-linkedin-700 bg-white dark:bg-linkedin-900 text-linkedin-900 dark:text-linkedin-50 focus:outline-none focus:ring-2 focus:ring-linkedin-500 transition-colors"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-linkedin-700 dark:text-linkedin-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-linkedin-200 dark:border-linkedin-700 bg-white dark:bg-linkedin-900 text-linkedin-900 dark:text-linkedin-50 focus:outline-none focus:ring-2 focus:ring-linkedin-500 transition-colors"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-linkedin-700 dark:text-linkedin-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-linkedin-200 dark:border-linkedin-700 bg-white dark:bg-linkedin-900 text-linkedin-900 dark:text-linkedin-50 focus:outline-none focus:ring-2 focus:ring-linkedin-500 transition-colors resize-y"
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-linkedin-500 dark:bg-linkedin-400 text-white dark:text-linkedin-950 py-2.5 rounded-lg font-medium hover:bg-linkedin-600 dark:hover:bg-linkedin-500 transition-colors"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
