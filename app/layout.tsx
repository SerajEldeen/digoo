import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Digoo-handmade",
  description:
    "أفضل متجر للمحافظ اليدوية المصنوعة يدوياً في مصر. جودة عالية وتصميم مخصص.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
