import React, {useState} from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Gradient from "../../components/Gradient/Gradient";

const Register = () => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    phone: "",
    date:"",
    clgname: "",
    event: "",
    transid: "",
    transss: null
  });
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(regData)
    try{
      const response = await axios.post("http://localhost:4080/Registration", regData, {
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
      phone: "",
      date:"",
      clgname: "",
      event: "hackathon",
      transid: "",
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
          <input required type="number" name="phone" value={regData.phone} onChange={handleChange} placeholder="Contact no." />
          <input required type="date" name="date" value={regData.date} onChange={handleChange} placeholder="Date" />
          <input required type="text" name="clgname" value={regData.clgname} onChange={handleChange} placeholder="College Name" />
          <input required type="text" name="event" value={regData.event} onChange={handleChange} placeholder="Event Name" />
          <input required type="text" name="transid" value={regData.transid} onChange={handleChange} placeholder="Transaction ID" />
          <label htmlFor="img" style={{ color: "black", marginBottom: "-13px" }}>
            Transaction Screenshot:
          </label>
          <input
            type="file"
            placeholder="Transaction Screenshot"
            id="img"
            name="img"
            onChange={(event) => setRegData({...regData, "transss": event.target.files[0]})}
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