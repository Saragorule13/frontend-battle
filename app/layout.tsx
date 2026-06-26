import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Atlas.vercel.app"),

  title: {
    default: "Atlas | Enterprise AI Workflow Automation",
    template: "%s | Atlas",
  },

  description:
    "Atlas is an enterprise AI workflow automation platform that helps businesses automate data pipelines, deploy AI agents, and orchestrate intelligent workflows.",

  applicationName: "Atlas",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "AI Workflow",
    "Workflow Automation",
    "Enterprise AI",
    "Automation Platform",
    "AI Agents",
    "Business Automation",
    "Machine Learning",
    "Data Pipeline",
    "Data Automation",
    "SaaS",
    "Next.js",
  ],

  authors: [
    {
      name: "Sara Gorule",
    },
  ],

  creator: "Sara Gorule",

  publisher: "Atlas",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Atlas | Enterprise AI Workflow Automation",

    description:
      "Build intelligent AI workflows, automate enterprise operations, and deploy AI agents with Atlas.",

    url: "https://Atlas.vercel.app",

    siteName: "Atlas",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Atlas | Enterprise AI Workflow Automation",

    description:
      "Build intelligent AI workflows, automate enterprise operations, and deploy AI agents with Atlas.",

    images: ["/og-image.png"],

    creator: "@Atlas",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172B36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}