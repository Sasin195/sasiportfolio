import profile from '../data/portfolio.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero__eyebrow">Hello, I&apos;m</p>
      <h1 className="hero__name">{profile.name}</h1>
      <h2 className="hero__role">{profile.role}</h2>
      <p className="hero__tagline">{profile.tagline}</p>
      <div className="hero__actions">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            {social.label}
          </a>
        ))}
        <a href="#projects" className="btn btn--outline">
          View My Work
        </a>
      </div>
    </section>
  )
}