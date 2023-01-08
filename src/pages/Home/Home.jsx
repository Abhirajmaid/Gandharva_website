import React from "react";
import Gradient from "../../components/Gradient/Gradient";
import "./style.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/AboutSec/AboutSec";

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
        <div className="about_sec">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;