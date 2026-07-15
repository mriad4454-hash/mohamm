import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import Button from "@/components/Button";
import { services, projects, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        title="لماذا محمد الفتلاوي"
        subtitle="ثلاثة أسباب تجعل الأطباء يختارون التعامل معنا تحديدًا"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              t: "فهم طبي حقيقي",
              d: "قبل أي قرار تصميمي، هناك فهم دقيق لحساسية مهنة الطب وحدودها الأخلاقية.",
            },
            {
              t: "حس بصري راقٍ",
              d: "محتوى يجذب دون أن يفقد الجدية المهنية المطلوبة في القطاع الصحي.",
            },
            {
              t: "نتائج واقعية",
              d: "لا وعود مبالغ فيها، بل خطة واضحة ومؤشرات نراجعها معًا دوريًا.",
            },
          ].map((item) => (
            <div key={item.t} className="rounded-card bg-white/50 p-6">
              <h3 className="font-display font-semibold text-petrol-deep">
                {item.t}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="خدمات مبنية على فهم قطاعك"
        subtitle="لا قوالب عامة — كل خدمة مصممة لطبيعة العيادات الطبية تحديدًا"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="secondary">
            استعرض كل الخدمات
          </Button>
        </div>
      </Section>

      <Section
        title="أعمال حقيقية، لعيادات حقيقية"
        subtitle="كل مشروع بُني بناءً على واقع العيادة نفسها"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </Section>

      <Section title="بصوت من تعامل معنا فعليًا">
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
