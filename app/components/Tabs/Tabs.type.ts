import type { ReactNode } from "react";

export interface ITabs {
  items: { label?: string; Component: ReactNode; key: number; image?: string }[];
  active: number;
  onChange: (_: any, value: any) => void;
}
