"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`pb-1 transition-colors hover:text-blue-400 ${
        isActive
          ? "border-b-2 border-blue-500 text-white font-semibold"
          : "text-slate-200"
      }`}
    >
      {children}
    </Link>
  );
}
