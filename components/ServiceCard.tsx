"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  summary,
  fit,
}: {
  title: string;
  summary: string;
  fit: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-card bg-sand/60 p-6 shadow-sm hover:shadow-md"
    >
      <h3 className="font-display text-lg font-semibold text-petrol-deep">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{summary}</p>
      <p className="mt-4 text-xs text-ink/60">
        <span className="font-medium text-brass">مناسبة لـ:</span> {fit}
      </p>
    </motion.div>
  );
}
