import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#171A19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Oluwaseun | Web Development & AI Automation",
    template: "%s | Oluwaseun",
  },
  description:
    "Business websites, custom digital products, and AI automation solutions for businesses in Nigeria and internationally.",
  keywords: [
    "Oluwaseun",
    "Web Development Nigeria",
    "AI Automation Consultant",
    "Business Process Automation",
    "Next.js Developer",
    "WhatsApp Business Automation",
    "Custom Web Applications",
    "Software Engineer Nigeria",
  ],
  authors: [{ name: "Oluwaseun" }],
  creator: "Oluwaseun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Oluwaseun | Web Development & AI Automation",
    description:
      "I build digital experiences that win trust and intelligent systems that make business work better.",
    siteName: "Oluwaseun",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oluwaseun - Web Development & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwaseun | Web Development & AI Automation",
    description:
      "Business websites, custom digital products, and AI automation solutions for businesses in Nigeria and internationally.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-[#D9F36A] selection:text-[#121514]`}
    >
      <body className="min-h-full flex flex-col bg-[#171A19] text-[#F7F7F4] font-sans">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider rounded-md shadow-lg outline-none ring-2 ring-black"
        >
          Skip to main content
        </a>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
