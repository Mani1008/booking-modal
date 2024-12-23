"use client";

import React from "react";
import BookingDetailBody from "./BookingDetailBody";

const BookingDetailSummary: React.FC = () => {
  return (
    <div className=" bg-white  rounded-lg max-w-5xl mx-auto">
      <div className=" grid grid-cols-2 gap-4 bg-gray-100">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Contact Details Left */}

            <div>
              <p>
                <span className="font-medium">Name: </span>John Doe
              </p>
              <p>
                <span className="font-medium">Phone No: </span>9811332598
              </p>
              <p>
                <span className="font-medium">Mobile No: </span>9811332598
              </p>
              <p>
                <span className="font-medium">Email: </span>abcdh@gmail.com
              </p>
            </div>

            {/* Contact Details Right */}
            <div>
              <p>
                <span className="font-medium">Address: </span>Delhi
              </p>
              <p>
                <span className="font-medium">City: </span>Delhi
              </p>
              <p>
                <span className="font-medium">Country: </span>India
              </p>
              <p>
                <span className="font-medium">Pin Code: </span>110091
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <h2 className="text-lg font-bold mb-2">Booking Pricing Summary</h2>

      {/* Pricing Details */}
      {/* <div className="grid grid-cols-4 gap-4 mb-6"> */}
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-1">Total Base Fare:</td>
          <td className="border border-gray-300 px-4 py-1">$3000.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-1">Total Taxes:</td>
          <td className="border border-gray-300 px-4 py-1">$200.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-1">
            Total Commission:
          </td>
          <td className="border border-gray-300 px-4 py-1">$150.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-1">
            Additional Charges:
          </td>
          <td className="border border-gray-300 px-4 py-1">$150.00</td>
        </tr>
      </tbody>
      {/* <div>
          <p className="font-medium">Total Base Fare:</p>
          <p className="font-medium">Total Taxes:</p>
          <p className="font-medium">Total Commission:</p>
          <p className="font-medium">Additional Charges:</p>
        </div> */}

      <tbody>
        {/* <tr className="text-right">
          <td>$3000.00</td>
          <td>$200.00</td>
          <td>$150.00</td>
          <td>$150.00</td>
        </tr> */}
      </tbody>
      {/* <div className="text-right">
          <p>$3000.00</p>
          <p>$200.00</p>
          <p>$150.00</p>
          <p>$150.00</p>
        </div> */}
      {/* </div> */}

      <div>
        <BookingDetailBody />
      </div>
    </div>
  );
};

export default BookingDetailSummary;
