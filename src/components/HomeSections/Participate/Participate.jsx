import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";

const Participate = () => {
  return (
    <>
      <div className="pTitle">Why Participate</div>
      <div className="pWrap">
        <div className="pItem">
          <div className="pCircle">
            <Icon />
          </div>
          <div className="pText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            iure, dolor eveniet ad doloremque eaque.
          </div>
        </div>

        <div className="pItem">
          <div className="pCircle">
            <Icon />
          </div>
          <div className="pText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            accusantium et recusandae, quia vero magni!
          </div>
        </div>

        <div className="pItem">
          <div className="pCircle">
            <Icon />
          </div>
          <div className="pText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            vero atque ipsa impedit doloribus non.
          </div>
        </div>
      </div>
    </>
  );
};

export default Participate;
