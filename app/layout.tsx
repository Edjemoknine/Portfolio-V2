import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
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
          anek,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
