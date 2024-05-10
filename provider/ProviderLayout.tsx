import type { FC } from "react";
import { MUIThemeProvider } from "@/provider";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const ProviderLayout: FC<Props> = ({ children }) => {
  return <MUIThemeProvider>{children}</MUIThemeProvider>;
};

export { ProviderLayout };
