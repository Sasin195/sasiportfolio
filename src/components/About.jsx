import profile from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <p className="section__subtitle">
          A quick introduction to who I am and what I do.
        </p>
        <div className="about">
          {profile.about.map((paragraph, i) => (
            <p key={i} className="about__text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}