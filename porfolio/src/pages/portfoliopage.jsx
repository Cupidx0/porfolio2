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

    const projects = [
        {
            title: 'AI Outfit Generator',
            description:
            'Weather-aware outfit recommendations that blend personal style profiles with AI suggestions for daily planning.',
            stack: ['React','python','Flask', 'Firebase', 'OpenAI', 'OpenWeather'],
            github: 'https://github.com/Cupidx0',
            demo: 'https://example.com',
        },
        {
            title: 'AI Digital Twin Assistant',
            description:
            'An AI productivity and career companion that organizes goals, habits, and learning plans with smart reminders.',
            stack: ['React', 'python', 'Flask', 'Firebase', 'opensource LLMs'],
            github: 'https://github.com/Cupidx0',
            demo: 'https://example.com',
        },
        ]

        const skills = [
        {
            title: 'Frontend',
            items: ['React', 'JavaScript', 'HTML', 'CSS'],
        },
        {
            title: 'Backend',
            items: ['Python', 'Flask', 'Node.js'],
        },
        {
            title: 'Database / Cloud',
            items: ['Firebase', 'Firestore', 'SQL'],
        },
        {
            title: 'Tools',
            items: ['Git', 'GitHub', 'APIs', 'REST'],
        },
        ]

        const activityLevels = Array.from({ length: 84 }, (_, index) => (index * 7 + 3) % 5)

        const repositories = [
        {
            name: 'meta certificate',
            description: 'Meta Front-End Developer Professional Certificate on Coursera.',
            link: '',
        },
        {
            name: 'digital-twin-assistant',
            description: 'AI companion for focus, learning, and productivity.',
            language: 'React, python, flask, firebase',
        },
        ]
        const newDate = new Date().getFullYear()
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
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">GA</div>
          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#github">GitHub</a>
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section hero" id="top">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Back-End / Full-Stack Developer</p>
              <h1>Godwin Alamu</h1>
              <p className="lead">
                Developer focused on building practical backend development and frontend web applications using React, Python, and
                Firebase. Currently pursuing HNC/HND in COMPUTING.
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#projects">
                  View Projects
                </a>
                <a className="btn ghost" href="https://github.com/Cupidx0" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  className="btn ghost"
                  href="https://www.linkedin.com/in/mamba-drawing-280912265"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="hero-tags">
                <span>Frontend</span>
                <span>Firebase Backends</span>
                <span>Productive Workflows</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-header">
                <p className="label">Currently Building</p>
              </div>
              <div className="hero-card-body">
                <h3>AI-powered digital assistant </h3>
                <p>
                  currently building an AI-powered digital asssistant that help the user and organize their goals, habits, and learning plans with smart reminders.
                </p>
              </div>
              <div className="hero-card-footer">
                <div>
                  <p className="label">Focus Stack</p>
                  <p className="mono">React · Python · Firebase</p>
                </div>
                <div>
                  <p className="label">Location</p>
                  <p className="mono">London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Featured Projects</p>
              <h2>Practical builds with real-world impact.</h2>
              <p className="muted">
                A selection of projects that highlight clean UI, thoughtful data flows, and production-ready
                execution.
              </p>
            </div>
            <div className="grid projects-grid">
              {projects.map((project) => (
                <article className="card project-card" key={project.title}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="chip">Case Study</span>
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
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About Me</p>
              <h2>I am a junior developer and student currently pursuing a degree in Computer Science.</h2>
              <p className="muted">
                I am a junior developer who loves blending AI with clean product experiences. I build productivity
                systems, practical assistants, and real-world web apps that make life easier for students and teams.
                I care about clarity, performance, and shipping ideas that people can actually use.
              </p>
            </div>
            <div className="card about-card">
              <h3>What I care about</h3>
              <ul className="about-list">
                <li>in progress</li>
                <li>Reliable full-stack delivery</li>
                <li>Learning in public and iterating fast</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="github">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Certificates</p>
              <h2>my credentials and coursera certificates.</h2>
              <p className="muted">Here are some of my achievements and certifications.</p>
            </div>
            <div className="github-grid">
              <div className="repo-list">
                {repositories.map((repo) => (
                  <div className="card repo-card" key={repo.name}>
                    <div>
                      <h3>{repo.name}</h3>
                      <p className="muted">{repo.description}</p>
                    </div>
                    <div className="repo-meta">
                      <span>{repo.language}</span>
                      <span>{repo.stars}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something practical.</h2>
              <p className="muted">
                I am open to internships, Level 4 apprenticeships, and collaborative projects focused on AI, web
                apps, and tooling.
              </p>
            </div>
            <div className="card contact-card">
              <div>
                <p className="label">Email</p>
                <a href="mailto:alamugodwin@gmail.com">alamugodwin@gmail.com</a>
              </div>
              <div>
                <p className="label">GitHub</p>
                <a href="https://github.com/Cupidx0" target="_blank" rel="noreferrer">
                  github.com/Cupidx0
                </a>
              </div>
              <div>
                <p className="label">LinkedIn</p>
                <a href="https://www.linkedin.com/in/mamba-drawing-280912265" target="_blank" rel="noreferrer">
                  linkedin.com/in/mamba-drawing-280912265
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

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
