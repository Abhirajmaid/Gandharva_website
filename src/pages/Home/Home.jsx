import React from "react";
import Gradient from "../../components/Gradient/Gradient";
import "./style.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/HomeSections/AboutSec/AboutSec";
import Participate from "../../components/HomeSections/Participate/Participate";
import Sponsors from "../../components/HomeSections/Sponsors/Sponsors";
import EventSch from "../../components/HomeSections/EventSch/EventSch";

const Home = () => {
  return (
    <>
      <div className="page_container">
        <Gradient
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255, 0, 13, 1), rgba(255, 0, 0, 0))",
          }}
        />
        <Hero />
        <div className="sec_container">
          <div className="about_sec">
            <About />
          </div>
          <div className="participate_sec">
            <Participate />
          </div>
          {/* <div className="event_sch">
            <EventSch />
          </div> */}
          <div className="sponsor_sec">
            <Sponsors />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
