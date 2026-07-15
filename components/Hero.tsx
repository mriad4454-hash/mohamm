"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-container px-5 pb-24 pt-16 lg:px-16 lg:pt-24">
      {/* خط المعايرة الافتتاحي — العنصر التوقيعي للبراند */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-10 h-[1.5px] w-24 origin-center bg-brass"
      />

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-3xl text-center font-display text-4xl font-bold leading-tight text-ink lg:text-6xl"
      >
        عيادتك تستحق حضورًا رقميًا بمصداقية مهنتك.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mx-auto mt-6 max-w-xl text-center text-lg text-ink/70"
      >
        لا قوالب جاهزة، ولا وعود فارغة. تسويق طبي مبني على فهم دقيق لمهنتك،
        وحس بصري لا يقل عن جودة رعايتك.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Button href="/contact">احجز استشارة</Button>
        <Button href="/portfolio" variant="secondary">
          شاهد أعمالنا
        </Button>
      </motion.div>
    </section>
  );
}
