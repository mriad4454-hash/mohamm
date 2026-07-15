import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "من أنا",
  description: "قصة محمد الفتلاوي وقيمه في التسويق الصحي.",
};

const values = [
  {
    t: "الدقة قبل الجاذبية",
    d: "كل محتوى يخضع لمعايير مهنية قبل أن يُنشر.",
  },
  {
    t: "الشفافية في كل خطوة",
    d: "تعرف بالضبط ماذا يُعمل، ولماذا.",
  },
  {
    t: "علاقة، لا صفقة",
    d: "أتعامل مع عيادتك كمشروع طويل الأمد، لا كحملة عابرة.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section title="الشخص الذي يقف خلف هذا الاسم">
        <div className="mx-auto max-w-2xl space-y-5 text-ink/85 leading-loose">
          <p>
            لاحظتُ باكرًا أن أغلب العيادات في العراق تُدار رقميًا بنفس الأسلوب
            الذي يُدار به أي &quot;بزنس محلي&quot; — نفس القوالب، نفس الفلاتر،
            نفس اللغة التسويقية التي لا تفرّق بين طبيب أسنان ومطعم شاورما.
          </p>
          <p>
            المشكلة أن الطبيب ليس بائعًا، والمريض لا يختار عيادته كما يختار
            وجبة عشاء. هناك ثقة تُبنى بالسنوات، وتُهدَم بمنشور واحد غير محسوب.
          </p>
          <p>
            من هذه الملاحظة بدأت رحلتي: أن أكون الشخص الذي يفهم الطب أولًا،
            والتسويق ثانيًا. لا العكس. أعمل بشكل مباشر مع كل عيادة أتعامل
            معها — لا فرق تسويق يدير حسابك ضمن قائمة طويلة من العملاء، بل
            تعامل شخصي يحترم خصوصية مهنتك وحساسيتها.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="rounded-card bg-white/50 p-6 text-center">
              <h3 className="font-display font-semibold text-petrol-deep">
                {v.t}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="لنتحدث عن عيادتك" />
    </>
  );
}
