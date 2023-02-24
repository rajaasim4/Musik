import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import "./Navbar.css";
const Navbar = () => {
  const menuref = useRef(null);
  const [show, SetNavShow] = useState(false);
  const Closenav = () => {
    menuref.current.classList.toggle("Main_nav_show");
    SetNavShow(!show);
  };
  return (
    <nav>
      <div className="Nav_logo">
        <img src={Logo} alt="" />
      </div>
      <div className="Main_nav " ref={menuref}>
        {/* <div className={show ? "Main_nav Main_nav_show " : "Main_nav"}> */}
        <AiOutlineClose className="Nav_close" onClick={Closenav} />
        <ul>
          <li>
            <a href="/#" target="_asdas">
              Home
            </a>
            {/* <a href="/#">Home</a> */}
          </li>
          <li>
            <a href="/#">Speaker</a>
          </li>
          <li>
            <a href="/#">Schedule</a>
          </li>
          <li>
            <a href="/#">Contact Us</a>
          </li>
        </ul>
        <div className="Nav_btn">
          <Button
            title="Get A Ticket"
            width="180px"
            color={"#381DDB"}
            bg="white"
          />
        </div>
      </div>
      <div className="Hamburger">
        <FaBars onClick={Closenav} />
      </div>
    </nav>
  );
};

export default Navbar;
