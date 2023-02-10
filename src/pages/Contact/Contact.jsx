import React from "react";
import { Icon } from "@iconify/react";
import Gradient from "../../components/Gradient/Gradient";
// import { Link } from "react-router-dom";
import ContactData from "../../Data/ContactData";
import "./style.css";

const Contact = () => {
  return (
    <>
      <div className="page_container">
        <Gradient
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(227, 0, 164, 1), rgba(255, 0, 0, 0))",
          }}
        />
        <h1 className="title">Contact Our Team</h1>
        <div className="contacts">
          {ContactData.map((contact) => (
            <div className="contact" key={contact.id}>
              <div className="overlay"></div>
              <img src={contact.Profile} alt="" />
              <div className="info">
                <div className="cont_name">{contact.Name}</div>
                <div className="cont_socials">
                  <a href={contact.Insta} target="_blank" rel="noreferrer">
                    <Icon className="cont_social" icon="ph:instagram-logo" />
                  </a>
                  <a href={contact.Linkedin} target="_blank" rel="noreferrer">
                    <Icon className="cont_social" icon="il:linkedin" />
                  </a>
                  <a
                    href={contact.Whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      className="cont_social"
                      icon="mdi:whatsapp"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
