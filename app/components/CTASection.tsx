export default function CTASection() {
  return (
    <section
      id="contact"
      className="flex justify-center px-8 py-32"
      style={{
        background: "var(--color-bg-primary)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          borderRadius: "32px",
          border: "1px solid rgba(255,255,255,.08)",
          background: "rgba(255,255,255,.025)",
          padding: "72px",
          textAlign: "center",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Small label */}

        <p
          style={{
            color: "#FFC801",
            fontSize: "12px",
            letterSpacing: ".25em",
            textTransform: "uppercase",
            marginBottom: "28px",
            fontWeight: 600,
          }}
        >
          Enterprise AI Platform
        </p>

        {/* Heading */}

        <h2
          style={{
            fontSize: "clamp(3rem,5vw,5rem)",
            fontWeight: 700,
            lineHeight: ".95",
            letterSpacing: "-.06em",
            color: "white",
            marginBottom: "18px",
          }}
        >
          Ready to build
          <br />
          intelligent workflows?
        </h2>

        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            color: "rgba(255,255,255,.55)",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Deploy AI agents, automate repetitive tasks and
          orchestrate enterprise workflows in minutes.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "48px",
          }}
        >
          <a
            href="#pricing"
            style={{
              background: "#FFC801",
              color: "#172B36",
              padding: "16px 36px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Start Building
          </a>

          <a
            href="#demo"
            style={{
              border: "1px solid rgba(255,255,255,.1)",
              color: "white",
              padding: "16px 36px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "15px",
            }}
          >
            Book Demo
          </a>
        </div>

        {/* Bottom text */}

        <p
          style={{
            marginTop: "42px",
            color: "rgba(255,255,255,.35)",
            fontSize: "14px",
          }}
        >
          14-day free trial • No credit card • Cancel anytime
        </p>
      </div>
    </section>
  );
}