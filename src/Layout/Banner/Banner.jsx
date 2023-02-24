import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { BsPlayCircle } from "react-icons/bs";
import Button from "../../Components/Button/Button";
import useCountdownTimer from "../../Hooks/useCountdownTimer";
import "./Banner.css";
const Banner = () => {
  const { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: "September 25, 2022 00:00:00",
  });
  return (
    <header>
      <div className="Banner">
        <Fade>
          <h2>
            The Best experience of
            <br />
            <span> music </span>
            in {new Date().getFullYear()}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
            perferendis, <br /> iure voluptatibus voluptas laudantium. Quas
            eveniet blanditiis facere earum!
          </p>
        </Fade>
        <div className="Banner_btn">
          <Button title={"Get Stated"} width={"150px"} bg={" #FC5252  "} />
          <span>
            <BsPlayCircle />
            Watch Video
          </span>
        </div>
        <Slide>
          <div className="Banner_timer">
            <h3>{days} D</h3>
            <h3>{hours} H</h3>
            <h3>{minutes} M</h3>
            <h3>{seconds} S</h3>
          </div>
        </Slide>
      </div>
    </header>
  );
};

export default Banner;
