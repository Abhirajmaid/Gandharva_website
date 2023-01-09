import React, { useState } from "react";
import Gradient from "../Gradient/Gradient";
import "./style.css";

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
    console.log(form);
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
          <p>This is an error!</p>
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
      name: "email",
      placeholder: "Email",
      type: "text",
    },
  ],
  submitBtn: "Register",
  redirect: null,
};

export default Form;
