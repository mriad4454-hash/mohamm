import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-btn px-6 py-3 text-sm font-medium transition-all duration-150";

  const variants: Record<string, string> = {
    primary:
      "bg-petrol-deep text-paper hover:bg-petrol-light hover:shadow-md",
    secondary:
      "border-[1.5px] border-petrol-deep text-petrol-deep bg-transparent hover:bg-sand",
    ghost:
      "text-petrol-deep underline decoration-brass underline-offset-4 decoration-1 hover:decoration-2",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
