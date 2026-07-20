import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
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

      <section className="border-y border-sand bg-sand/30 py-14">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-5 text-center lg:grid-cols-4 lg:px-16">
          {[
            {
              value: projects.length.toString(),
              label: "عيادات تم التعامل معها",
            },
            {
              value: new Set(projects.map((p) => p.specialty)).size.toString(),
              label: "تخصصات طبية مختلفة",
            },
            { value: "1:1", label: "تواصل مباشر، بلا وسطاء" },
            { value: "0", label: "وعود نتائج مضمونة بأرقام" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-petrol-deep">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

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

      <Section title="الشخص الذي يقف خلف هذا الاسم">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-right">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full shadow-md ring-4 ring-white/60">
            <Image
              src="/images/mohammed.jpg"
              alt="محمد الفتلاوي"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-ink/80 leading-relaxed">
              لاحظتُ باكرًا أن أغلب العيادات في العراق تُدار رقميًا بنفس
              الأسلوب الذي يُدار به أي &quot;بزنس محلي&quot;. من هذه الملاحظة
              بدأت رحلتي: أن أكون الشخص الذي يفهم الطب أولًا، والتسويق ثانيًا.
            </p>
            <Link
              href="/about"
              className="mt-3 inline-block text-sm text-petrol-deep underline decoration-brass underline-offset-4"
            >
              اقرأ القصة كاملة
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
