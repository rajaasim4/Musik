import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_main">
          <div className="footer_left">
            <img src={logo} alt="" />
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Company</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact US</a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <div className="footer_social">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <p>
          Copright &copy; {new Date().getFullYear()} All rights are reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
