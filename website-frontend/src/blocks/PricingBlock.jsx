import React from "react";

const PricingBlock = ({ pricingItems }) => {
  return (
    <div className="h-fit w-full bg-gray-200 flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 opacity-100 text-white Absans-Regular font-normal text-xl p-6 gap-6"
        id="O-FIRMA"
      >
        {pricingItems.map((item, index) => (
          <div
            key={index}
            id="company-info"
            className="py-24 px-16 flex justify-center items-center text-justify hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
