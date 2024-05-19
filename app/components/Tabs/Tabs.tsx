"use client";

import * as React from "react";
import MuiTab from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ITabs } from "./Tabs.type";

export default function Tabs({ active, items, onChange }: ITabs) {
  return (
    <Box>
      <MuiTab
        value={active}
        onChange={onChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          width: "650px",
        }}
      >
        {items.map((item, idx) => (
          <Tab label={item} key={idx} />
        ))}
      </MuiTab>
    </Box>
  );
}
