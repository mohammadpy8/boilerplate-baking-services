import type { Metadata } from "next";

//W import font for project
import { Vazirmatn } from "next/font/google";

//? import css for project
import "@/styles/globals.css";

import { ProviderLayout } from "@/provider";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "خدمات بانکی و عمومی",
  description: "توسعه داده شده توسط fardup",
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
