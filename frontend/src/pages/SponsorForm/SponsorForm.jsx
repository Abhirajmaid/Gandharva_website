import React, {useState} from "react";
import axios from "axios";
import Gradient from "../../components/Gradient/Gradient";
import "./style.css";

const SponsorForm = () => {
  const [sponsorData, setSponsorData] = useState({
    companyName: "",
    companyEmail: "",
    contactNo: "",
    whyToSponsor: ""
  });
  const [message, setMessage] = useState("")

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/api/sponsor_us', sponsorData);
      console.log(response.data)
      setMessage("sent")
    }catch(error){
      console.log(error)
      setMessage(error.response.data.error)
    }

    setSponsorData({
      companyName: "",
      companyEmail: "",
      contactNo: "",
      whyToSponsor: ""
    });
  }

  const handleChange = (event)=>{
    setSponsorData({...sponsorData, [event.target.name]:event.target.value});
  }

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
        <form onSubmit={handleSubmit}>
          {message && (<p>{message}</p>)}
          <input required type="text" name="companyName" value={sponsorData.companyName} onChange={handleChange} placeholder="Company Name" />
          <input required type="email" name="companyEmail" value={sponsorData.companyEmail} onChange={handleChange} placeholder="Company Email" />
          <input required type="number" name="contactNo" value={sponsorData.contactNo} onChange={handleChange} placeholder="Contact no. (whatsapp)" />
          <input
            required
            name="whyToSponsor"
            value={sponsorData.whyToSponsor}
            onChange={handleChange}
            type="text"
            placeholder="Why are you willing to Sponsor us"
          />
          <button style={{ backgroundColor: "rgba(255,0,13,1)" }}>
            Submit
          </button>
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
