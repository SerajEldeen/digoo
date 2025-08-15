import "@/app/globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ShowFooter from "@/components/ShowFooter";
import ShowNavBar from "@/components/ShowNavBar";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ToastContainer } from "react-toastify";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digoo-handmade",
    template: "%s | Digoo-handmade",
  },
  description:
    "أفضل متجر للمنتجات المصنوعة يدوياً في مصر. جودة عالية وتصميمات مخصصة تناسب ذوقك.",
  keywords: [
    "منتجات يدوية",
    "متجر هاند ميد",
    "هدايا",
    "تصميم مخصص",
    "ديكور",
    "إكسسوارات",
    "مصر",
  ],
  openGraph: {
    title: "Digoo-handmade",
    description:
      "أفضل متجر للمنتجات المصنوعة يدوياً في مصر. جودة عالية وتصميمات مخصصة تناسب ذوقك.",
    url: "",
    siteName: "Digoo-handmade",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/public/images/logo.png",
        width: 1200,
        height: 630,
        alt: "منتجات Digoo-handmade",
      },
    ],
  },
  alternates: {
    canonical: "",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body suppressHydrationWarning={true}>
        <ShowNavBar />
        {children}
        <ShowFooter />
        <ScrollToTop />
        <ToastContainer />
      </body>
    </html>
  );
}
