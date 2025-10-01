import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syntrix - AI-Powered Software Development",
  description: "Professional AI-assisted software development services. We build modern websites, mobile apps, and management systems for businesses worldwide.",
  keywords: "software development, AI, web development, mobile apps, management systems, Syntrix",
  authors: [{ name: "Syntrix Team" }],
  openGraph: {
    title: "Syntrix - AI-Powered Software Development",
    description: "Professional AI-assisted software development services for the modern world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntrix - AI-Powered Software Development",
    description: "Professional AI-assisted software development services for the modern world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
