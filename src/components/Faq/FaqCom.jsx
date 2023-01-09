import React, { useState } from "react";
import FaqData from "../../Data/FaqData";
import "./style.css";

const FaqCom = () => {
  const [Slected, setSlected] = useState(null);

  const toggle = (i) => {
    if (Slected === i) {
      return setSlected(null);
    }
    setSlected(i);
  };
  return (
    <div className="faq-wrapper">
      <div className="faq-wrapper__card">
        {FaqData.map((item, i) => {
          return (
            <div className="faq-indvidual__container">
              <div
                className="faq-indvidual__question"
                onClick={() => {
                  toggle(i);
                }}
              >
                <div>{item.question}</div>
                <h3>{Slected === i ? "-" : "+"}</h3>
              </div>
              <div className={Slected === i ? "answer show" : "answer"}>
                <h5 className="answer-text">{item.answer}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqCom;
