import React from "react";
import "./style.css";
// import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="leftAbout">
        <img
          className="aboutImg"
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>

      <div className="rightAbout">
        <div className="aboutTitle">About Us</div>

        <div className="aboutContent">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          sint quaerat, dolores cumque reprehenderit optio ex voluptatem at
          magnam consequatur labore consequuntur similique facilis explicabo
          perferendis eveniet, saepe aliquam inventore iusto molestias quod sed.
          Inventore totam ipsum est dolores illum deserunt, facilis laudantium
          magni maxime? Debitis quasi dolor quibusdam non.
        </div>
        <Link to="/about">
          <button className="aboutReadMore">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
