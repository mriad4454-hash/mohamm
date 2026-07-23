import { notFound } from "next/navigation";
import Section from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <Section title={post.title}>
        <div className="mx-auto max-w-2xl space-y-5 leading-loose text-ink/85">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(
                  /\*\*(.+?)\*\*/g,
                  '<strong class="text-petrol-deep">$1</strong>'
                ),
              }}
            />
          ))}
        </div>
      </Section>
      <CTABanner title="هل تواجه تحديًا مشابهًا في عيادتك؟" />
    </>
  );
}
