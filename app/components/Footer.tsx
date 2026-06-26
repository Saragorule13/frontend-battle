export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="#"
              className="navbar-logo"
              style={{ marginBottom: "0.5rem" }}
              aria-label="Atlas Home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/cube-16-solid.svg"
                alt=""
                className="logo-icon"
                width={24}
                height={24}
                aria-hidden="true"
              />
              <span>Atlas</span>
            </a>
            <p>
              Intelligent data automation that scales with your business.
              From ingestion to insight, powered by AI.
            </p>
          </div>

          <nav className="footer-column" aria-label="Product links">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Company links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Legal links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Atlas. All rights reserved.</span>
          <span>Built with precision</span>
        </div>
      </div>
    </footer>
  );
}
