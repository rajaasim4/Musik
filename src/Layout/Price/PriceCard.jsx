import React from "react";
import Button from "../../Components/Button/Button";
const PriceCard = (props) => {
  return (
    <div
      className="PriceCard"
      style={{ borderTop: `${5}px solid ${props.color}` }}
    >
      <h4 style={{ color: props.color }}>{props.plan}</h4>
      <h3 style={{ color: props.color }}>${props.price}</h3>
      <p>1 Seat Avialable</p>
      <p style={{ color: props.featurecolor }}>Access to Wifi Router</p>
      <p style={{ color: props.featurecolor2 }}>Food and Drink</p>
      <Button title={"Get Tickets"} />
    </div>
  );
};

export default PriceCard;
