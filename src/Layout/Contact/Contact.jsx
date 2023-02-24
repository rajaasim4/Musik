import React from "react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Contact_Shape from "../../assets/Contact_Shape.png";
import Button from "../../Components/Button/Button";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact_left">
        <img src={Contact_Shape} alt="" />
        <h3 className="Common_heading" style={{ color: "white" }}>
          Contact Us
        </h3>
        <p>Have an inquiry? We’ll be happy to assist you</p>
        <address>
          <span>
            <AiFillPhone /> +1 234 567
          </span>
          <br />
          <span>
            <AiFillMail /> musik@musik.com
          </span>
          <br />
          <span>
            <MdLocationOn />
            24 Street New York USA
          </span>
        </address>
      </div>
      <div className="Contact_right">
        <h3 className="Common_heading">Fill in your details</h3>
        <div className="form_input">
          <label htmlFor="">Name</label>
          <br />
          <input type="text" name="" id="" />
        </div>
        <div className="form_input">
          <label htmlFor="">Email</label>
          <br />
          <input type="email" name="" id="" />
        </div>
        <div className="form_input">
          <label htmlFor="">Message</label>
          <br />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <Button title={"Submit"} />
      </div>
    </div>
  );
};

export default Contact;
