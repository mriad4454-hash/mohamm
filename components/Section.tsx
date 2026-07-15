"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-container px-5 py-24 lg:px-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-12 text-center"
      >
        <span className="calibration-mark mb-4 inline-block" aria-hidden />
        <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-lg text-ink/70">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </section>
  );
}
