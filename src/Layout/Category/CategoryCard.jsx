import React from "react";
import Rock from "../../assets/Rock.png";
import "./CategoryCard.css";
const CategoryCard = (props) => {
  return (
    <div className="Category_Card" style={{ backgroundColor: props.bg }}>
      <img src={props.imgsrc} alt="" />
      <h3>{props.title}</h3>
      <p>
        Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae
      </p>
    </div>
  );
};

export default CategoryCard;
