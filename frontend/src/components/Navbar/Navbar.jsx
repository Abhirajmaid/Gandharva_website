import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="logo">
          <Link to="/">
            {/* <img src={Logo} alt="gandharva_logo" /> */}
            <h5>LOGO</h5>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/events">
            <h6>Event</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>About Us</h6>
          </Link>
          <Link className="link" to="/faq">
            <h6>FAQs</h6>
          </Link>
        </div>
        <div className="contact_btn">
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
