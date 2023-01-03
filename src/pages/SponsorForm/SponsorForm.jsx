import React from "react";
import Gradient from "../../components/Gradient/Gradient";
import "./style.css";

const SponsorForm = () => {
  return (
    <>
      <Gradient
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 0, 13, 1), rgba(255, 0, 0, 0))",
        }}
      />
      <div className="auth">
        <h1>Sponsor Form</h1>
        <form>
          <input required type="text" placeholder="Company Name" />
          <input required type="email" placeholder="Company Email" />
          <input required type="number" placeholder="Contact no. (whatsapp)" />
          <input
            required
            type="text"
            placeholder="Why are you willing to Sponsor us"
          />
          <button style={{ backgroundColor: "rgba(255,0,13,1)" }}>
            Submit
          </button>
          <p>This is an error!</p>
        </form>
        <h2>Contact Us Here:</h2>
        <div className="contact_info">
          <span>
            Contact No.: <b>7385302967</b>
          </span>
          <span>
            Email Address: <b>webfudgeagency@gmail.com</b>
          </span>
        </div>
      </div>
    </>
  );
};

export default SponsorForm;
