import type { FC } from "react";
import { MUIThemeProvider, RTLMuiProvider } from "@/app/provider";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const ProviderLayout: FC<Props> = ({ children }) => {
  return (
    <MUIThemeProvider>
      <RTLMuiProvider>{children}</RTLMuiProvider>
    </MUIThemeProvider>
  );
};

export { ProviderLayout };
