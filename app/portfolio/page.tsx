import type { Metadata } from "next";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "الأعمال",
  description: "مشاريع تسويق طبي حقيقية لعيادات في العراق.",
};

export default function PortfolioPage() {
  return (
    <Section
      title="أعمال حقيقية، لعيادات حقيقية"
      subtitle="كل مشروع تم بناؤه بناءً على واقع العيادة نفسها"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </Section>
  );
}
