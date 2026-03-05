import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "CINTARA – Platform",
  description:
    "CINTARA – Intelligent platform for modern businesses. Explore our platform, use cases, and how it works.",
  keywords: ["CINTARA", "platform", "intelligence", "technology"],
  authors: [{ name: "CINTARA" }],
  openGraph: {
    title: "CINTARA",
    description: "Intelligent platform for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
