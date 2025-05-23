import BoxText from "@/components/Helper/BoxText";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div id="price" className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Pricing" />
        </div>
        <h2 className="text-xl md:text-3xl font-bold">Our Best Pricing Plan</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          inventore quia, fugit atque .
        </p>
      </div>
      {/* Price Card */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <PriceCard type="Basic" price="$30" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <PriceCard type="Advanced" price="$50" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <PriceCard type="Premium" price="$100" />
        </div>
      </div>
    </div>
  );
};

export default Price;
