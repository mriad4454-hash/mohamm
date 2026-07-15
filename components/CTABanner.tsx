import Button from "./Button";

export default function CTABanner({
  title = "لنبنِ حضورك الرقمي معًا",
  buttonLabel = "احجز استشارة",
  href = "/contact",
}: {
  title?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-petrol-deep py-20">
      <div className="mx-auto max-w-container px-5 text-center lg:px-16">
        <h2 className="font-display text-2xl font-semibold text-paper lg:text-3xl">
          {title}
        </h2>
        <div className="mt-8">
          <Button href={href} className="!bg-brass !text-ink hover:!bg-brass/90">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
