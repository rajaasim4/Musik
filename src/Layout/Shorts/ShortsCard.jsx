import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Short1 from "../../assets/Short1.png";
const ShortsCard = (props) => {
  return (
    <div className="ShortsCard">
      <img src={props.imgsrc} alt="" />
      <div className="Like_comment">
        <span>
          <AiOutlineHeart />
          1.1 M
        </span>
        <span>
          <FaRegComment />
          2K
        </span>
      </div>
      <br />
      <p>Lorem, ipsum dolor</p>
      <br />

      <div className="ptags">
        #music #concert #conference #london #event #artist #dj #soundtrack
        #dance
      </div>
    </div>
  );
};

export default ShortsCard;
