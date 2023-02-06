import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EventsData from "../../Data/EventsData";
import "./style.css";
import { Icon } from "@iconify/react";

const SingleEvent = () => {
  const [event, setEvent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const updateEvent = EventsData.filter((item) => {
      return item.id === id;
    });
    setEvent(updateEvent[0]);
  }, []);
  // console.log(event);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      document.location.reload();
    }, 700);
  };
  return (
    <>
      <div className="event_banner">
        <div className="banner_overlay"></div>
        <img src={event.EventBanner} alt="" />
        <div className="single_info">
          <date>{event.Date}</date>
          <h3>{event.EventName}</h3>
        </div>
      </div>
      <div className="info_nav">
        <ul>
          <li>Description</li>
          <li>Date and Time</li>
          <li>Location</li>
          <li>About the Host</li>
        </ul>
        <div className="event_reg">
          <div className="reg_sec">
            <span>Entry Fee :</span>
            <p>Rs. {event.EntryFee}/-</p>
          </div>
          <div className="reg_sec" style={{ height: "90px" }}>
            <Link className="reg_link" to={`/event/reg/${event.id}`}>
              <button>Register Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="page_container">
        <div className="event_page">
          <div className="event_reg_1">
            <div className="reg_sec">
              <span>Entry Fee :</span>
              <p>Rs. {event.EntryFee}/peron</p>
            </div>
            <div className="reg_sec" style={{ height: "90px" }}>
              <Link className="reg_link" to={`/event/reg/${event.id}`}>
                <button>Register Now</button>
              </Link>
            </div>
          </div>
          <div className="info_container">
            <div className="info_section">
              <h2>Description</h2>
              <p>{event.Description}</p>
            </div>
            <div className="info_section">
              <h2>Date and Time</h2>
              <span className="dateTime_box">
                {event.DateWord}
                <br />
                {event.Time}
              </span>
            </div>
            <div className="info_section">
              <h2>Location</h2>
              <div style={{ display: "flex", gap: "10px" }}>
                <Icon
                  className="cont_social"
                  icon="material-symbols:location-on-rounded"
                />
                <p>{event.Location}</p>
              </div>
            </div>
            <div className="info_section">
              <h2>About the Host</h2>
              <div style={{ display: "flex", gap: "20px", height: "100%" }}>
                <span className="host_bg">{event.EventHost}</span>
                <span className="host_bg">
                  <span style={{ fontWeight: "300" }}>Organizing Dept: </span>
                  <br />
                  {event.Dept}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="other_event_container">
            <div className="other_events">
              <h2>Other Events: </h2>
              {EventsData.map((event) => {
                return (
                  <Link to={`/event/${event.id}`}>
                    <div className="other_event_card" onClick={() => toTop()}>
                      <img src={event.EventPoster} alt="" />
                      <div className="other_event_title_bg">
                        <h4>{event.EventName}</h4>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
