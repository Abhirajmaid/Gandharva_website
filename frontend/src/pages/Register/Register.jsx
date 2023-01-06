import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Gradient from "../../components/Gradient/Gradient";

const Register = () => {
  return (
    <>
      <Gradient
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 168, 225, 1), rgba(255, 0, 0, 0))",
        }}
      />
      <div className="auth">
        <h1>Registration Form</h1>
        <form>
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input required type="number" placeholder="Contact no." />
          <input required type="text" placeholder="College Name" />
          <input required type="text" placeholder="Transaction ID" />
          <label for="img" style={{ color: "black", marginBottom: "-13px" }}>
            Transaction Screenshot:
          </label>
          <input
            type="file"
            placeholder="Transaction Screenshot"
            id="img"
            name="img"
            accept="image/png, image/jpeg"
          />
          <button>Register</button>
          <p>This is an error!</p>
        </form>
      </div>
    </>
  );
};

export default Register;
