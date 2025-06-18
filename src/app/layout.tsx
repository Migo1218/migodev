import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Hernández | Full Stack JavaScript Developer",
  description:
    "Portfolio of Miguel Hernández, a full stack developer specialized in React, Next.js, TypeScript, MongoDB, and NestJS. Explore my projects, skills, and experience in modern web development.",
     keywords: ["Miguel Hernández", "Full Stack Developer", "React", "Next.js", "NestJS", "TypeScript", "Portfolio"],
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        style={{
          background: `
      linear-gradient(135deg, rgba(10, 15, 44, 1), rgba(10, 15, 44, 0.9),  rgba(10, 15, 44, 0.8)),
      url('/imgs/pattern.svg')
    `,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
