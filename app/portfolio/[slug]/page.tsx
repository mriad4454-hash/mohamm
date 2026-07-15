import { notFound } from "next/navigation";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <Section title={project.name} subtitle={project.specialty}>
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="flex h-64 items-center justify-center rounded-card bg-petrol-deep/10 text-sm text-ink/40">
            صورة/فيديو غلاف المشروع
          </div>
          <div>
            <h3 className="font-display font-semibold text-petrol-deep">
              التحدي
            </h3>
            <p className="mt-2 text-ink/80">{project.challenge}</p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-petrol-deep">
              ماذا قُدّم
            </h3>
            <p className="mt-2 text-ink/80">
              إعادة بناء الهوية البصرية، تصميم تقويم محتوى شهري، وتصوير محتوى
              أصيل داخل العيادة يعكس بيئة العمل الفعلية.
            </p>
          </div>
        </div>
      </Section>
      <CTABanner title="أريد نتيجة مشابهة لعيادتي" />
    </>
  );
}
