import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "تواصل",
  description: "لنبدأ محادثة حول عيادتك واحتياجاتك التسويقية.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        title="لنبدأ محادثة، لا مجرد نموذج"
        subtitle="أفضل نقطة بداية هي مكالمة قصيرة أو رسالة واتساب لفهم عيادتك قبل اقتراح أي حل جاهز"
      >
        <div className="mx-auto max-w-md">
          <ContactForm />
        </div>
      </Section>

      <Section title="أسئلة شائعة">
        <FAQAccordion />
      </Section>
    </>
  );
}
