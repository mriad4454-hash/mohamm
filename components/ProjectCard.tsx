"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectCard({
  slug,
  name,
  specialty,
  challenge,
}: {
  slug: string;
  name: string;
  specialty: string;
  challenge: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-card bg-white/60 shadow-sm hover:shadow-md"
    >
      <div className="flex h-40 items-center justify-center bg-petrol-deep/10 text-xs text-ink/40">
        صورة المشروع
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-brass">{specialty}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">
          {name}
        </h3>
        <p className="mt-2 text-sm text-ink/70">{challenge}</p>
        <Link
          href={`/portfolio/${slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm text-petrol-deep underline decoration-brass underline-offset-4"
        >
          شاهد القصة كاملة <ArrowLeft size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
