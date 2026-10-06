function Section({ id, label, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        {label}
      </h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

export default Section
