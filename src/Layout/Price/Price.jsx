import React from "react";
import { Zoom } from "react-awesome-reveal";
import "./Price.css";
import PriceCard from "./PriceCard";
const Price = () => {
  return (
    <>
      <div className="Space"></div>
      <div className="Price">
        <h3 className="Common_heading">Choose a Tier that’s right for you</h3>
        <div className="Price_main">
          <Zoom cascade damping={0.5}>
            <PriceCard
              color={"#222222"}
              plan={"Basic"}
              price={100}
              featurecolor={"#c8c8c8"}
              featurecolor2={"#c8c8c8"}
            />
            <PriceCard
              color={"#381DDB"}
              plan={"Standard"}
              price={150}
              featurecolor2={"#c8c8c8"}
            />
            <PriceCard color={"#FC5252"} plan={"Premium"} price={200} />
          </Zoom>
        </div>
      </div>
      <div className="Space"></div>
    </>
  );
};

export default Price;
