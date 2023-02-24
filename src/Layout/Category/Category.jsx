import React from "react";
import { Slide } from "react-awesome-reveal";
import Confetti from "../../assets/Confetti.png";
import CategoryCardData from "../../Data/CategoryCardData";
import "./Category.css";
import CategoryCard from "./CategoryCard";
const Category = () => {
  return (
    <div className="Category">
      <div className="Category_heading">
        <h3 className="Common_heading">
          <span>Explore </span>
          by Category
        </h3>
        {/* <p>l</p> */}
      </div>
      <div className="Category_main">
        <img src={Confetti} alt="" className="svg" />
        {CategoryCardData.map((item) => {
          return (
            <Slide cascade damping={1}>
              <CategoryCard
                key={item.id}
                imgsrc={item.imgsrc}
                bg={item.bgcolor}
                title={item.title}
              />
            </Slide>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
