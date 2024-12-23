import React from "react";
import BookingDetailHeader from "./components/BookingDetailHeader";
import BookingDetailSummary from "./components/BookingDetailSummary";

const page = () => {
  return (
    <div className="container bg-gray-100 p-5">
      <BookingDetailHeader />
      {/* <BookingDetailBody /> */}
    </div>
  );
};

export default page;
