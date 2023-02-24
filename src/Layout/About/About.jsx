import React from "react";
import { Zoom } from "react-awesome-reveal";
import About_Img from "../../assets/About_Img.png";
import About_Img_bg from "../../assets/About_Img_bg.png";
import Button from "../../Components/Button/Button";
import "./About.css";
const About = () => {
  return (
    <Zoom>
      <div className="About">
        <div className="About_main">
          <div className="About_left">
            <img src={About_Img_bg} alt="" />
            <img src={About_Img} alt="" id="overlay_img" />
          </div>
          <div className="About_right">
            <h3 className="Common_heading">About Musik</h3>
            <p className="Common_para" style={{ margin: "30px 0px" }}>
              Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
              Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
              augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
              non neque suscipit luctus. Mauris et erat id ipsum condimentum
              cursus. Sed tempus enim non massa mattis iaculis. In quis massa
              risus
            </p>
            <Button title={"Learn More"} width={"180px"}>
              &rarr;
            </Button>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default About;
