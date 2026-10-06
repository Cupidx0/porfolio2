function Section({ id, label, children }) {
  return (
    <section id={id} className="section" aria-label={label}>
      <h2 className="section-title">{label}</h2>
      {children}
    </section>
  )
}

export default Section
