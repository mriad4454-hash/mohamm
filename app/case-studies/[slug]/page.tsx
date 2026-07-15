import { notFound } from "next/navigation";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { projects, testimonials } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <Section title={project.name} subtitle={project.specialty}>
        <div className="mx-auto max-w-2xl space-y-8">
          <div>
            <h3 className="font-display font-semibold text-petrol-deep">
              التحدي
            </h3>
            <p className="mt-2 text-ink/80">
              {project.name} واجهت مشكلة واضحة: {project.challenge}
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-petrol-deep">
              القرار
            </h3>
            <p className="mt-2 text-ink/80">
              بدلًا من إعادة بناء كل شيء دفعة واحدة، بدأنا بإعادة تعريف الهوية
              البصرية أولًا — لأن أي محتوى لاحق بدونها كان سيبقى بلا هوية
              واضحة.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-petrol-deep">
              التنفيذ
            </h3>
            <p className="mt-2 text-ink/80">
              تقويم محتوى شهري منظم، تصوير أصيل داخل العيادة، وإعادة تصميم
              الواجهات البصرية عبر جميع المنصات.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-petrol-deep">
              النتيجة
            </h3>
            <p className="mt-2 text-ink/80">
              خلال أشهر قليلة، لاحظت العيادة زيادة ملحوظة في الاستفسارات
              المباشرة عبر واتساب، وتحسّنًا واضحًا في تناسق حضورها الرقمي.
            </p>
          </div>
          <TestimonialCard {...testimonials[0]} />
        </div>
      </Section>
      <CTABanner title="أريد نتيجة مشابهة لعيادتي" />
    </>
  );
}
