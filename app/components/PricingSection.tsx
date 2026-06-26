"use client";

import { useRef, useCallback, useState } from "react";
import {
  PRICING_MATRIX,
  computePrice,
  formatPrice,
  TIER_ORDER,
  CURRENCIES,
  CURRENCY_LABELS,
  type Currency,
  type BillingCycle,
  type Tier,
} from "@/app/lib/pricing-matrix";

/**
 * PricingSection — Feature 1
 *
 * Architecture for state isolation:
 * - Currency & billing state are stored in refs, NOT React state,
 *   to avoid ANY re-render of this component or its parent.
 * - Price updates are performed by directly mutating DOM text nodes
 *   via refs stored per tier.
 * - Only the currency dropdown open/close uses minimal local state
 *   (isolated to this component only).
 */
export default function PricingSection() {
  // Refs for direct DOM text node manipulation
  const priceRefs = useRef<Record<Tier, HTMLSpanElement | null>>({
    starter: null,
    professional: null,
    enterprise: null,
  });

  const periodRefs = useRef<Record<Tier, HTMLSpanElement | null>>({
    starter: null,
    professional: null,
    enterprise: null,
  });

  // Current values stored in refs — no re-render on change
  const currentCurrency = useRef<Currency>("USD");
  const currentBilling = useRef<BillingCycle>("monthly");

  // Only state: dropdown open (minimal, scoped to this component)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Refs for custom billing switch
  const monthlyLabelRef = useRef<HTMLSpanElement>(null);
  const yearlyLabelRef = useRef<HTMLSpanElement>(null);
  const switchTrackRef = useRef<HTMLDivElement>(null);
  const switchThumbRef = useRef<HTMLDivElement>(null);
  const currencyBtnRef = useRef<HTMLButtonElement>(null);

  /**
   * Flush all price text nodes — isolated DOM update, no React re-render.
   */
  const flushPrices = useCallback(() => {
    const currency = currentCurrency.current;
    const billing = currentBilling.current;

    for (const tier of TIER_ORDER) {
      const priceEl = priceRefs.current[tier];
      const periodEl = periodRefs.current[tier];
      if (priceEl) {
        if (tier === "enterprise") {
          priceEl.textContent = "Custom";
        } else {
          const amount = computePrice(tier, currency, billing);
          priceEl.textContent = formatPrice(amount, currency);
        }
      }
      if (periodEl) {
        if (tier === "enterprise") {
          periodEl.textContent = "";
        } else {
          periodEl.textContent = billing === "monthly" ? "/month" : "/mo";
        }
      }
    }
  }, []);

  /**
   * Toggle billing cycle — updates DOM elements directly.
   */
  const handleBillingChange = useCallback(
    (cycle: BillingCycle) => {
      currentBilling.current = cycle;

      if (monthlyLabelRef.current && yearlyLabelRef.current && switchThumbRef.current && switchTrackRef.current) {
        if (cycle === "monthly") {
          monthlyLabelRef.current.style.color = "var(--color-text-primary)";
          monthlyLabelRef.current.style.fontWeight = "700";
          yearlyLabelRef.current.style.color = "var(--color-text-muted)";
          yearlyLabelRef.current.style.fontWeight = "600";
          switchThumbRef.current.style.transform = "translateX(0px)";
          switchTrackRef.current.setAttribute("aria-checked", "false");
        } else {
          yearlyLabelRef.current.style.color = "var(--color-text-primary)";
          yearlyLabelRef.current.style.fontWeight = "700";
          monthlyLabelRef.current.style.color = "var(--color-text-muted)";
          monthlyLabelRef.current.style.fontWeight = "600";
          switchThumbRef.current.style.transform = "translateX(20px)";
          switchTrackRef.current.setAttribute("aria-checked", "true");
        }
      }

      flushPrices();
    },
    [flushPrices]
  );

  const toggleBillingCycle = useCallback(() => {
    const nextCycle = currentBilling.current === "monthly" ? "annual" : "monthly";
    handleBillingChange(nextCycle);
  }, [handleBillingChange]);

  /**
   * Change currency — updates DOM text nodes only.
   */
  const handleCurrencyChange = useCallback(
    (currency: Currency) => {
      currentCurrency.current = currency;

      // Update button text directly
      if (currencyBtnRef.current) {
        const label = currencyBtnRef.current.querySelector(".currency-label");
        if (label) {
          label.textContent = CURRENCY_LABELS[currency];
        }
      }

      setDropdownOpen(false);
      flushPrices();
    },
    [flushPrices]
  );

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  // Initial values for SSR
  const initialCurrency: Currency = "USD";
  const initialBilling: BillingCycle = "monthly";

  return (
    <section
      id="pricing"
      className="section-wrapper"
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <h2
            id="pricing-title"
            className="section-title"
            style={{
              maxWidth: "700px",
              margin: "0 auto 1.25rem",
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              lineHeight: 1.2,
              fontFamily: "var(--font-body)",
            }}
          >
            Pricing designed for effortless collaboration.
          </h2>
          <p
            className="section-subtitle"
            style={{
              margin: "0 auto 3rem",
              color: "var(--color-text-muted)",
            }}
          >
            Pay for your core team. Invite unlimited free guests.
          </p>

          {/* Controls Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {/* Custom Pill Toggle Switch */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-muted)",
                userSelect: "none",
              }}
            >
              <span
                ref={monthlyLabelRef}
                style={{
                  cursor: "pointer",
                  color: "var(--color-text-primary)",
                  fontWeight: "700",
                  transition: "color var(--transition-micro)",
                }}
                onClick={() => handleBillingChange("monthly")}
                id="toggle-monthly"
              >
                Monthly
              </span>
              <div
                ref={switchTrackRef}
                onClick={toggleBillingCycle}
                role="checkbox"
                aria-checked={false}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    toggleBillingCycle();
                  }
                }}
                style={{
                  width: "44px",
                  height: "24px",
                  backgroundColor: "rgba(241, 246, 244, 0.08)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "999px",
                  position: "relative",
                  cursor: "pointer",
                  display: "inline-block",
                }}
              >
                <div
                  ref={switchThumbRef}
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "3px",
                    left: "3px",
                    transition: "transform var(--transition-micro)",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
                  }}
                />
              </div>
              <span
                ref={yearlyLabelRef}
                style={{
                  cursor: "pointer",
                  color: "var(--color-text-muted)",
                  fontWeight: "600",
                  transition: "color var(--transition-micro)",
                }}
                onClick={() => handleBillingChange("annual")}
                id="toggle-annual"
              >
                Yearly
              </span>
              <span className="pricing-toggle-discount-badge">
                18% Discount
              </span>
            </div>

            {/* Currency Dropdown */}
            <div
              className={`currency-dropdown ${dropdownOpen ? "open" : ""}`}
            >
              <button
                ref={currencyBtnRef}
                className="currency-dropdown-btn"
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                id="currency-selector"
              >
                <span className="currency-label">
                  {CURRENCY_LABELS[initialCurrency]}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/chevron-down.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
              </button>
              <div
                className="currency-dropdown-menu"
                role="listbox"
                aria-label="Select currency"
              >
                {CURRENCIES.map((c) => (
                  <button
                    key={c}
                    className={`currency-dropdown-item ${
                      c === initialCurrency ? "active" : ""
                    }`}
                    onClick={() => handleCurrencyChange(c)}
                    role="option"
                    aria-selected={c === initialCurrency}
                  >
                    {CURRENCY_LABELS[c]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {TIER_ORDER.map((tier) => {
            const config = PRICING_MATRIX.tiers[tier];
            const initialAmount = computePrice(
              tier,
              initialCurrency,
              initialBilling
            );

            const isEnterprise = tier === "enterprise";

            return (
              <article
                key={tier}
                className={`pricing-card ${
                  isEnterprise ? "premium-enterprise" : "premium-starter-pro"
                }`}
                id={`pricing-${tier}`}
              >
                {config.featured && (
                  <span className="card-popular-badge" aria-label="Most popular plan">
                    🔥 Most Popular
                  </span>
                )}

                {/* Plan Header */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      marginBottom: "0.25rem",
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {config.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {config.description}
                  </p>
                </div>

                {/* Price Display */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span
                      className="price-value"
                      ref={(el) => {
                        priceRefs.current[tier] = el;
                      }}
                      data-tier={tier}
                      aria-live="polite"
                      style={{
                        fontSize: isEnterprise ? "2.25rem" : "2.75rem",
                        fontWeight: 800,
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {isEnterprise ? "Custom" : formatPrice(initialAmount, initialCurrency)}
                    </span>
                    {!isEnterprise && (
                      <span
                        className="price-period"
                        ref={(el) => {
                          periodRefs.current[tier] = el;
                        }}
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text-muted)",
                          marginLeft: "0.125rem",
                        }}
                      >
                        /month
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      marginTop: "0.25rem",
                      fontWeight: 500,
                    }}
                  >
                    {config.priceSubtext}
                  </span>
                </div>

                {/* Meta Features Block (e.g. Guests & Storage) */}
                <div className="pricing-meta-list">
                  {config.topFeatures.map((feat, i) => {
                    const isStorage = feat.toLowerCase().includes("storage");
                    return (
                      <div key={i} className="pricing-meta-item">
                        {isStorage ? (
                          /* Cylinder / Storage SVG */
                          <svg
                            className="meta-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 22c5.523 0 10-2.239 10-5V7c0-2.761-4.477-5-10-5S2 4.239 2 7v10c0 2.761 4.477 5 10 5z" />
                            <path d="M22 7c0 2.761-4.477 5-10 5S2 9.761 2 7" />
                            <path d="M22 12c0 2.761-4.477 5-10 5S2 14.761 2 12" />
                          </svg>
                        ) : (
                          /* Globe SVG */
                          <svg
                            className="meta-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        )}
                        <span style={{ fontSize: "0.8125rem" }}>{feat}</span>
                        {isStorage && !feat.toLowerCase().includes("unlimited") && (
                          <span
                            className="info-trigger"
                            title="Total cloud storage allocated"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ width: "12" }}
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="16" x2="12" y2="12" />
                              <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pricing-divider" />

                {/* Features Header & List */}
                <div className="pricing-features-header">
                  {config.sectionHeader}
                </div>

                <ul className="feature-list" style={{ marginBottom: "2rem" }}>
                  {config.features.map((feat, i) => (
                    <li key={i}>
                      <span className="check" aria-hidden="true" style={{ color: "#A29BFE" }}>
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 6L4.5 8L9.5 3"
                            stroke="currentColor"
                            strokeWidth="2.0"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ fontSize: "0.8125rem" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#"
                  className={`btn-pricing-card ${isEnterprise ? "filled" : "outline"}`}
                  id={`cta-${tier}`}
                >
                  {config.cta}
                </a>

                {/* Under Button Label */}
                <span className="under-button-label">
                  {config.underButtonText}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
