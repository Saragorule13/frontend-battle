"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

const MOBILE_BREAKPOINT = 768;

const VisualFlowBuilder = () => (
  <div className="relative min-h-[280px] w-full grow overflow-hidden mt-6 pb-8">
    <div 
      className="absolute inset-0 opacity-20 pointer-events-none" 
      style={{
        backgroundImage: "radial-gradient(rgba(241, 246, 244, 0.15) 1px, transparent 1px)",
        backgroundSize: "16px 16px"
      }}
    />
    <div className="relative flex flex-col justify-between h-full px-8 py-6 space-y-6">
      <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-xl max-w-[260px] shadow-lg backdrop-blur-sm transform transition-all group-hover:border-white/15">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-text-primary)]">Source: Webhook Ingest</p>
          <p className="text-[10px] text-[var(--color-text-muted)]">Active • 240 req/min</p>
        </div>
      </div>
      <div className="absolute left-[44px] top-[58px] w-[2px] h-[52px]" style={{ background: "linear-gradient(to bottom, rgba(16, 185, 129, 0.4), rgba(255, 200, 1, 0.4))" }} />
      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-xl max-w-[260px] ml-6 shadow-[0_0_15px_rgba(255,200,1,0.1)] backdrop-blur-sm transform transition-all group-hover:border-yellow-500/50">
        <div className="w-8 h-8 rounded-lg bg-[#FFC801]/20 border border-[#FFC801]/30 flex items-center justify-center text-[#FFC801] animate-pulse">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-text-primary)]">AI Cognitive Agent</p>
          <p className="text-[10px] text-[#FFC801]">Parsing Document • 99.4% Acc</p>
        </div>
      </div>
      <div className="absolute left-[68px] top-[152px] w-[2px] h-[52px]" style={{ background: "linear-gradient(to bottom, rgba(255, 200, 1, 0.4), rgba(255, 153, 50, 0.4))" }} />
      <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-xl max-w-[260px] ml-12 shadow-lg backdrop-blur-sm transform transition-all group-hover:border-white/15">
        <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FF9932]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-text-primary)]">Storage Destination</p>
          <p className="text-[10px] text-[var(--color-text-muted)]">Synced to PostgreSQL</p>
        </div>
      </div>
    </div>
  </div>
);

const PerformanceTelemetry = () => (
  <div className="flex flex-1 items-center justify-center px-8 py-4 sm:px-10 lg:pb-4 relative overflow-hidden mt-4">
    <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 100" fill="none">
      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(241, 246, 244, 0.05)" strokeDasharray="3 3" />
      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(241, 246, 244, 0.05)" strokeDasharray="3 3" />
      <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(241, 246, 244, 0.05)" strokeDasharray="3 3" />
      <path d="M0,80 Q50,75 80,45 T160,55 T220,20 T300,15 L300,100 L0,100 Z" fill="url(#gradient-perf)" opacity="0.1" />
      <path d="M0,80 Q50,75 80,45 T160,55 T220,20 T300,15" stroke="url(#gradient-line)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="220" cy="20" r="4" fill="#FFC801" className="animate-ping" />
      <circle cx="220" cy="20" r="3" fill="#FFC801" />
      <circle cx="300" cy="15" r="4" fill="#FFC801" className="animate-ping" />
      <circle cx="300" cy="15" r="3" fill="#FFC801" />
      <defs>
        <linearGradient id="gradient-perf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFC801" />
          <stop offset="100%" stopColor="#172B36" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF9932" />
          <stop offset="50%" stopColor="#FFC801" />
          <stop offset="100%" stopColor="#FFD54F" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute right-8 top-2 bg-[#FFC801]/10 border border-[#FFC801]/20 rounded-md px-2 py-0.5 text-[10px] font-bold text-[#FFC801] shadow-lg backdrop-blur-sm">
      Latency: 14ms
    </div>
  </div>
);

const SecurityGovernance = () => (
  <div className="flex flex-1 items-center justify-center px-8 py-6 sm:px-10 lg:pb-4 relative overflow-hidden mt-2">
    <div className="relative flex items-center justify-center">
      <div className="absolute w-28 h-28 rounded-full border border-white/5 animate-pulse" />
      <div className="absolute w-20 h-20 rounded-full border border-[#FFC801]/10 animate-spin [animation-duration:12s]" />
      <div className="relative w-12 h-12 bg-gradient-to-b from-[#114C5A] to-[#172B36] border border-[#FFC801]/30 rounded-xl flex items-center justify-center text-[#FFC801] shadow-lg">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    </div>
    <div className="absolute left-6 top-3 bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-0.5 text-[10px] font-semibold text-emerald-400 shadow-sm backdrop-blur-sm">
      AES-256
    </div>
    <div className="absolute right-6 bottom-3 bg-[#FF9932]/10 border border-[#FF9932]/20 rounded-md px-2 py-0.5 text-[10px] font-semibold text-[#FF9932] shadow-sm backdrop-blur-sm">
      SOC 2 Type II
    </div>
  </div>
);

const DeveloperHub = () => (
  <div className="relative min-h-[280px] w-full grow overflow-hidden mt-6 pb-8">
    <div className="absolute inset-x-8 top-4 bottom-0 overflow-hidden rounded-t-xl bg-[#114C5A]/30 border-t border-x border-white/10 backdrop-blur-md shadow-2xl flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-[#172B36]/80 border-b border-white/5">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <div className="text-[10px] font-mono text-[var(--color-text-muted)]">nexus-agent.ts</div>
        <div className="w-8" />
      </div>
      <div className="p-4 font-mono text-xs text-[var(--color-text-secondary)] leading-relaxed flex-1 select-none overflow-y-auto">
        <p><span className="text-[#FF9932]">import</span> {"{"} <span className="text-[#FFC801]">Agent</span> {"}"} <span className="text-[#FF9932]">from</span> <span className="text-emerald-400">"@nexusai/core"</span>;</p>
        <br />
        <p className="text-[var(--color-text-muted)]">// Initialize AI workflow</p>
        <p><span className="text-[#FF9932]">const</span> agent = <span className="text-[#FF9932]">new</span> <span className="text-[#FFC801]">Agent</span>({"{"}</p>
        <div className="pl-4">
          <p>role: <span className="text-emerald-400">"DataOrchestrator"</span>,</p>
          <p>model: <span className="text-emerald-400">"nexus-cognitive-v2"</span>,</p>
          <p>security: <span className="text-[#FF9932]">true</span></p>
        </div>
        <p>{"}"});</p>
        <br />
        <p><span className="text-[#FF9932]">await</span> agent.execute({"{"}</p>
        <div className="pl-4">
          <p>trigger: <span className="text-emerald-400">"webhook.received"</span>,</p>
          <p>action: <span className="text-emerald-400">"extractAndFormat"</span></p>
        </div>
        <p>{"}"});</p>
      </div>
    </div>
  </div>
);

const BENTO_DATA = [
  {
    id: 1,
    subtitle: "Visual Flow Builder",
    title: "Intelligent Workflows",
    description: "Design and orchestrate multi-agent workflows visually. Connect data sources, cognitive processing nodes, and destinations with auto-healing pipelines.",
    Component: VisualFlowBuilder,
    gridClass: "relative lg:row-span-2 group hover:-translate-y-1 transition-all duration-300",
    bgClass: "lg:rounded-l-4xl",
    contentClass: "lg:rounded-l-[calc(2rem+1px)]",
  },
  {
    id: 2,
    subtitle: "Fast Execution",
    title: "Sub-millisecond Routing",
    description: "Deploy workflows that route and execute data with parallel processing and model routing.",
    Component: PerformanceTelemetry,
    gridClass: "relative max-lg:row-start-1 group hover:-translate-y-1 transition-all duration-300",
    bgClass: "max-lg:rounded-t-4xl",
    contentClass: "max-lg:rounded-t-[calc(2rem+1px)]",
  },
  {
    id: 3,
    subtitle: "Enterprise Ready",
    title: "Data Governance",
    description: "Security at the core. Keep data isolated with enterprise-grade encryption, automated PII sanitization, and access audits.",
    Component: SecurityGovernance,
    gridClass: "relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group hover:-translate-y-1 transition-all duration-300",
    bgClass: "",
    contentClass: "",
  },
  {
    id: 4,
    subtitle: "API-First Infrastructure",
    title: "Developer Agent Hub",
    description: "Integrate cognitive execution directly into your existing codebase. Fully-typed TypeScript, Python, and Go SDKs ready to deploy.",
    Component: DeveloperHub,
    gridClass: "relative lg:row-span-2 group hover:-translate-y-1 transition-all duration-300",
    bgClass: "max-lg:rounded-b-4xl lg:rounded-r-4xl",
    contentClass: "max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]",
  }
];

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
        // Transitioning to mobile: Context Lock Constraint
        const transferIndex = hoveredIndex.current ?? activeIndex;
        if (transferIndex !== null) {
          setActiveIndex(transferIndex);
        }
      } else if (wasMobile && !nowMobile) {
        // Clear active index on desktop return
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
      className="section-wrapper relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 25%, rgba(255, 200, 1, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <p className="section-label">Intelligent Platform</p>
          <h2 className="section-title">
            The power of AI, <span className="gradient-text">built for scale</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            NexusAI provides a comprehensive suite of cognitive capabilities to automate, optimize, and secure your workflows.
          </p>
        </div>

        {/* Desktop: Premium Bento Grid */}
        {(!mounted || !isMobile) && (
          <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {BENTO_DATA.map((item) => (
              <div 
                key={item.id} 
                className={item.gridClass}
                onMouseEnter={() => handleBentoHover(item.id)}
                onMouseLeave={handleBentoLeave}
                onFocus={() => handleBentoHover(item.id)}
                onBlur={handleBentoLeave}
                tabIndex={0}
              >
                <div 
                  className={`absolute inset-px rounded-lg bg-[var(--color-bg-card)]/50 group-hover:bg-[var(--color-bg-card-hover)]/70 transition-colors duration-300 ${item.bgClass}`} 
                  style={{ backdropFilter: "blur(var(--glass-blur))", border: "1px solid var(--color-border)" }}
                />
                <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${item.contentClass}`}>
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <span className="text-xs font-semibold tracking-wider text-[#FFC801] uppercase">{item.subtitle}</span>
                    <p className="mt-2 text-xl font-bold tracking-tight text-[var(--color-text-primary)]">{item.title}</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-[var(--color-text-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <item.Component />
                </div>
                <div className={`pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/5 ${item.bgClass}`} />
              </div>
            ))}
          </div>
        )}

        {/* Mobile: Touch-Optimized Accordion */}
        {mounted && isMobile && (
          <div className="flex flex-col space-y-4">
            {BENTO_DATA.map((item) => {
              const isOpen = activeIndex === item.id;
              return (
                <div 
                  key={item.id} 
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ 
                    backgroundColor: isOpen ? "var(--color-bg-card-hover)" : "var(--color-bg-card)",
                    border: "1px solid var(--color-border)"
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    onClick={() => handleAccordionToggle(item.id)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#FFC801] uppercase block mb-1">{item.subtitle}</span>
                      <span className="text-lg font-bold text-[var(--color-text-primary)]">{item.title}</span>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-[var(--color-text-muted)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: isOpen ? "1000px" : "0px",
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-sm text-[var(--color-text-muted)] mb-6">
                        {item.description}
                      </p>
                      <div className="rounded-xl overflow-hidden bg-black/20 border border-white/5">
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