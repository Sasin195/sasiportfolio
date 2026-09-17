import { useState } from 'react'
import profile from '../data/portfolio.js'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container container--narrow">
        <h2 className="section__title">Get In Touch</h2>
        <p className="section__subtitle">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>

        {sent ? (
          <div className="contact__success">
            <h3>Thanks, {form.name || 'friend'}!</h3>
            <p>Your message has been recorded. I will get back to you soon.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
          </form>
        )}

        <p className="contact__email">
          Or reach me directly at{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </section>
  )
}