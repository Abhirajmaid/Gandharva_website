import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="gandharva_logo" />
          {/* <h2>LOGO</h2> */}
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
        <a
          href="https://www.instagram.com/webfudge/"
          target="_blank"
          rel="noreferrer"
        >
          Design by <b>Webfudge</b>
        </a>
      </div>
    </div>
  );
}

export default Footer;
