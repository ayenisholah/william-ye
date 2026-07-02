import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://william-ye.vercel.app"),
  title: "William Ye - Senior AI Engineer",
  description: "Technical portfolio for William Ye, a Senior AI Engineer shipping AI, NLP, MLOps, and data infrastructure.",
  openGraph: {
    title: "William Ye - Senior AI Engineer",
    description: "Production AI systems, NLP pipelines, MLOps platforms, and measurable engineering impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-bg transition focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
