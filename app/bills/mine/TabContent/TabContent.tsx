"use client";

import Tabs from "@/app/components/Tabs/Tabs";
import React, { useState } from "react";
import { myBills } from "./TabContent.constants";
import Mci from "./components/Mci/Mci";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: any, newTabActive: number) => {
    setActiveTab(newTabActive);
  };
  function renderContent() {
    switch (activeTab) {
      case 0:
        return <Mci />;
      case 1:
        return <h1>Irancell</h1>;
      case 2:
        return <h1>Rightel</h1>;
      case 4:
        return <h1>bargh</h1>;
      default:
        return null;
    }
  }

  return (
    <React.Fragment>
      <Tabs active={activeTab} items={myBills} onChange={handleTabChange} />
      {renderContent()}
    </React.Fragment>
  );
};

export default TabContent;
