import type { Palette, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    primaryColor?: {
      main: string;
      last?: string;
    };
  }
  interface PaletteOptions {
    primaryColor?: {
      main: string;
      last?: string;
    };
  }
}
