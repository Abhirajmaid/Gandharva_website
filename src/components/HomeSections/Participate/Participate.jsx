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
            <Icon className="pIcon" icon="heroicons:user-group-solid" />
          </div>
          <div className="pText">
            Since most of these activities are group-oriented, students get to
            know about people from different cultural backgrounds and interests.
          </div>
        </div>

        <div className="pItem">
          <div className="pCircle">
            <Icon />
          </div>
          <div className="pText">
            Various technical and cultural events are conducted during the fest.
            It helps to boost confidence, enhance students knowledge while
            competing with other students.
          </div>
        </div>

        <div className="pItem">
          <div className="pCircle">
            <Icon />
          </div>
          <div className="pText">
            Fests provide a platform for students to showcase one’s unique
            talents and are important in the holistic development of the
            personality of the students.
          </div>
        </div>
      </div>
    </>
  );
};

export default Participate;
