import React, { useState } from "react";
import Gradient from "../../components/Gradient/Gradient";
import "./style.css";
import axios from 'axios';

const SponsorForm = () => {
  const [sponser,setUser] = useState({
    comname:"",comemail:"",comphone:"",message:""
});
let name, value;
const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setUser({...sponser, [name]:value});
}
const sponserdata = async() =>{

  try {
    const res = axios.post("http://localhost:4080/sponsers", sponser);
    console.log(res.data);
  }catch(err){ console.log(err);
  }
  
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
        <form>
          <input required type="text" placeholder="Company Name" name="comname" value={sponser.comname} onChange={handleInputs} />
          <input required type="email" placeholder="Company Email" name="comemail" value={sponser.comemail} onChange={handleInputs} />
          <input required type="number" placeholder="Contact no. (whatsapp)" name="comphone" value={sponser.comphone} onChange={handleInputs} />
          <input
            required
            type="text"
            placeholder="Why are you willing to Sponsor us" 
            name="message" value={sponser.message} onChange={handleInputs} 
          />
          <button onClick={sponserdata} style={{ backgroundColor: "rgba(255,0,13,1)" }}>
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