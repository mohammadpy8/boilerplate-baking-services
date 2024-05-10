import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";

type PropsProviders = Readonly<{
  children?: any;
}>;

const Providers = ({ children }: PropsProviders) => {
  return children;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  return render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
