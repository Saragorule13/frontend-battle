import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexusAI — Intelligent Data Automation Platform",
  description:
    "Automate, analyze, and orchestrate your entire data pipeline with NexusAI. AI-powered workflows that scale with your business. Trusted by 500+ enterprises.",
  keywords: [
    "AI automation",
    "data pipeline",
    "machine learning",
    "workflow automation",
    "SaaS platform",
    "data orchestration",
    "enterprise AI",
  ],
  authors: [{ name: "NexusAI" }],
  robots: "index, follow",
  openGraph: {
    title: "NexusAI — Intelligent Data Automation Platform",
    description:
      "Automate, analyze, and orchestrate your entire data pipeline with NexusAI. AI-powered workflows that scale with your business.",
    url: "https://nexusai.vercel.app",
    siteName: "NexusAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI — Intelligent Data Automation Platform",
    description:
      "Automate, analyze, and orchestrate your entire data pipeline with NexusAI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0F" />
        <link rel="canonical" href="https://nexusai.vercel.app" />
      </head>
      <body>{children}</body>
    </html>
  );
}
