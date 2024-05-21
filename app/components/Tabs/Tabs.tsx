"use client";

import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { ITabs } from "./Tabs.type";
import { TabComponents } from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Tabs({ active, items, onChange }: ITabs) {
  const renderPanel = () => {
    if (items !== undefined) {
      return items.find((bill) => bill.key === active)?.Component;
    }
  };

  return (
    <Box>
      <Box mt="25px" display="flex" justifyContent="center">
        <TabComponents
          value={active}
          onChange={onChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          {...{ active }}
        >
          {items.map((item, index) => (
            <Tab
              label={<Label image={item.image} label={item.label} />}
              key={index}
              sx={{
                transition: "all 0.1s linear",
                backgroundColor: index === active ? "#efefef" : "transparent",
              }}
            />
          ))}
        </TabComponents>
      </Box>
      <Box display="flex" justifyContent="center" mt="25px">
        {renderPanel()}
      </Box>
    </Box>
  );
}

const Label = (props: { label?: string; image?: string }) => {
  const { image, label } = props;
  return (
    <React.Fragment>
      {image && (
        <Box borderRadius={5} border="1px solid gray" p={2}>
          <Image src={image} width={60} height={60} alt={label ?? "alt-image"} />
        </Box>
      )}
      {label && (
        <Box mt={label ? 2 : 0}>
          <Typography>{label}</Typography>
        </Box>
      )}
    </React.Fragment>
  );
};
