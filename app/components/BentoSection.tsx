"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

const INTER = '"Inter", system-ui, -apple-system, sans-serif';
const MOBILE_BREAKPOINT = 768;

// ─── Illustrations ────────────────────────────────────────────────────────────

const VisualFlowBuilder = () => (
  <div className="relative min-h-[280px] w-full grow overflow-hidden mt-6 pb-8">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(rgba(241,246,244,0.08) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <div className="relative flex flex-col justify-between h-full px-8 py-6 space-y-6">
      {/* Node 1 */}
      <div
        className="flex items-center space-x-3 p-3 rounded-xl max-w-[260px] shadow-lg"
        style={{
          background: "var(--color-bg-primary)",
          border: "1px solid var(--color-border)",
          fontFamily: INTER,
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--color-text-primary)", fontFamily: INTER }}>Source: Webhook Ingest</p>
          <p className="text-[10px]" style={{ color: "var(--color-text-muted)", fontFamily: INTER }}>Active • 240 req/min</p>
        </div>
      </div>

      {/* Connector */}
      <div className="absolute left-[44px] top-[58px] w-[2px] h-[52px]" style={{ background: "var(--color-border)" }} />

      {/* Node 2 */}
      <div
        className="flex items-center space-x-3 p-3 rounded-xl max-w-[260px] ml-6 shadow-lg"
        style={{
          background: "var(--color-bg-primary)",
          border: "1px solid rgba(255,200,1,0.3)",
          fontFamily: INTER,
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(255,200,1,0.12)", border: "1px solid rgba(255,200,1,0.25)", color: "#FFC801" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--color-text-primary)", fontFamily: INTER }}>AI Cognitive Agent</p>
          <p className="text-[10px] font-medium" style={{ color: "#FFC801", fontFamily: INTER }}>Parsing Document • 99.4% Acc</p>
        </div>
      </div>

      {/* Connector */}
      <div className="absolute left-[68px] top-[152px] w-[2px] h-[52px]" style={{ background: "var(--color-border)" }} />

      {/* Node 3 */}
      <div
        className="flex items-center space-x-3 p-3 rounded-xl max-w-[260px] ml-12 shadow-lg"
        style={{
          background: "var(--color-bg-primary)",
          border: "1px solid var(--color-border)",
          fontFamily: INTER,
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(255,153,50,0.12)", border: "1px solid rgba(255,153,50,0.25)", color: "#FF9932" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--color-text-primary)", fontFamily: INTER }}>Storage Destination</p>
          <p className="text-[10px]" style={{ color: "var(--color-text-muted)", fontFamily: INTER }}>Synced to PostgreSQL</p>
        </div>
      </div>
    </div>
  </div>
);

const PerformanceTelemetry = () => (
  <div className="flex flex-1 items-center justify-center px-8 py-4 sm:px-10 lg:pb-4 relative overflow-hidden mt-4">
    <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 100" fill="none">
      {/* Grid lines */}
      <line x1="0" y1="20" x2="300" y2="20" stroke="var(--color-border)" strokeDasharray="3 3" />
      <line x1="0" y1="50" x2="300" y2="50" stroke="var(--color-border)" strokeDasharray="3 3" />
      <line x1="0" y1="80" x2="300" y2="80" stroke="var(--color-border)" strokeDasharray="3 3" />
      {/* Area fill — solid low-opacity, no gradient */}
      <path
        d="M0,80 Q50,75 80,45 T160,55 T220,20 T300,15 L300,100 L0,100 Z"
        fill="#FFC801"
        fillOpacity="0.06"
      />
      {/* Line — solid color */}
      <path
        d="M0,80 Q50,75 80,45 T160,55 T220,20 T300,15"
        stroke="#FFC801"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Live dots */}
      <circle cx="220" cy="20" r="3" fill="#FFC801" />
      <circle cx="300" cy="15" r="3" fill="#FFC801" />
    </svg>
    <div
      className="absolute right-8 top-2 rounded-md px-2 py-0.5"
      style={{
        background: "rgba(255,200,1,0.08)",
        border: "1px solid rgba(255,200,1,0.2)",
        fontSize: "10px",
        fontWeight: 700,
        color: "#FFC801",
        fontFamily: INTER,
      }}
    >
      Latency: 14ms
    </div>
  </div>
);

const SecurityGovernance = () => (
  <div className="flex flex-1 items-center justify-center px-8 py-6 sm:px-10 lg:pb-4 relative overflow-hidden mt-2">
    <div className="relative flex items-center justify-center">
      <div className="absolute w-28 h-28 rounded-full" style={{ border: "1px solid var(--color-border)" }} />
      <div
        className="absolute w-20 h-20 rounded-full animate-spin [animation-duration:14s]"
        style={{ border: "1px dashed rgba(255,200,1,0.2)" }}
      />
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center"
        style={{
          background: "var(--color-bg-primary)",
          border: "1px solid rgba(255,200,1,0.25)",
          color: "#FFC801",
        }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    </div>
    <div
      className="absolute left-6 top-3 rounded-md px-2 py-0.5"
      style={{
        background: "rgba(16,185,129,0.08)",
        border: "1px solid rgba(16,185,129,0.2)",
        fontSize: "10px",
        fontWeight: 600,
        color: "#10B981",
        fontFamily: INTER,
      }}
    >
      AES-256
    </div>
    <div
      className="absolute right-6 bottom-3 rounded-md px-2 py-0.5"
      style={{
        background: "rgba(255,153,50,0.08)",
        border: "1px solid rgba(255,153,50,0.2)",
        fontSize: "10px",
        fontWeight: 600,
        color: "#FF9932",
        fontFamily: INTER,
      }}
    >
      SOC 2 Type II
    </div>
  </div>
);

const DeveloperHub = () => (
  <div className="relative min-h-[280px] w-full grow overflow-hidden mt-6 pb-8">
    <div
      className="absolute inset-x-8 top-4 bottom-0 overflow-hidden rounded-t-xl flex flex-col"
      style={{
        background: "var(--color-bg-primary)",
        border: "1px solid var(--color-border)",
        borderBottom: "none",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.5)" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.5)" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,200,64,0.5)" }} />
        </div>
        <div style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--color-text-muted)" }}>
          nexus-agent.ts
        </div>
        <div className="w-8" />
      </div>

      {/* Code */}
      <div
        className="p-4 flex-1 overflow-y-auto select-none"
        style={{ fontFamily: "monospace", fontSize: "12px", lineHeight: "1.75", color: "var(--color-text-secondary)" }}
      >
        <p><span style={{ color: "#FF9932" }}>import</span>{" {"} <span style={{ color: "#FFC801" }}>Agent</span> {"}"} <span style={{ color: "#FF9932" }}>from</span> <span style={{ color: "#10B981" }}>"@nexusai/core"</span>;</p>
        <br />
        <p style={{ color: "var(--color-text-muted)" }}>{"// Initialize AI workflow"}</p>
        <p><span style={{ color: "#FF9932" }}>const</span> agent = <span style={{ color: "#FF9932" }}>new</span> <span style={{ color: "#FFC801" }}>Agent</span>{"({"}</p>
        <div className="pl-4">
          <p>role: <span style={{ color: "#10B981" }}>"DataOrchestrator"</span>,</p>
          <p>model: <span style={{ color: "#10B981" }}>"nexus-cognitive-v2"</span>,</p>
          <p>security: <span style={{ color: "#FF9932" }}>true</span></p>
        </div>
        <p>{"});"}</p>
        <br />
        <p><span style={{ color: "#FF9932" }}>await</span> agent.execute{"({"}</p>
        <div className="pl-4">
          <p>trigger: <span style={{ color: "#10B981" }}>"webhook.received"</span>,</p>
          <p>action: <span style={{ color: "#10B981" }}>"extractAndFormat"</span></p>
        </div>
        <p>{"});"}</p>
      </div>
    </div>
  </div>
);

// ─── Bento data ───────────────────────────────────────────────────────────────

const BENTO_DATA = [
  {
    id: 1,
    subtitle: "Visual Flow Builder",
    title: "Intelligent Workflows",
    description: "Design and orchestrate multi-agent workflows visually. Connect data sources, cognitive processing nodes, and destinations with auto-healing pipelines.",
    Component: VisualFlowBuilder,
    gridClass: "relative lg:row-span-2 group",
    bgClass: "lg:rounded-l-4xl",
    contentClass: "lg:rounded-l-[calc(2rem+1px)]",
  },
  {
    id: 2,
    subtitle: "Fast Execution",
    title: "Sub-millisecond Routing",
    description: "Deploy workflows that route and execute data with parallel processing and model routing.",
    Component: PerformanceTelemetry,
    gridClass: "relative max-lg:row-start-1 group",
    bgClass: "max-lg:rounded-t-4xl",
    contentClass: "max-lg:rounded-t-[calc(2rem+1px)]",
  },
  {
    id: 3,
    subtitle: "Enterprise Ready",
    title: "Data Governance",
    description: "Security at the core. Keep data isolated with enterprise-grade encryption, automated PII sanitization, and access audits.",
    Component: SecurityGovernance,
    gridClass: "relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group",
    bgClass: "",
    contentClass: "",
  },
  {
    id: 4,
    subtitle: "API-First Infrastructure",
    title: "Developer Agent Hub",
    description: "Integrate cognitive execution directly into your existing codebase. Fully-typed TypeScript, Python, and Go SDKs ready to deploy.",
    Component: DeveloperHub,
    gridClass: "relative lg:row-span-2 group",
    bgClass: "max-lg:rounded-b-4xl lg:rounded-r-4xl",
    contentClass: "max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]",
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function BentoSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const hoveredIndex = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkViewport = () => {
      const nowMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      const wasMobile = isMobile;
      if (!wasMobile && nowMobile) {
        const transferIndex = hoveredIndex.current ?? activeIndex;
        if (transferIndex !== null) setActiveIndex(transferIndex);
      } else if (wasMobile && !nowMobile) {
        setActiveIndex(null);
      }
      setIsMobile(nowMobile);
    };
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

  const handleAccordionToggle = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      id="platform-core"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-bg-primary)", fontFamily: INTER }}
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-primary, #FFC801)",
            fontFamily: INTER,
            marginBottom: "12px",
          }}>
            Intelligent Platform
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--color-text-primary)",
            fontFamily: INTER,
            margin: "0 auto 16px",
            maxWidth: "560px",
          }}>
            The power of AI,{" "}
            <span style={{ color: "#FFC801" }}>built for scale</span>
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--color-text-secondary)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.65,
            fontFamily: INTER,
          }}>
            NexusAI provides a comprehensive suite of cognitive capabilities to automate, optimize, and secure your workflows.
          </p>
        </div>

        {/* ── Desktop: Bento Grid ── */}
        {(!mounted || !isMobile) && (
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {BENTO_DATA.map((item) => (
              <div
                key={item.id}
                className={item.gridClass}
                style={{ transition: "transform 0.2s ease" }}
                onMouseEnter={() => {
                  handleBentoHover(item.id);
                }}
                onMouseLeave={handleBentoLeave}
                onFocus={() => handleBentoHover(item.id)}
                onBlur={handleBentoLeave}
                tabIndex={0}
              >
                <div
                  className={`absolute inset-px rounded-lg transition-colors duration-300 ${item.bgClass}`}
                  style={{
                    background: "var(--color-bg-secondary, var(--color-bg-card))",
                    border: "1px solid var(--color-border)",
                  }}
                />
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg,8px)+1px)] ${item.contentClass}`}
                  style={{ fontFamily: INTER }}
                >
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <span style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#FFC801",
                      fontFamily: INTER,
                    }}>
                      {item.subtitle}
                    </span>
                    <p style={{
                      marginTop: "8px",
                      fontSize: "18px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--color-text-primary)",
                      fontFamily: INTER,
                    }}>
                      {item.title}
                    </p>
                    <p style={{
                      marginTop: "8px",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      color: "var(--color-text-muted, var(--color-text-secondary))",
                      fontFamily: INTER,
                    }}>
                      {item.description}
                    </p>
                  </div>
                  <item.Component />
                </div>
                <div className={`pointer-events-none absolute inset-px rounded-lg outline outline-white/5 ${item.bgClass}`} />
              </div>
            ))}
          </div>
        )}

        {/* ── Mobile: Accordion ── */}
        {mounted && isMobile && (
          <div className="flex flex-col space-y-3">
            {BENTO_DATA.map((item) => {
              const isOpen = activeIndex === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--color-bg-secondary, var(--color-bg-card))",
                    border: `1px solid ${isOpen ? "rgba(255,200,1,0.3)" : "var(--color-border)"}`,
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    onClick={() => handleAccordionToggle(item.id)}
                    aria-expanded={isOpen}
                    style={{ fontFamily: INTER }}
                  >
                    <div>
                      <span style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#FFC801",
                        fontFamily: INTER,
                        display: "block",
                        marginBottom: "4px",
                      }}>
                        {item.subtitle}
                      </span>
                      <span style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-primary)",
                        fontFamily: INTER,
                      }}>
                        {item.title}
                      </span>
                    </div>
                    <svg
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "var(--color-text-muted, var(--color-text-secondary))",
                        transition: "transform 0.25s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                        marginLeft: "12px",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div style={{
                    maxHeight: isOpen ? "900px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, opacity 0.25s ease",
                  }}>
                    <div className="px-6 pb-6">
                      <p style={{
                        fontSize: "13px",
                        lineHeight: 1.65,
                        color: "var(--color-text-muted, var(--color-text-secondary))",
                        fontFamily: INTER,
                        marginBottom: "20px",
                      }}>
                        {item.description}
                      </p>
                      <div style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        background: "var(--color-bg-primary)",
                        border: "1px solid var(--color-border)",
                      }}>
                        <item.Component />
                      </div>
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