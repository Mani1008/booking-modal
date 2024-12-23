"use client";

import React from "react";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import BookingDetailSummary from "./BookingDetailSummary";

const BookingDetailHeader: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Booking Id <span className="text-blue-600">USCTD123456</span>
        </h1>
        <button className="text-black text-lg font-bold">×</button>
      </header>
      {/* <h2 className="text-xl font-semibold mb-4">Booking Summary</h2> */}

      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab>Detail</Tab>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
          <Tab>Tab4</Tab>
          <Tab>Tab5</Tab>
          <Tab>Tab6</Tab>
        </TabList>
        <TabPanel className="p-1" value={0}>
          <BookingDetailSummary />
          {/* <b>First</b> tab panel */}
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
        <TabPanel value={2}>
          <b>Third</b> tab panel
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookingDetailHeader;
