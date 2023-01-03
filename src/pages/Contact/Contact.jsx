import React from "react";
import { Icon } from "@iconify/react";
import Gradient from "../../components/Gradient/Gradient";
import { Link } from "react-router-dom";
import "./style.css";
const contacts = [
  {
    id: "1",
    Name: "Abhiraj Maid",
    Profile:
      "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    Insta: "https://instagram.com/abhirajmaid",
    Email: "abhirajmaid050@gmail.com",
    Whatsapp: "https://wa.me/917385302967",
  },
  {
    id: "3",
    Name: "Abhiraj Maid",
    Profile:
      "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    Insta: "https://instagram.com/abhirajmaid",
    Email: "abhirajmaid050@gmail.com",
    Whatsapp: "https://wa.me/917385302967",
  },
  {
    id: "2",
    Name: "Abhiraj Maid",
    Profile:
      "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    Insta: "https://instagram.com/abhirajmaid",
    Email: "abhirajmaid050@gmail.com",
    Whatsapp: "https://wa.me/917385302967",
  },
  {
    id: "4",
    Name: "Abhiraj Maid",
    Profile:
      "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    Insta: "https://instagram.com/abhirajmaid",
    Email: "abhirajmaid050@gmail.com",
    Whatsapp: "https://wa.me/917385302967",
  },
];

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
          {contacts.map((contact) => (
            <div className="contact" key={contact.id}>
              <div className="overlay"></div>
              <img src={contact.Profile} alt="" />
              <div className="info">
                <div className="cont_name">{contact.Name}</div>
                <div className="cont_socials">
                  <a href={contact.Insta} target="_blank" rel="noreferrer">
                    <Icon className="cont_social" icon="ph:instagram-logo" />
                  </a>
                  <a href={contact.Whatsapp} target="_blank" rel="noreferrer">
                    <Icon className="cont_social" icon="ic:baseline-whatsapp" />
                  </a>
                  <a
                    href={`mailto:${contact.Email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      className="cont_social"
                      icon="material-symbols:mail-outline-rounded"
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
