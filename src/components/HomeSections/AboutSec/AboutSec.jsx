import React from "react";
import "./style.css";
// import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";
import video from "../../../images/video.mp4";
const About = () => {
  return (
    <div className="about">
      <div className="leftAbout">
        <video
          src={video}
          width="600"
          height="400"
          controls="controls"
          autoplay="true"
          loop="loop"
        />
      </div>

      <div className="rightAbout">
        <div className="aboutTitle">About Us</div>

        <div className="aboutContent">
          GANDHARVA is a national level Techno-Cultural Fest of Vishwakarma
          Institute of Information Technology, Pune organized by students. A
          crowd of almost around 10,000 people generate aura of this fest every
          year. This fest lasts till 6 days which is majorly divided into
          technical and cultural events. Technical events include hackathon,
          alpha ML, bridge making, algority and many tech competitions. Events
          like dance, music, drama comes under cultural fragment. Various
          fun/gaming activities are also included for sake of entertainment. All
          this is together responsible for rejuvenating the atmosphere and
          experiencing euphoria.
        </div>
        <Link to="/about">
          <button className="aboutReadMore">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
