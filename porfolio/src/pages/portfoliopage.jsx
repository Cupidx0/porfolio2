import Sidebar from '../components/Sidebar.jsx'
import Section from '../components/Section.jsx'
import Spotlight from '../components/Spotlight.jsx'
import TagList from '../components/TagList.jsx'
import { about, journey, profile, projects, skills } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const SECTION_IDS = SECTIONS.map((section) => section.id)

function PortfolioPage() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <div className="page">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Spotlight />

      <div className="layout">
        <Sidebar sections={SECTIONS} active={active} />

        <main id="content" className="content">
          <Section id="about" label="About">
            {about.map((paragraph) => (
              <p key={paragraph} className="prose">
                {paragraph}
              </p>
            ))}
          </Section>

          <Section id="journey" label="Journey">
            <ol className="card-list">
              {journey.map((item) => (
                <li key={item.title} className="card">
                  <p className="card-meta">{item.period}</p>
                  <div>
                    <h3 className="card-title">
                      {item.title} <span className="card-org">· {item.org}</span>
                    </h3>
                    <p className="card-text">{item.description}</p>
                    <TagList items={item.tags} label="Focus areas" />
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="projects" label="Projects">
            <ul className="card-list">
              {projects.map((project, index) => {
                const link = project.demo || project.github
                return (
                  <li key={project.title} className="card">
                    <p className="card-meta">{String(index + 1).padStart(2, '0')}</p>
                    <div>
                      <h3 className="card-title">
                        {link ? (
                          <a href={link} target="_blank" rel="noreferrer" className="card-link">
                            {project.title} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="card-text">{project.description}</p>
                      <TagList items={project.stack} label="Built with" />
                      {project.github && project.demo && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="inline-link">
                          Source code
                        </a>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
            <a href="https://github.com/Cupidx0" target="_blank" rel="noreferrer" className="inline-link more">
              View all work on GitHub <span aria-hidden="true">→</span>
            </a>
          </Section>

          <Section id="skills" label="Skills">
            <dl className="skills">
              {skills.map((group) => (
                <div key={group.title} className="skill-row">
                  <dt>{group.title}</dt>
                  <dd>
                    <TagList items={group.items} label={group.title} />
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="contact" label="Contact">
            <h3 className="contact-heading">Let&rsquo;s build something practical.</h3>
            <p className="prose">
              I&rsquo;m looking for internships, Level 4 apprenticeships and collaborative projects in AI, web apps
              and tooling. My inbox is always open.
            </p>
            <a className="button" href={`mailto:${profile.email}`}>
              Say hello
            </a>
          </Section>

          <footer className="footer">
            <p>
              Designed and built by {profile.name} with React and Vite. © {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default PortfolioPage
