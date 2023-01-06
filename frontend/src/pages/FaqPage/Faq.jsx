import React from "react";
import FaqCom from "../../components/Faq/FaqCom";
import Gradient from "../../components/Gradient/Gradient";
const Faq = () => {
  return (
    <>
      <div className="page_container">
        <Gradient
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 199, 20, 1), rgba(255, 0, 0, 0))",
          }}
        />
        <h1 className="title">FAQ's</h1>
        <FaqCom />
      </div>
    </>
  );
};

export default Faq;
