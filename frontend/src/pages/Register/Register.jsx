import React, {useState} from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Gradient from "../../components/Gradient/Gradient";

const Register = () => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    contactNo: "",
    college: "",
    eventName: "hackathon",
    transactionId: "",
    transactionSS: null
  });
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(regData)
    try{
      const response = await axios.post("http://localhost:5000/api/register", regData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setMessage("registration successful");
    }catch(err){
      console.log(err.response.data.error)
      setMessage(err.response.data.error)
    }

    setRegData({
      ...regData,
      name: "",
      email: "",
      contactNo: "",
      college: "",
      eventName: "hackathon",
      transactionId: "",
    });
  }

  const handleChange = (event) => {
    setRegData({...regData, [event.target.name]:event.target.value});
  }

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
        <form onSubmit={handleSubmit}>
          <input required type="text" name="name" value={regData.name} onChange={handleChange} placeholder="Name" />
          <input required type="email" name="email" value={regData.email} onChange={handleChange} placeholder="Email" />
          <input required type="number" name="contactNo" value={regData.contactNo} onChange={handleChange} placeholder="Contact no." />
          <input required type="text" name="college" value={regData.college} onChange={handleChange} placeholder="College Name" />
          {/* <input required type="text" name="eventName" value={regData.eventName} onChange={handleChange} placeholder="Event Name" /> */}
          <input required type="text" name="transactionId" value={regData.transactionId} onChange={handleChange} placeholder="Transaction ID" />
          <label htmlFor="img" style={{ color: "black", marginBottom: "-13px" }}>
            Transaction Screenshot:
          </label>
          <input
            type="file"
            placeholder="Transaction Screenshot"
            id="img"
            name="img"
            onChange={(event) => setRegData({...regData, "transactionSS": event.target.files[0]})}
            accept="image/*"
          />
          <button>Register</button>
          {message && <p>This is an error!</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
