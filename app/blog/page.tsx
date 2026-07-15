import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "المدونة",
  description: "نصائح ومقالات في التسويق الصحي للأطباء والعيادات.",
};

const posts = [
  {
    title: "5 أخطاء شائعة يقع فيها الأطباء في التسويق الرقمي",
    excerpt: "من استخدام قوالب عامة إلى إهمال الهوية البصرية — إليك ما يجب تجنبه.",
  },
  {
    title: "كيف تبني ثقة رقمية في تخصص طبي حساس؟",
    excerpt: "الفرق بين المحتوى الجذاب والمحتوى الذي يحترم مهنتك.",
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
