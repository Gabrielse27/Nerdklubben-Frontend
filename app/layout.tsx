import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import Navbar from "./Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerdklubben",
  description: "Ett strategiskt forum för framtidens techledare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      className=" bg-slate-950 text-slate-100 dark"
      suppressHydrationWarning={true}
    >
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} flex flex-col min-h-screen bg-slate-950 text-slate-100  antialiased overflow-x-hidden`}
      >
        {/* RESPONSIV NAVIGERINGSFÄLT MED HAMBURGERMENY */}
        <Navbar />

        {/* SIDANS HUVUDINNEHÅLL */}
        <main className="w-full max-w-7xl mx-auto pb-20 md:pb-0 flex-1 px-4 pt-8">
          {children}
        </main>

        {/* GLOBALT SIDFOT */}
        <footer className="border-t border-slate-900 bg-black py-6 text-center text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Nerdklubben. I samarbete med Tech
            Trainee Talent & Konnekt of Sweden.
          </p>
        </footer>
      </body>
    </html>
  );
}
