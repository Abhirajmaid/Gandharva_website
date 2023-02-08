import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Gradient from "../../components/Gradient/Gradient";
import { db } from "../../Firebase";

const RegisterTest = () => {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({
    name: "",
    contact: "",
  });
  const [error, setError] = useState(false);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("done");
    e.preventDefault();
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (user.name !== "" && user.contact !== "") {
      setError(false);
      db.collection("user")
        .add({
          name: user.name,
          contact: user.contact,
        })
        .then(() => {
          alert("Thanks and pay now on VIERP");
        })
        .catch((error) => {
          alert(error.message);
        });

      // //emailjs here...
      // emailjs
      //   .sendForm(
      //     "service_yrtwoqd",
      //     "template_9u7lpzf",
      //     e.target,
      //     "ianq_Ulidp_vjgKT4"
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      setUser({
        name: "",
        contact: "",
      });

      //   setError("Check your inbox...");
      // } else if (userName === "" || email === "") {
      //   console.log("Seriously, You don't know anythig ? 😂😂");
      //   setError("Above fields are blank. 😶");
      // } else if (regex.test(email) === false) {
      //   setError("Please enter correct Email!");
      setTimeout(() => {
        window.location.href = "https://learner.vierp.in/";
      }, 3000);
    } else {
      setError(true);
    }
  };
  console.log(user);
  return (
    <>
      <Gradient
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 168, 225, 1), rgba(255, 0, 0, 0))",
        }}
      />
      <div className="auth">
        <h1>Registration here </h1>
        <form>
          <input
            required
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
          <input
            required
            type="text"
            name="contact"
            placeholder="Contact no."
            value={user.contact}
            onChange={(e) => handleChange(e)}
          />
          {/* <label for="img" style={{ color: "black", marginBottom: "-13px" }}>
            Transaction Screenshot:
          </label>
          <input
            type="file"
            placeholder="Transaction Screenshot"
            id="img"
            name="img"
            accept="image/png, image/jpeg"
          /> */}
          <button
            className="payNow"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Pay Now
          </button>
          <div type="submit" className="noVierp">
            <a href="https://forms.gle/h6tYNFdDEiFK6WzV6" target="_blank">
              Non VIIT student register here!
            </a>
          </div>
          {error && <p>Fill all fields above!</p>}
        </form>
      </div>
    </>
  );
};

export default RegisterTest;
