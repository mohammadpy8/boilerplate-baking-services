"use client";

import type { FC } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

type RTLMuiProviderProps = Readonly<{
  children: React.ReactNode;
}>;

const cacheRTL = createCache({
  key: "mui-rtl-mode",
  stylisPlugins: [prefixer, rtlPlugin],
});

const RTLMuiProvider: FC<RTLMuiProviderProps> = ({ children }) => {
  return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
};

export { RTLMuiProvider };
