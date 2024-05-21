import { styled } from "@mui/material";
import MuiTab from "@mui/material/Tabs";

export const TabComponents = styled(MuiTab)((data) => {
  console.log(data);
  return {
    "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "center",
      alighItems: "center",
      gap: "25px",
      "& .MuiButtonBase-root": {
        color: "black",
        fontWeight: "bold",
        borderRadius: "10px",
      },
    },
    "& .MuiTabs-scroller": {
      "& span": {
        display: "none",
      },
    },
  };
});
