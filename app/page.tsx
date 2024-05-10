"use client";

import { Box, useTheme } from "@mui/material";
import type { FC } from "react";

const HomePage: FC = () => {
  const { palette } = useTheme();

  return <Box bgcolor={palette.primaryColor?.last}>صفحه اصلی</Box>;
};

export default HomePage;
