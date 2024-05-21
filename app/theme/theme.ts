"use client";

import { createTheme } from "@mui/material";
import { palette } from "./palette";

const theme = createTheme({
  palette,
  direction: "rtl",
});

export { theme };
