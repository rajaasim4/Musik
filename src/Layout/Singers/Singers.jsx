import React from "react";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import Button from "../../Components/Button/Button";
import "./Singers.css";
const Singers = () => {
  return (
    <div className="Singers">
      <div className="Singers_main">
        <div className="Singers_left">
          <h3 className="Common_heading">Singers</h3>
          <p className="Common_para" style={{ margin: "30px 0px" }}>
            Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
            Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
            augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
            non neque suscipit luctus. Mauris et erat id ipsum condimentum
            cursus. Sed tempus enim non massa mattis iaculis. In quis massa
            risus
          </p>
          <Button title={"View All SIngers"} width={"200px"}>
            &rarr;
          </Button>
        </div>
        <div className="Singers_right">
          <img src={s4} alt="" />
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Singers;
