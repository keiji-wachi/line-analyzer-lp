import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "LineAnalyzer | 製造業向けデータ分析SaaS",
    template: "%s | LineAnalyzer",
  },

  description:
    "製造現場の異常データを可視化・分析し、改善につなげる製造業向けデータ分析SaaS。Next.js・React・Spring Bootを使用した案件獲得用ポートフォリオです。",

  applicationName: "LineAnalyzer",

  keywords: [
    "LineAnalyzer",
    "製造業",
    "データ分析",
    "Webアプリ",
    "LP制作",
    "Next.js",
    "React",
    "Spring Boot",
  ],

  authors: [
    {
      name: "Keiji Wachi",
    },
  ],

  creator: "Keiji Wachi",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "LineAnalyzer",
    title: "LineAnalyzer | 製造業向けデータ分析SaaS",
    description:
      "製造現場の異常データを可視化・分析し、改善につなげる製造業向けデータ分析SaaS。",
    images: [
      {
        url: "/images/og/line-analyzer-og.png",
        width: 1200,
        height: 630,
        alt: "LineAnalyzer - 製造業向けデータ分析SaaS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LineAnalyzer | 製造業向けデータ分析SaaS",
    description:
      "製造現場の異常データを可視化・分析し、改善につなげる製造業向けデータ分析SaaS。",
    images: ["/images/og/line-analyzer-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}