"use client";

import Tabs from "@/app/components/Tabs/Tabs";
import React, { FC, useState } from "react";
import { myBills } from "./TabContent.constants";
import Mci from "./components/Mci/Mci";

const TabContent = <T extends unknown>() => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (_: T, newTabActive: number) => {
    setActiveTab(newTabActive);
  };

  return (
    <React.Fragment>
      <Tabs active={activeTab} items={myBills} onChange={handleTabChange} />
    </React.Fragment>
  );
};

export default TabContent;
