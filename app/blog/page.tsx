import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "المدونة",
  description: "نصائح ومقالات في التسويق الصحي للأطباء والعيادات.",
};

export default function BlogPage() {
  return (
    <Section
      title="المدونة"
      subtitle="نصائح تسويقية، تحليل اتجاهات القطاع، وأخطاء شائعة يجب تجنبها"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-card bg-white/60 p-6 shadow-sm hover:shadow-md"
          >
            <h3 className="font-display font-semibold text-ink">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
