"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdnanbk";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card bg-white/60 p-8 text-center">
        <p className="font-display font-semibold text-petrol-deep">
          تم إرسال طلبك بنجاح.
        </p>
        <p className="mt-2 text-sm text-ink/70">
          سيتم الرد خلال 24 ساعة عمل.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-ink/80">
          الاسم
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-input border border-sand bg-paper px-4 py-3 text-sm outline-none focus:border-petrol-deep focus:ring-1 focus:ring-petrol-deep"
        />
      </div>
      <div>
        <label htmlFor="clinic" className="mb-1 block text-sm text-ink/80">
          اسم العيادة والتخصص
        </label>
        <input
          id="clinic"
          name="clinic"
          required
          className="w-full rounded-input border border-sand bg-paper px-4 py-3 text-sm outline-none focus:border-petrol-deep focus:ring-1 focus:ring-petrol-deep"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm text-ink/80">
          رقم واتساب
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          required
          type="tel"
          className="w-full rounded-input border border-sand bg-paper px-4 py-3 text-sm outline-none focus:border-petrol-deep focus:ring-1 focus:ring-petrol-deep"
        />
      </div>
      <div>
        <label htmlFor="challenge" className="mb-1 block text-sm text-ink/80">
          ما التحدي الأساسي الذي تواجهه حاليًا؟
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          className="w-full rounded-input border border-sand bg-paper px-4 py-3 text-sm outline-none focus:border-petrol-deep focus:ring-1 focus:ring-petrol-deep"
        />
      </div>
      {status === "error" && (
        <p className="rounded-input bg-error/10 px-4 py-2 text-sm text-error">
          حدث خطأ أثناء الإرسال. حاول مرة أخرى أو تواصل مباشرة عبر واتساب.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-btn bg-petrol-deep px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-petrol-light disabled:opacity-60"
      >
        {status === "sending" ? "جاري الإرسال..." : "أرسل الطلب"}
      </button>
      <p className="text-center text-xs text-ink/50">
        سيتم الرد خلال 24 ساعة عمل.
      </p>
    </form>
  );
}
