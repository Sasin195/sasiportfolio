import profile from '../data/portfolio.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">Some things I have built recently.</p>
        <div className="projects">
          {profile.projects.map((project) => (
            <article key={project.title} className="card">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.description}</p>
              <div className="card__tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="card__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card__links">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--outline btn--sm"
                >
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}