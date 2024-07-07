import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const anek = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Moknine Elhadj, Frontend Developer",
  description:
    "Software Engineer specialized for React Tailwindcss , Nextjs and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          anek.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
