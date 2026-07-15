import Link from "next/link";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/case-studies", label: "دراسات الحالة" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-paper">
      <div className="mx-auto max-w-container px-5 py-16 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-petrol-deep">
              محمد الفتلاوي
            </p>
            <p className="mt-2 max-w-sm text-sm text-ink/70">
              تسويق طبي مبني على فهم القطاع، لا على قوالب جاهزة.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink/80 hover:text-petrol-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex items-center gap-3 text-xs text-ink/50">
          <span className="calibration-mark" aria-hidden />
          <span>جميع الحقوق محفوظة © {new Date().getFullYear()} — محمد الفتلاوي</span>
        </div>
      </div>
    </footer>
  );
}
