import { profile } from '../data/content.js'

function Sidebar({ sections, active }) {
  return (
    <header className="sidebar">
      <div>
        <a href="#about" className="monogram" aria-label="Back to top">
          GA
        </a>
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>
        <p className="availability">
          <span className="dot" aria-hidden="true" />
          Open to internships &amp; apprenticeships · {profile.location}
        </p>

        <nav className="nav" aria-label="Sections">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={active === section.id ? 'active' : undefined}
                  aria-current={active === section.id ? 'true' : undefined}
                >
                  <span className="nav-line" aria-hidden="true" />
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="socials" aria-label="Social links">
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              {...(social.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Sidebar
