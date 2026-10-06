import { profile } from '../data/content.js'

function Header({ sections }) {
  return (
    <header className="header">
      <nav className="topnav" aria-label="Sections">
        <a href="#top" className="wordmark">
          {profile.name}
        </a>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="intro" id="top">
        <p className="eyebrow">
          {profile.role} — {profile.location}
        </p>
        <h1 className="headline">{profile.tagline}</h1>
        <p className="availability">Open to internships &amp; apprenticeships.</p>
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
      </div>
    </header>
  )
}

export default Header
