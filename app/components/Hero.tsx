"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section
      className="hero-optimus"
      aria-labelledby="hero-title"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--color-bg-primary)", // Matches Oceanic Noir
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* ── Nav strip (mirrors gentlerain's top bar) ── */}
      <nav
  aria-label="Main navigation"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "28px 48px",

    zIndex: 100,

    background: "transparent",

    pointerEvents: "auto",
  }}
>
        <span style={{ color: "var(--color-text-primary)", fontWeight: 600, fontSize: "14px", letterSpacing: "0.02em" }}>
          atlas.
        </span>
        <div style={{ display: "flex", gap: "36px" }}>
          {["Product", "Partners", "Concept", "For Business"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{ color: "var(--color-text-secondary)", fontSize: "13px", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          style={{
            color: "var(--color-text-primary)",
            fontSize: "13px",
            textDecoration: "none",
            border: "1px solid var(--color-border)",
            borderRadius: "999px",
            padding: "7px 18px",
          }}
        >
          Try now
        </a>
      </nav>

     {/* Hero Layer */}
<div
  style={{
    position: "relative",
    width: "100%",
    height: "calc(100vh - 92px)",
    overflow: "hidden",
  }}
>
  {/* Background Word */}
  <h1
    id="hero-title"
    style={{
      position: "absolute",
      top: "32px",
      left: "50%",
      transform: "translateX(-50%)",

      margin: 0,

      fontFamily:
        '"Clash Display","General Sans","Satoshi",sans-serif',

      fontSize: "clamp(16rem,26vw,34rem)",

      fontWeight: 900,

      lineHeight: ".82",

      letterSpacing: "-0.085em",

      whiteSpace: "nowrap",

      color: "rgba(255,255,255,.05)",

      pointerEvents: "none",
      userSelect: "none",

      zIndex: 0,
    }}
  >
    atlas
  </h1>

{/* Bottom Hero Content */}
<div
  style={{
    position: "absolute",
    left: "48px",
    right: "48px",
    bottom: "36px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",

    zIndex: 20,
  }}
>
  {/* LEFT */}
  <p
    style={{
      margin: 0,
      maxWidth: "760px",

      fontSize: "clamp(34px,2.4vw,52px)",

      fontWeight: 700,

      lineHeight: 1.05,

      letterSpacing: "-0.03em",

      color: "var(--color-text-primary)",
    }}
  >
    Automate complex workflows through
    <br />
    intelligent AI agents built for
    <br />
    enterprise-scale operations.
  </p>

  {/* RIGHT */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "18px",
      flexShrink: 0,
    }}
  >
    <a
      href="#pricing"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",

        padding: "15px 28px",

        background: "var(--color-primary)",
        color: "var(--color-bg-primary)",

        borderRadius: "999px",

        textDecoration: "none",

        fontSize: "15px",
        fontWeight: 600,

        transition: "all .25s ease",
      }}
    >
      Start Building

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>

    <a
      href="#demo"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "15px 28px",

        border: "1px solid var(--color-border)",

        color: "var(--color-text-primary)",

        borderRadius: "999px",

        textDecoration: "none",

        fontSize: "15px",
        fontWeight: 500,

        transition: "all .25s ease",
      }}
    >
      Live Demo
    </a>
  </div>
</div>
</div>
    </section>
  );
}