import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">
          {/* <img src={Logo} alt="gandharva_logo" /> */}
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className="socials">
        <Link>
          <Icon className="social" icon="ri:linkedin-fill" />
        </Link>
        <Link>
          <Icon className="social" icon="ph:instagram-logo" />
        </Link>
        <Link>
          <Icon className="social" icon="mdi:youtube" />
        </Link>
      </div>
      <div className="copy_txt">
        <div className="copyright_txt">
          Copyright ©️2023. Gandharva. All Rights Reserved.
        </div>
        <span>
          Design by <b>Webfudge</b>
        </span>
      </div>
    </div>
  );
}

export default Footer;
