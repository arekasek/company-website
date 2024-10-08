import React from "react";

const PricingBlock = ({ pricingItems }) => {
  return (
    <div className="h-fit w-full bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 opacity-80 text-white Absans-Regular font-normal text-lg p-6 gap-6">
        {pricingItems.map((item, index) => (
          <div
            key={index}
            id="company-info"
            className="py-24 px-12 flex justify-center items-center text-justify"
          >
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
