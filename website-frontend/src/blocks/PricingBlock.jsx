import React from "react";

const PricingBlock = ({ pricingItems }) => {
  return (
    <div className="h-fit w-full bg-gray-200 flex items-center justify-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 opacity-100 text-white Absans-Regular font-normal text-2xl p-12 gap-8 w-full"
        id="O-FIRMA"
      >
        {pricingItems.map((item, index) => (
          <div key={index} className="relative hover:cursor-pointer group">
            <div
              id="company-info"
              className="w-full h-[35vh] text-justify bg-center z-0 filter brightness-50 contrast-50 saturate-50 group-hover:scale-105 group-hover:brightness-50 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-500 ease-in-out"
              style={{
                backgroundImage: `url(${item.image.url})`,
                backgroundSize: "cover",
              }}
            ></div>

            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-white text-center Absans-Regular font-bold group-hover:text-3xl transition-all duration-500 ease-in-out">
              {item.description}
            </span>

            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 text-white text-center Absans-Regular text-sm font-thin hover:underline">
              Zobacz więcej
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
