import profile from '../data/portfolio.js'

const logos = import.meta.glob(
  '../assets/skills/*.svg',
  { eager: true, import: 'default' }
)

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">
          Technologies I work with every day.
        </p>
        {Object.entries(profile.skills).map(([category, ids]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category__title">{category}</h3>
            <ul className="skills-list">
              {ids.map((id) => (
                <li key={id} className="skills-list__item">
                  <img
                    className="skills-list__logo"
                    src={logos[`../assets/skills/${id}.svg`]}
                    alt={`${profile.skillNames[id]} logo`}
                    loading="lazy"
                  />
                  <span className="skills-list__name">
                    {profile.skillNames[id]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}