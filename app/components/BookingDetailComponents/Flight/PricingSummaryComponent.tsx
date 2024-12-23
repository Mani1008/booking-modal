import React from "react";

interface PricingSummaryProps {
  baseFare: number;
  taxes: number;
  commission: number;
  additionalCharges: number;
}

const PricingSummaryComponent: React.FC<PricingSummaryProps> = ({
  baseFare,
  taxes,
  commission,
  additionalCharges,
}) => {
  const totalPrice = baseFare + taxes + commission + additionalCharges;

  return (
    <div className="pricing-summary">
      <h2 className="font-bold text-lg mb-4">Flight Pricing Summary</h2>

      {/* Pricing Details */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div>
          <p className="font-medium">Total Base Fare:</p>
          <p className="font-medium">Total Taxes:</p>
          <p className="font-medium">Total Commission:</p>
          <p className="font-medium">Additional Charges:</p>
          <p className="font-medium">Total Price:</p>
        </div>
        <div className="text-right">
          <p>${baseFare.toFixed(2)}</p>
          <p>${taxes.toFixed(2)}</p>
          <p>${taxes.toFixed(2)}</p>
          <p>${additionalCharges.toFixed(2)}</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingSummaryComponent;
