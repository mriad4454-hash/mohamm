"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: ربط هذا النموذج بخدمة إرسال فعلية (مثل Resend أو Formspree)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card bg-white/60 p-8 text-center">
        <p className="font-display font-semibold text-petrol-deep">
          تم استلام طلبك.
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
          rows={4}
          className="w-full rounded-input border border-sand bg-paper px-4 py-3 text-sm outline-none focus:border-petrol-deep focus:ring-1 focus:ring-petrol-deep"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-btn bg-petrol-deep px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-petrol-light"
      >
        أرسل الطلب
      </button>
      <p className="text-center text-xs text-ink/50">
        سيتم الرد خلال 24 ساعة عمل.
      </p>
    </form>
  );
}
