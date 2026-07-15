"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { href: "/about", label: "من أنا" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/case-studies", label: "دراسات الحالة" },
  { href: "/blog", label: "المدونة" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 lg:px-16">
        <Link href="/" className="font-display text-lg font-semibold text-petrol-deep">
          محمد الفتلاوي
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink transition-colors hover:text-petrol-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">احجز استشارة</Button>
        </div>

        <button
          aria-label="فتح القائمة"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-sand bg-paper px-5 py-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-2 w-full">
            احجز استشارة
          </Button>
        </nav>
      )}
    </header>
  );
}
