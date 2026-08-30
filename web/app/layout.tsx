import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "magiccode — the terminal coding agent that runs on your machine",
  description:
    "An open-source alternative to OpenCode. magiccode pairs a fast terminal workflow with local LLMs through Ollama, so your code never leaves your machine.",
  openGraph: {
    title: "magiccode — the terminal coding agent that runs on your machine",
    description:
      "An open-source alternative to OpenCode, powered by local models via Ollama.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${mono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
