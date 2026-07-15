# موقع محمد الفتلاوي — خبير التسويق الصحي

مبني بـ Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## البنية

```
app/                  صفحات الموقع (App Router)
  ├── page.tsx         الرئيسية
  ├── about/           من أنا
  ├── services/        الخدمات
  ├── portfolio/        الأعمال (+ صفحة مشروع ديناميكية [slug])
  ├── case-studies/     دراسات الحالة (+ [slug])
  ├── blog/            المدونة
  ├── contact/         تواصل + FAQ
  ├── sitemap.ts        خريطة الموقع (SEO)
  └── robots.ts         ملف robots (SEO)
components/            كل المكونات المشتركة (Header, Footer, Hero, بطاقات...)
lib/data.ts             بيانات الخدمات، المشاريع، الشهادات، الأسئلة الشائعة
```

## ما يحتاج استكمالًا قبل الإطلاق

1. **الصور والفيديوهات**: كل الأماكن المخصصة للصور حاليًا عناصر نائبة (Placeholder رمادي). استبدلها بمحتوى حقيقي عبر `next/image`.
2. **نموذج التواصل**: `components/ContactForm.tsx` يحتاج ربطًا فعليًا بخدمة إرسال بريد (مثل Resend، Formspree، أو API خاص).
3. **رقم واتساب**: عدّل الرقم في `components/WhatsAppFloat.tsx`.
4. **الرابط الأساسي (metadataBase)**: استبدل `https://example.com` في `app/layout.tsx` و`app/sitemap.ts` و`app/robots.ts` بالنطاق الفعلي بعد الشراء.
5. **المحتوى الحقيقي**: استبدل بيانات `lib/data.ts` (المشاريع، الشهادات) بمحتوى حقيقي من عملاء فعليين.
6. **المدونة**: صفحة `/blog` حاليًا هيكل أساسي بمقالين تجريبيين؛ يمكن لاحقًا ربطها بـ MDX أو CMS خارجي (Sanity/Contentful) لسهولة النشر الذاتي.

## ملاحظات تقنية

- الموقع بالكامل RTL (`dir="rtl"` في `app/layout.tsx`).
- الألوان والخطوط والمسافات مأخوذة حرفيًا من نظام التصميم المعتمد (`tailwind.config.ts`).
- الحركات تحترم `prefers-reduced-motion` تلقائيًا (معرّف في `globals.css`).
- الصفحات الديناميكية (`[slug]`) تستخدم `generateStaticParams` لتوليد صفحات ثابتة عند البناء (أفضل للأداء وSEO).
