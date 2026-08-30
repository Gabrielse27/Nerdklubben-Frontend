"use client";

import { useState } from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-wider text-slate-100 hover:text-blue-400 transition-colors"
        >
          NERDKLUBBEN
        </Link>

        {/* MENIU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8 text-base lg:text-lg font-medium text-slate-200">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/om-oss">Om oss</ActiveLink>
          <ActiveLink href="/formatet">Formatet</ActiveLink>
          <ActiveLink href="/vardet">Värdet</ActiveLink>
          <ActiveLink href="/vision">Vision</ActiveLink>
          <ActiveLink href="/medlemskap">Medlemskap</ActiveLink>
        </nav>

        {/* BUTTON ANSÖKAN (Desktop) + BUTTON HAMBURGER (Mobil) */}
        <div className="flex items-center gap-3">
          <Link
            href="/ansokan"
            className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-blue-500 transition-colors"
          >
            Ansök nu
          </Link>

          {/* ButTon Hamburger syns bara på mobil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-1.5 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Piktogram X
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Piktogram Hamburger (3 linjer)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBIL */}
      {isOpen && (
        <nav className="lg:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col gap-4 text-base font-medium">
          <div onClick={() => setIsOpen(false)}>
            <ActiveLink href="/">Home</ActiveLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <ActiveLink href="/om-oss">Om oss</ActiveLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <ActiveLink href="/formatet">Formatet</ActiveLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <ActiveLink href="/vardet">Värdet</ActiveLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <ActiveLink href="/vision">Vision</ActiveLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <ActiveLink href="/medlemskap">Medlemskap</ActiveLink>
          </div>
        </nav>
      )}
    </header>
  );
}
