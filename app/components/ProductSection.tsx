"use client";

import React from "react";

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-logos-container">
        <div className="product-logos-track">
          {/* Group 1 */}
          <div className="product-logos-group">
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              <span>Vercel</span>
            </div>
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
              </svg>
              <span>Cursor</span>
            </div>
            <div className="logo-item"><span>OSCAR</span></div>
            <div className="logo-item"><span>OpenAI</span></div>
            <div className="logo-item"><span>Coinbase</span></div>
            <div className="logo-item"><span>Cash App</span></div>
            <div className="logo-item"><span>BOOM</span></div>
            <div className="logo-item"><span>Ramp ↗</span></div>
          </div>
          {/* Group 2 */}
          <div className="product-logos-group">
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              <span>Vercel</span>
            </div>
            <div className="logo-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
              </svg>
              <span>Cursor</span>
            </div>
            <div className="logo-item"><span>OSCAR</span></div>
            <div className="logo-item"><span>OpenAI</span></div>
            <div className="logo-item"><span>Coinbase</span></div>
            <div className="logo-item"><span>Cash App</span></div>
            <div className="logo-item"><span>BOOM</span></div>
            <div className="logo-item"><span>Ramp ↗</span></div>
          </div>
        </div>
      </div>

      <div className="container">

        {/* Heading */}
        <div className="product-heading-wrapper">
          <h2 className="product-heading">
            <span className="text-white">A new species of product tool.</span>{" "}
            <span className="text-gray">
              Purpose-built for modern teams with AI workflows at its core, Atlas sets a new standard for planning and building products.
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="product-grid">
          {/* Card 1 */}
          <div className="product-card">
            <div className="product-card-top">
              <span className="product-fig">FIG X.2</span>
              <div className="product-icon-wrapper">
                {/* Layers Wireframe */}
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="wireframe-icon">
                  <path d="M50 20 L80 35 L50 50 L20 35 Z" />
                  <path d="M20 45 L50 60 L80 45" />
                  <path d="M20 55 L50 70 L80 55" />
                  <path d="M20 65 L50 80 L80 65" />
                  <ellipse cx="50" cy="35" rx="15" ry="7" />
                </svg>
              </div>
            </div>
            <div className="product-card-bottom">
              <h3>Built for purpose</h3>
              <p>NexusAI is shaped by the practices and principles of world-class product teams.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="product-card">
            <div className="product-card-top">
              <span className="product-fig">FIG X.3</span>
              <div className="product-icon-wrapper">
                {/* Cubes Wireframe */}
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="wireframe-icon">
                  {/* Top cube */}
                  <path d="M50 15 L65 22 L50 29 L35 22 Z" />
                  <path d="M35 22 L35 40 L50 47 L50 29" />
                  <path d="M50 29 L50 47 L65 40 L65 22" />
                  {/* Left cube */}
                  <path d="M30 40 L45 47 L30 54 L15 47 Z" />
                  <path d="M15 47 L15 65 L30 72 L30 54" />
                  <path d="M30 54 L30 72 L45 65 L45 47" />
                  {/* Right cube */}
                  <path d="M70 45 L85 52 L70 59 L55 52 Z" />
                  <path d="M55 52 L55 70 L70 77 L70 59" />
                  <path d="M70 59 L70 77 L85 70 L85 52" />
                  {/* Bottom cube */}
                  <path d="M55 75 L70 82 L55 89 L40 82 Z" />
                  <path d="M40 82 L40 100 L55 107 L55 89" />
                  <path d="M55 89 L55 107 L70 100 L70 82" />
                </svg>
              </div>
            </div>
            <div className="product-card-bottom">
              <h3>Powered by AI agents</h3>
              <p>Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="product-card">
            <div className="product-card-top">
              <span className="product-fig">FIG X.4</span>
              <div className="product-icon-wrapper">
                {/* Stairs Wireframe */}
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="wireframe-icon">
                  <path d="M20 70 L80 40 L80 80 L20 110 Z" />
                  <path d="M25 65 L80 35 L80 40 L25 70 Z" />
                  <path d="M30 60 L80 30 L80 35 L30 65 Z" />
                  <path d="M35 55 L80 25 L80 30 L35 60 Z" />
                  <path d="M40 50 L80 20 L80 25 L40 55 Z" />
                  <path d="M45 45 L80 15 L80 20 L45 50 Z" />
                </svg>
              </div>
            </div>
            <div className="product-card-bottom">
              <h3>Designed for speed</h3>
              <p>Reduces noise and restores momentum to help teams ship with high velocity and focus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
