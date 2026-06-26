"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { FEATURES } from "@/app/lib/features-data";

const MOBILE_BREAKPOINT = 768;

/**
 * FeaturesSection — Feature 2
 *
 * Bento Grid on desktop → Accordion on mobile.
 *
 * Context Lock Constraint:
 * - Tracks the active/hovered bento node index.
 * - On resize past mobile breakpoint, transfers that index to the
 *   accordion state so the corresponding panel opens smoothly.
 *
 * Zero-dependency: All transitions use native CSS, no animation libraries.
 */
export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const hoveredIndex = useRef<number | null>(null);

  // Check viewport on mount and resize
  useEffect(() => {
    const checkViewport = () => {
      const nowMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      const wasMobile = isMobile;

      if (!wasMobile && nowMobile) {
        // Transitioning to mobile: transfer hover context
        const transferIndex = hoveredIndex.current ?? activeIndex;
        if (transferIndex !== null) {
          setActiveIndex(transferIndex);
        }
      }

      setIsMobile(nowMobile);
    };

    // Initial check
    checkViewport();

    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [isMobile, activeIndex]);

  const handleBentoHover = useCallback((index: number) => {
    hoveredIndex.current = index;
    setActiveIndex(index);
  }, []);

  const handleBentoLeave = useCallback(() => {
    hoveredIndex.current = null;
    setActiveIndex(null);
  }, []);

  const handleAccordionToggle = useCallback(
    (index: number) => {
      setActiveIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  return (
    <section
      id="features"
      className="section-wrapper"
      aria-labelledby="features-title"
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">Features</p>
          <h2 id="features-title" className="section-title">
            Everything you need to{" "}
            <span className="gradient-text">automate intelligently</span>
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            From ingestion to insight, our platform handles every step of your
            data journey with precision.
          </p>
        </div>

        {/* Desktop: Bento Grid */}
        {!isMobile && (
          <div className="bento-grid" role="list">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className={`bento-item ${feature.large ? "large" : ""} ${
                  activeIndex === feature.id ? "active" : ""
                }`}
                onMouseEnter={() => handleBentoHover(feature.id)}
                onMouseLeave={handleBentoLeave}
                role="listitem"
                tabIndex={0}
                onFocus={() => handleBentoHover(feature.id)}
                onBlur={handleBentoLeave}
                id={`feature-bento-${feature.id}`}
              >
                <div className="icon-wrapper" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.icon}
                    alt=""
                    width={22}
                    height={22}
                    loading="lazy"
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Mobile: Accordion */}
        {isMobile && (
          <div className="accordion-wrapper" role="list">
            {FEATURES.map((feature) => {
              const isOpen = activeIndex === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`accordion-item ${isOpen ? "active" : ""}`}
                  role="listitem"
                  id={`feature-accordion-${feature.id}`}
                >
                  <button
                    className="accordion-trigger"
                    onClick={() => handleAccordionToggle(feature.id)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${feature.id}`}
                  >
                    <span className="trigger-left">
                      <span className="icon-wrapper" aria-hidden="true">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={feature.icon}
                          alt=""
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      </span>
                      {feature.title}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/chevron-down.svg"
                      alt=""
                      className="accordion-chevron"
                      width={20}
                      height={20}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className="accordion-panel"
                    id={`accordion-panel-${feature.id}`}
                    role="region"
                    aria-labelledby={`accordion-trigger-${feature.id}`}
                  >
                    <div className="accordion-panel-content">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
