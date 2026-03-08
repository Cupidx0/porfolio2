import '../App.css'
function PortfolioPage() {
    const projects = [
        {
            title: 'AI Outfit Generator',
            description:
            'Weather-aware outfit recommendations that blend personal style profiles with AI suggestions for daily planning.',
            stack: ['React', 'Flask', 'Firebase', 'OpenAI', 'OpenWeather'],
            github: 'https://github.com/Cupidx0',
            demo: 'https://example.com',
        },
        {
            title: 'AI Digital Twin Assistant',
            description:
            'An AI productivity and career companion that organizes goals, habits, and learning plans with smart reminders.',
            stack: ['React', 'Node.js', 'Firebase', 'LangChain'],
            github: 'https://github.com/Cupidx0',
            demo: 'https://example.com',
        },
        {
            title: 'Campus Events Hub',
            description:
            'A responsive web app for discovering local student events, saving favorites, and sharing updates in real time.',
            stack: ['React', 'JavaScript', 'Firestore', 'Vite'],
            github: 'https://github.com/Cupidx0',
            demo: 'https://example.com',
        },
        {
            title: 'Algorithm Practice Lab',
            description:
            'Interactive coding challenges with progress tracking, test cases, and performance insights for interview prep.',
            stack: ['Python', 'Flask', 'SQLite', 'REST'],
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
            items: ['Firebase', 'Firestore'],
        },
        {
            title: 'Tools',
            items: ['Git', 'GitHub', 'APIs', 'REST'],
        },
        ]

        const activityLevels = Array.from({ length: 84 }, (_, index) => (index * 7 + 3) % 5)

        const repositories = [
        {
            name: 'ai-outfit-generator',
            description: 'Style recommendations with AI and weather context.',
            language: 'JavaScript',
            stars: '28',
        },
        {
            name: 'digital-twin-assistant',
            description: 'AI companion for focus, learning, and productivity.',
            language: 'TypeScript',
            stars: '19',
        },
        {
            name: 'firebase-portfolio',
            description: 'Reusable components and auth patterns for student builders.',
            language: 'React',
            stars: '14',
        },
        {
            name: 'algo-practice-lab',
            description: 'Coding practice prompts with scoring and hints.',
            language: 'Python',
            stars: '12',
        },
        ]
        const newDate = new Date().getFullYear()
  return (
    <div className="page">
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
              <p className="eyebrow">Front-End / Full-Stack Developer</p>
              <h1>Godwin Alamu</h1>
              <p className="lead">
                Developer focused on building practical AI-powered web applications using React, Python, and
                Firebase. Currently pursuing a T-Level in Digital Design &amp; Development.
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
                <h3>AI-powered tools that feel simple.</h3>
                <p>
                  I turn complex AI workflows into smooth, human-first experiences with clean UI, reliable data, and
                  thoughtful UX.
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
                  <p className="muted">{project.description}</p>
                  <div className="stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="card-actions">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Focused on modern web stacks and AI-ready tooling.</h2>
            </div>
            <div className="grid skills-grid">
              {skills.map((group) => (
                <div className="card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="pill-row">
                    {group.items.map((skill) => (
                      <span key={skill} className="pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
              <p className="eyebrow">GitHub Activity</p>
              <h2>Consistent building, clean commits.</h2>
              <p className="muted">Recent activity and repositories that show steady progress.</p>
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
                      <span>{repo.stars} stars</span>
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
        <div className="container footer-content">
          <p className="muted">© {newDate} Godwin Alamu.</p>
          <a href="#top" className="back-to-top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioPage
