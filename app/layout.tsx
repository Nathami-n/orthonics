import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prosthetics & Orthotics Patient Portal",
  description:
    "Improving patient-clinician interaction and device education in prosthetics and orthotics services",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="generator" content="WordPress 6.4.3" />

      {/* Fake WordPress Stylesheets */}
      <link rel="stylesheet" href="/wp-content/themes/twentytwenty/style.css" />
      <link
        rel="stylesheet"
        href="/wp-content/plugins/woocommerce/assets/css/frontend.css"
      />

      {/* RSS Feeds */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="WordPress Feed"
        href="/feed/index.xml"
      />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>

      </body><Script src="/wp-includes/js/jquery/jquery.js" strategy="beforeInteractive" />
        <Script src="/wp-includes/js/wp-emoji-release.min.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/elementor/assets/js/frontend.min.js" strategy="lazyOnload" />
    </html>
  );
}
