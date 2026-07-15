import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "دراسات الحالة",
  description: "كيف نصل من التحدي إلى النتيجة — بتفاصيل حقيقية.",
};

export default function CaseStudiesPage() {
  return (
    <Section
      title="كيف نصل من التحدي إلى النتيجة"
      subtitle="ليست كل قصة نجاح تُختصر برقم — هنا التفاصيل كاملة"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/case-studies/${p.slug}`}
            className="block rounded-card bg-white/60 p-6 shadow-sm hover:shadow-md"
          >
            <p className="text-xs font-medium text-brass">{p.specialty}</p>
            <h3 className="mt-1 font-display font-semibold text-ink">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-ink/70">{p.challenge}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
