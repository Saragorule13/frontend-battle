export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F1F6F4] px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
      id="contact"
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 0%, rgba(255,200,1,.22), transparent 38%),
            radial-gradient(circle at 100% 100%, rgba(17,76,90,.08), transparent 40%)
          `,
        }}
      />

      {/* Floating Blur */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#FFC801]/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#114C5A]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-[#D7E3DE] bg-white px-8 py-20 shadow-[0_40px_120px_rgba(16,24,32,.08)] sm:px-16">

        {/* Badge */}

        <div className="flex justify-center">
          <div className="rounded-full border border-[#FFC801]/30 bg-[#FFC801]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#114C5A]">
            Enterprise AI Platform
          </div>
        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-10 max-w-4xl text-center text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#172B36] sm:text-7xl">
          Build AI that
          <br />
          works while you sleep.
        </h2>

        {/* Subtitle */}

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-[#5D727C]">
          Design intelligent workflows, automate repetitive operations,
          and deploy enterprise AI agents that scale with your business.
        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <a
            href="#pricing"
            className="group inline-flex items-center gap-3 rounded-full bg-[#172B36] px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#114C5A] hover:shadow-xl"
          >
            Start Free Trial

            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <a
            href="#demo"
            className="rounded-full border border-[#172B36]/10 bg-white px-9 py-4 text-base font-semibold text-[#172B36] transition-all duration-300 hover:-translate-y-1 hover:border-[#114C5A]/20 hover:bg-[#F7FAF8]"
          >
            Book a Demo
          </a>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[#6D8088]">

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            No credit card required
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FFC801]" />
            14-day free trial
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#114C5A]" />
            Cancel anytime
          </span>

        </div>

      </div>
    </section>
  );
}