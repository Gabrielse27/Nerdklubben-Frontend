import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
    <html lang="sv" className="h-full bg-slate-950 text-slate-100 dark">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-slate-950 text-slate-100`}
      >
        {/* NAVBAR GLOBAL */}
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-black">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-8 md:px-8">
            {/* LOGO */}
            <Link
              href="/"
              className="text-xl font-bold tracking-wider text-slate-100 hover:text-blue-400 transition-colors"
            >
              NERDKLUBBEN
            </Link>

            {/* MENIU LINKURI */}
            <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-200">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>

              <Link
                href="/om-oss"
                className="hover:text-blue-400 transition-colors"
              >
                Om oss
              </Link>
              <Link
                href="/formatet"
                className="hover:text-blue-400 transition-colors"
              >
                Formatet
              </Link>
              <Link
                href="/vardet"
                className="hover:text-blue-400 transition-colors"
              >
                Värdet
              </Link>
              <Link
                href="/medlemskap"
                className="hover:text-blue-400 transition-colors"
              >
                Medlemskap
              </Link>
            </nav>

            {/* BUTON ANSÖKAN */}
            <div>
              <Link
                href="/ansokan"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
              >
                Ansök nu
              </Link>
            </div>
          </div>
        </header>

        {/* CONȚINUTUL PAGINILOR */}
        <main className="flex-1 mx-auto w-full max-w-7xl p-4 md:p-8">
          {children}
        </main>

        {/* FOOTER GLOBAL */}
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
