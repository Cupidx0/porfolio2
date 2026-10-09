import Header from '../components/Header.jsx'
import Section from '../components/Section.jsx'
import TagList from '../components/TagList.jsx'
import { about, journey, profile, projects, skills } from '../data/content.js'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function PortfolioPage() {
  return (
    <div className="page">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <Header sections={SECTIONS} />

      <main id="content">
        <Section id="about" label="About">
          {about.map((paragraph) => (
            <p key={paragraph} className="prose">
              {paragraph}
            </p>
          ))}
        </Section>

        <Section id="work" label="Work">
          <ol className="entries">
            {projects.map((project, index) => {
              const link = project.demo || project.p_link
              return (
                <li key={project.title} className="entry">
                  <p className="entry-meta">{String(index + 1).padStart(2, '0')}</p>
                  <div>
                    <h3 className="entry-title">
                      {link ? (
                        <a href={link} target="_blank" rel="noreferrer">
                          {project.title} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="entry-text">{project.description}</p>
                    <TagList items={project.stack} label="Built with" />
                    {project.p_link && project.demo && (
                      <a href={project.p_link} target="_blank" rel="noreferrer" className="text-link">
                        Live demo →
                      </a>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
          <a href="https://github.com/Cupidx0" target="_blank" rel="noreferrer" className="text-link">
            More on GitHub →
          </a>
        </Section>

        <Section id="journey" label="Journey">
          <ol className="entries">
            {journey.map((item) => (
              <li key={item.title} className="entry">
                <p className="entry-meta">{item.period}</p>
                <div>
                  <h3 className="entry-title">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="entry-org">{item.org}</p>
                  <p className="entry-text">{item.description}</p>
                  <TagList items={item.tags} label="Focus areas" />
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" label="Skills">
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.title} className="skill-row">
                <dt>{group.title}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" label="Contact">
          <p className="contact-lead">Let&rsquo;s build something practical.</p>
          <p className="prose">
            I&rsquo;m looking for internships, apprenticeships and collaborative projects in AI, web apps
            and tooling. The quickest way to reach me is email.
          </p>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}

export default PortfolioPage
