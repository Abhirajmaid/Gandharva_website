import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import webfudge from "../../../images/1.png";

const Sponsors = () => {
  return (
    <>
      <div className="sTitle">Our Sponsors</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          marginBottom: "100px",
        }}
      >
        <div className="sSec">
          {/* <h3>PLATINUM</h3> */}
          <div className="items">
            <div className="item">
              <img src={webfudge} alt="" />
            </div>
            <div className="item">To be Announced</div>
            <div className="item">To be Announced</div>
          </div>
        </div>
        {/* <div className="sSec">
          <h3>GOLD</h3>
          <div className="items">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
        <div className="sSec">
          <h3>SILVER</h3>
          <div className="items">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div> */}
      </div>

      <div className="sUwrap">
        <div className="sLeft">
          If you would like to sponsor this event, please reach out to us at{" "}
          <a href="mailto:gandharva@viit.ac.in">gandharva@viit.ac.in</a> or
          check sponsor form on right.
        </div>
        <div className="sRight">
          <Link to={"/sponsor_us"}>
            <button className="sponsorUsBtn">Sponsor Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
