import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.bg,
        color: props.color,
        width: props.width,
      }}
    >
      {props.title}
      {props.children}
    </button>
  );
};
Button.defaultProps = {
  color: "white",
  bg: "#381DDB",
};

export default Button;
