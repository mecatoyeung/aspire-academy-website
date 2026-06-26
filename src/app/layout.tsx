import { Nunito, Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";

import { defaultLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

import "./globals.css";

const defaultMessages = getMessages(defaultLocale);

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: defaultMessages.metadata.title,
  description: defaultMessages.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant-HK"
      className={`${nunito.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}