import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "المدونة",
  description: "نصائح ومقالات في التسويق الصحي للأطباء والعيادات.",
};

const posts = [
  {
    title: "لماذا يفشل تسويق العيادات حتى مع محتوى \"جميل\"؟",
    excerpt:
      "أغلب حسابات العيادات تبدو احترافية بصريًا، لكنها ما تحوّل زوار لمرضى فعليين. السبب غالبًا مو التصميم — بل غياب استراتيجية واضحة خلفه.",
  },
  {
    title: "قبل وبعد: كيف تعرض نتائج علاجية دون أن تفقد المصداقية؟",
    excerpt:
      "عرض حالات قبل/بعد أداة قوية لبناء الثقة، لكن الطريقة الخاطئة تحوّلها لسلاح ذو حدين. هنا الفرق بين العرض المهني والمبالغ فيه.",
  },
  {
    title: "5 أخطاء شائعة يقع فيها الأطباء في التسويق الرقمي",
    excerpt:
      "من استخدام قوالب عامة إلى إهمال الهوية البصرية الموحدة — إليك الأخطاء الأكثر تكرارًا وكيف تتجنبها.",
  },
];

export default function BlogPage() {
  return (
    <Section
      title="المدونة"
      subtitle="نصائح تسويقية، تحليل اتجاهات القطاع، وأخطاء شائعة يجب تجنبها"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-card bg-white/60 p-6 shadow-sm"
          >
            <h3 className="font-display font-semibold text-ink">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
