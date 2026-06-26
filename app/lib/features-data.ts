/**
 * Features data for the Bento Grid / Accordion component.
 * Each feature uses a provided SVG icon from the asset pack.
 */

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string; // path to SVG in /public/icons/
  large?: boolean;
}

export const FEATURES: Feature[] = [
  {
    id: 0,
    title: "Intelligent Workflow Engine",
    description:
      "Design complex data pipelines with our visual drag-and-drop builder. AI automatically optimizes execution paths and handles error recovery.",
    icon: "/icons/cog-8-tooth.svg",
    large: true,
  },
  {
    id: 1,
    title: "Real-Time Analytics",
    description:
      "Monitor every pipeline in real-time with live dashboards. Track throughput, latency, and error rates across all your workflows.",
    icon: "/icons/chart-pie.svg",
  },
  {
    id: 2,
    title: "Smart Data Routing",
    description:
      "Automatically route data to the right destination based on content, schema, and ML-powered classification rules.",
    icon: "/icons/arrow-path.svg",
  },
  {
    id: 3,
    title: "Performance Insights",
    description:
      "Get actionable recommendations to improve pipeline efficiency. AI identifies bottlenecks and suggests optimizations.",
    icon: "/icons/arrow-trending-up.svg",
  },
  {
    id: 4,
    title: "Universal Connectors",
    description:
      "Connect to 200+ data sources and destinations. From databases to APIs to cloud storage — integrate everything in minutes.",
    icon: "/icons/link.svg",
    large: true,
  },
  {
    id: 5,
    title: "Advanced Search & Discovery",
    description:
      "Find any data asset instantly with semantic search. Discover hidden patterns and relationships across your entire data estate.",
    icon: "/icons/search.svg",
  },
];
