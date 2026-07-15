"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-sand">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between text-right"
              aria-expanded={isOpen}
            >
              <span className="font-display font-medium text-ink">
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`text-brass transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
