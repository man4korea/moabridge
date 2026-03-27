import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "모아브릿지 | 미디어와 기술을 잇다",
  description:
    "SBS, MBC, KBS, LG유플러스와 함께한 콘텐츠 마케팅 전문 기업. 방송·광고·문화예술·IT를 아우르는 통합 솔루션을 제공합니다.",
  keywords: ["모아브릿지", "MoaBridge", "방송 콘텐츠 마케팅", "미디어", "IT 솔루션"],
  openGraph: {
    title: "모아브릿지 | 미디어와 기술을 잇다",
    description:
      "방송 콘텐츠부터 IT 솔루션까지, 브랜드의 가능성을 연결합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
