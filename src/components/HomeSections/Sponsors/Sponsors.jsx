import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import webfudge from "../../../images/1.png";
import tba from "../../../images/TO_BE_announced.png";

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
          <div className="imp_spo">
            <div className="spo_powered">
              <h2>Powered By</h2>
              <div className="items">
                <div className="item">
                  <img src={tba} alt="" />
                </div>
              </div>
            </div>
            <div className="spo_present">
              <h2>Presented By</h2>
              <div className="items">
                <div className="item">
                  <img src={tba} alt="" />
                </div>
              </div>
            </div>
          </div>
          <h3>Our Partners</h3>
          <div className="items">
            <div>
              <h4 className="spo_partner">Website Partner</h4>
              <div className="item">
                <img src={webfudge} alt="" />
              </div>
            </div>
            <div className="item">
              <img src={tba} alt="" />
            </div>
            <div className="item">
              <img src={tba} alt="" />
            </div>
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
