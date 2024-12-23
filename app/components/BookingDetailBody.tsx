"use client";

import React, { useState } from "react";
import CarDetailComponent from "./BookingDetailComponents/CarDetail";
import HotelDetailComponent from "./BookingDetailComponents/HotelDetail";
import FlightDetails from "./BookingDetailComponents/FlightDetail";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

const BookingDetailBody: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Flight" | "Car" | "Hotel">(
    "Flight"
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Flight":
        return <FlightDetails />;
      case "Car":
        return <CarDetailComponent />;
      case "Hotel":
        return <HotelDetailComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="booking-component mt-3">
      {/* Tabs */}
      <Tabs
        aria-label="tabs"
        value={activeTab}
        onChange={(event, value) => {
          if (value && typeof value === "string") {
            setActiveTab(value as "Flight" | "Car" | "Hotel");
          }
        }}
        sx={{ bgcolor: "transparent" }}
      >
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "background.level1",
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "background.surface",
            },
          }}
        >
          <Tab
            disableIndicator
            value="Flight"
            sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            ✈️ Flight
          </Tab>
          <Tab
            disableIndicator
            value="Car"
            sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            🚗 Car
          </Tab>
          <Tab
            disableIndicator
            value="Hotel"
            sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            🛌 Hotel
          </Tab>
        </TabList>
      </Tabs>

      {/* Tab Content */}
      <div className="tab-content">{renderActiveTab()}</div>
    </div>
  );
};

export default BookingDetailBody;
