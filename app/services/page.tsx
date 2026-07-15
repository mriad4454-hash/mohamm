import type { Metadata } from "next";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "خدمات تسويق طبي مصممة خصيصًا للعيادات والأطباء.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        title="خدمات مبنية على فهم قطاعك، لا على قالب عام"
        subtitle="كل خدمة قائمة بذاتها — يمكن البدء بما تحتاجه عيادتك فعليًا"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}
        </div>
      </Section>
      <CTABanner title="اسأل عن الخدمة المناسبة لعيادتك" />
    </>
  );
}
