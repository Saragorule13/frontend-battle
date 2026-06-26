const TESTIMONIALS = [
  {
    text: "NexusAI transformed our data operations. What used to take our team days now happens in minutes. The ROI was visible within the first month.",
    name: "Sarah Chen",
    role: "VP of Engineering, DataScale",
    initials: "SC",
  },
  {
    text: "The workflow builder is incredibly intuitive. We migrated 50+ legacy pipelines in under a week. Their AI-powered error recovery alone saved us thousands in downtime.",
    name: "Marcus Rivera",
    role: "CTO, Finova",
    initials: "MR",
  },
  {
    text: "Best automation platform we've used. The real-time analytics give us visibility we never had before. Customer support is world-class.",
    name: "Priya Sharma",
    role: "Head of Data, Zenith Labs",
    initials: "PS",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-wrapper"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">Testimonials</p>
          <h2 id="testimonials-title" className="section-title">
            Trusted by data teams{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            See why hundreds of engineering teams rely on NexusAI for their
            critical data infrastructure.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="testimonial-card"
              id={`testimonial-${i}`}
            >
              <blockquote className="testimonial-text">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div className="testimonial-info">
                  <cite className="testimonial-name">{t.name}</cite>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
