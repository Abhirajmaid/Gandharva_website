import React, { useState } from "react";
import Gradient from "../Gradient/Gradient";
import "./style.css";
import { db } from "../../Firebase";
// import Regex from "regex";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, redirect, collection }) => {
  const initialForm = prepareForm(formArr);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    console.log("done");
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (form.name !== "" && form.contact !== "") {
      db.collection(`${title}`)
        .add({
          name: form.name,
          contact: form.contact,
        })
        .then(() => {
          alert("Thanks For Registration💖");
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
      console.log("err");
      setForm(initialForm);

      //   setError("Check your inbox...");
      // } else if (userName === "" || email === "") {
      //   console.log("Seriously, You don't know anythig ? 😂😂");
      //   setError("Above fields are blank. 😶");
      // } else if (regex.test(email) === false) {
      //   setError("Please enter correct Email!");
    }
    // console.log(form);
  };
  return (
    <>
      <Gradient
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 168, 225, 1), rgba(255, 0, 0, 0))",
        }}
      />
      <div className="auth">
        <h1>{title}</h1>
        <form autoComplete={"off"}>
          {formArr.map(({ name, type, placeholder }, index) => {
            return (
              <input
                key={index}
                placeholder={placeholder}
                name={name}
                type={type}
                value={form[name]}
                onChange={(e) => handleChange(e)}
              />
            );
          })}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {submitBtn}
          </button>
          {/* <p>This is an error!</p> */}
        </form>
      </div>
    </>
  );
};
Form.defaultProps = {
  title: "Register",
  formArr: [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
    },
    {
      name: "Contact",
      placeholder: "Contact No.",
      type: "number",
    },
  ],
  submitBtn: "Register",
  redirect: null,
};

export default Form;
