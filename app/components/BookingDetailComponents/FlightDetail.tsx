"use client";

import React, { useState } from "react";
import PricingSummaryComponent from "./Flight/PricingSummaryComponent";

const FlightDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Pricing Summary" | "Car" | "Hotel"
  >("Pricing Summary");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Pricing Summary":
        return (
          <PricingSummaryComponent
            baseFare={3000}
            taxes={200}
            commission={150}
            additionalCharges={150}
          />
        );
      case "Car":
        return (
          <PricingSummaryComponent
            baseFare={300}
            taxes={200}
            commission={150}
            additionalCharges={150}
          />
        );
      case "Hotel":
        return (
          <PricingSummaryComponent
            baseFare={200}
            taxes={200}
            commission={150}
            additionalCharges={150}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-1 bg-white  max-w-5xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Flight Details</h2>

      {/* Flight Summary Section */}
      {/* <div className="mb-6"> */}
      <h3 className="text-lg font-semibold mb-3">Flight Summary</h3>
      <table className="table-auto w-full border-collapse border border-gray-300 text-left">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">FROM</th>
            <th className="border border-gray-300 px-4 py-2">To</th>
            <th className="border border-gray-300 px-4 py-2">
              Departure Date/Time
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Arrival Date/Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">JFK</td>
            <td className="border border-gray-300 px-4 py-2">LAX</td>
            <td className="border border-gray-300 px-4 py-2">
              01-Dec-2024, 08:00 AM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              01-Dec-2024, 11:00 AM
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">LAX</td>
            <td className="border border-gray-300 px-4 py-2">SFO</td>
            <td className="border border-gray-300 px-4 py-2">
              02-Dec-2024, 02:00 PM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              02-Dec-2024, 04:00 PM
            </td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}

      {/* Flight Sector Details */}
      {/* <div className="mb-6"> */}
      <h3 className="text-lg font-semibold mb-3">Flight Sector Details</h3>
      <table className="table-auto w-full text-xs border-collapse border border-gray-300 text-left">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border border-gray-300 px-2 py-2">Segment ID</th>
            <th className="border border-gray-300 px-2 py-2">Origin</th>
            <th className="border border-gray-300 px-2 py-2">Destination</th>
            <th className="border border-gray-300 px-4 py-2">
              Departure Date/Time
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Arrival Date/Time
            </th>
            <th className="border border-gray-300 px-2 py-2">Flight Number</th>
            <th className="border border-gray-300 px-4 py-2">Airline</th>
            <th className="border border-gray-300 px-4 py-2">Class</th>
            <th className="border border-gray-300 px-4 py-2">Terminal</th>
            <th className="border border-gray-300 px-4 py-2">Baggage</th>
            <th className="border border-gray-300 px-4 py-2">OperatedBy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">JFK</td>
            <td className="border border-gray-300 px-4 py-2">LAX</td>
            <td className="border border-gray-300 px-4 py-2">
              01-Dec-2024, 08:00 AM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              01-Dec-2024, 11:00 AM
            </td>
            <td className="border border-gray-300 px-4 py-2">AA123</td>
            <td className="border border-gray-300 px-4 py-2">
              American Airlines
            </td>
            <td className="border border-gray-300 px-4 py-2">K</td>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">1 pcs</td>
            <td className="border border-gray-300 px-4 py-2">
              British Airline
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">LAX</td>
            <td className="border border-gray-300 px-4 py-2">SFO</td>
            <td className="border border-gray-300 px-4 py-2">
              02-Dec-2024, 02:00 PM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              02-Dec-2024, 04:00 PM
            </td>
            <td className="border border-gray-300 px-4 py-2">AA456</td>
            <td className="border border-gray-300 px-4 py-2">
              American Airlines
            </td>
            <td className="border border-gray-300 px-4 py-2">E</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">1 pcs</td>
            <td className="border border-gray-300 px-4 py-2">
              British Airline
            </td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}

      {/* Pax Details */}
      {/* <div className="mb-6"> */}
      <h3 className="text-lg font-semibold mb-3">Pax Details</h3>
      <table className="table-auto w-full border-collapse border border-gray-300 text-left">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Pax Type</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ADT</td>
            <td className="border border-gray-300 px-4 py-2">Mr.</td>
            <td className="border border-gray-300 px-4 py-2">John</td>
            <td className="border border-gray-300 px-4 py-2">Doe</td>
            <td className="border border-gray-300 px-4 py-2">07 Nov 2002</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">CHD</td>
            <td className="border border-gray-300 px-4 py-2">Ms.</td>
            <td className="border border-gray-300 px-4 py-2">Jane</td>
            <td className="border border-gray-300 px-4 py-2">Doe</td>
            <td className="border border-gray-300 px-4 py-2">28 Jan 1997</td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}

      {/* Action Buttons */}
      {/* Tabs */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-4">
          {/* <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition">
            Pricing Summary
          </button> */}
          <button
            className={`tab bg-gray-900 text-white py-2 px-4 rounded-lg  ${
              activeTab === "Pricing Summary" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Pricing Summary")}
          >
            Pricing Summary
          </button>
          <button
            className={`tab bg-gray-900 text-white py-2 px-4 rounded-lg  ${
              activeTab === "Pricing Summary" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Car")}
          >
            ABC123
          </button>
          <button
            className={`tab bg-gray-900 text-white py-2 px-4 rounded-lg  ${
              activeTab === "Pricing Summary" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Hotel")}
          >
            XYZ456
          </button>
        </div>
      </div>
      <div className="tab-content">{renderActiveTab()}</div>
    </div>
  );
};

export default FlightDetails;
