import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Babel Factory - Launch Your SaaS in 7 Days",
  description: "AI-powered rapid SaaS development. Multi-tenancy, authentication, and billing included. Built on battle-tested Erlang/OTP architecture.",
  keywords: "SaaS development, rapid development, Erlang, OTP, multi-tenant, AI development, Claude Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
