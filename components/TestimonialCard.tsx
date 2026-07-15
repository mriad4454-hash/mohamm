export default function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <blockquote className="rounded-card bg-white/60 p-8 shadow-sm">
      <p className="text-lg leading-relaxed text-ink/90">“{quote}”</p>
      <footer className="mt-4 text-sm text-brass">— {name}</footer>
    </blockquote>
  );
}
