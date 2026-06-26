"use client";

import { useState, useCallback } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" aria-label="NexusAI Home">
            <span className="logo-text">NexusAI</span>
            <span className="logo-tm">TM</span>
          </a>

          <ul className="navbar-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#testimonials">Developers</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>

          <div className="navbar-cta">
            <a href="#" className="nav-signin" id="nav-signin">
              Sign in
            </a>
            <a href="#pricing" className="nav-start-btn" id="nav-cta">
              Start creating
            </a>
            <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <button
          className="mobile-nav-close"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a href="#testimonials" onClick={closeMenu}>Developers</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#pricing" className="nav-start-btn" onClick={closeMenu}>
          Start creating
        </a>
      </div>
    </>
  );
}
