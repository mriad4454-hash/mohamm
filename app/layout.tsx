import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "محمد الفتلاوي | خبير التسويق الصحي",
    template: "%s | محمد الفتلاوي",
  },
  description:
    "تسويق طبي مبني على فهم دقيق لمهنة الطب، لا على قوالب جاهزة. إدارة سوشيال ميديا، هوية بصرية، محتوى، وإعلانات للعيادات الطبية في العراق.",
  keywords: [
    "تسويق طبي",
    "تسويق عيادات",
    "تسويق أطباء العراق",
    "محمد الفتلاوي",
    "سوشيال ميديا للعيادات",
  ],
  openGraph: {
    title: "محمد الفتلاوي | خبير التسويق الصحي",
    description:
      "تسويق طبي مبني على فهم دقيق لمهنة الطب، لا على قوالب جاهزة.",
    locale: "ar_IQ",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
