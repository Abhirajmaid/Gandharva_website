import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import webfudge from "../../../images/1.png";
import sanspots from "../../../images/sanspots.png";
import finserve from "../../../images/finserve.png";
import tba from "../../../images/TO_BE_announced.png";
import dsa from "../../../images/design skill academy.png";
import evolve from "../../../images/evolve.png";
import sl from "../../../images/simplilearn.png";
import cv from "../../../images/chaivilla.png";
import ap from "../../../images/Asian panda.png";
import ss from "../../../images/sonisandwich.png";
import ks from "../../../images/khanna_stories.png";
import bp from "../../../images/blosom_parlour.png";

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
              <h2>Powered by</h2>
              <div className="items">
                <div className="item">
                  <img src={sanspots} alt="" />
                </div>
              </div>
            </div>
            {/* <div className="spo_present">
              <h2>Presented by</h2>
              <div className="items">
              <div className="item">
              <img src={tba} alt="" />
                </div>
              </div>
            </div> */}
          </div>
          <h3>Our Partners</h3>
          <div className="items">
            <div>
              <h4 className="spo_partner">Website Partner</h4>
              <div className="item">
                <img src={webfudge} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Fin-Tech Partner</h4>
              <div className="item">
                <img src={finserve} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Ed-Tech Partner</h4>
              <div className="item">
                <img src={dsa} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Ed-Tech Partner</h4>
              <div className="item">
                <img src={sl} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Gaming Partner</h4>
              <div className="item">
                <img src={evolve} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Food Partner</h4>
              <div className="item">
                <img src={cv} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Food Partner</h4>
              <div className="item">
                <img src={ap} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Food Partner</h4>
              <div className="item">
                <img src={ss} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Food Partner</h4>
              <div className="item">
                <img src={ks} alt="" />
              </div>
            </div>
            <div>
              <h4 className="spo_partner">Beauty Partner</h4>
              <div className="item">
                <img src={bp} alt="" />
              </div>
            </div>
            {/* <div className="item">
              <img src={tba} alt="" />
            </div> */}
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
