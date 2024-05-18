import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ProviderLayout } from "./provider";

import "./globals.css";

import { textData } from "./data";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: textData.title,
  description: textData.description,
};

type PropsRootLayout = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: PropsRootLayout) => {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.className}`}>
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
};

export default RootLayout;
