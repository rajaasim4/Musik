import React from "react";
import airbnb from "../../assets/airbnb.png";
import apple from "../../assets/apple.png";
import axure from "../../assets/axure.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import microsoft from "../../assets/microsoft.png";
import nokia from "../../assets/nokia.png";
import oracle from "../../assets/oracle.png";
import Button from "../../Components/Button/Button";
import "./Sponsor.css";
const Sponsor = () => {
  return (
    <div className="Sponsors">
      <div className="Sponsors_main">
        <SponsorImage imgsrc={microsoft} />
        <SponsorImage imgsrc={google} />
        <SponsorImage imgsrc={airbnb} />
        <SponsorImage imgsrc={axure} />
        <SponsorImage imgsrc={apple} />
        <SponsorImage imgsrc={facebook} />
        <SponsorImage imgsrc={nokia} />
        <SponsorImage imgsrc={oracle} />
      </div>
      <div className="Sponsors_btn">
        <Button title={"Become A Sponsor"} width={"240px"} id="Center_btn" />
      </div>
    </div>
  );
};

const SponsorImage = (props) => {
  return (
    <>
      <div className="Sponsors_img">
        <img src={props.imgsrc} alt="" />
      </div>
    </>
  );
};
export default Sponsor;
