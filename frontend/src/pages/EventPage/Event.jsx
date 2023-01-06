import React, { useState } from "react";
import Gradient from "../../components/Gradient/Gradient";
// import { Icon } from "@iconify/react";
import EventsData from "../../Data/EventsData";
import { Link } from "react-router-dom";
import "./style.css";

const Event = () => {
  const [hovered, setHovered] = useState(false);
  const [events, setEvents] = useState(EventsData);

  // hover check func
  const toggleHover = () => setHovered(!hovered);

  //filter data func
  const filterData = (dept) => {
    const updatedData = EventsData.filter((event) => {
      return event.Dept === dept;
    });
    setEvents(updatedData);
  };

  return (
    <>
      <div className="page_container">
        <Gradient
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 168, 225, 1), rgba(255, 0, 0, 0))",
          }}
        />
        <h1 className="title">EVENTS AND SCHEDULE</h1>
        <div className="event_container">
          <div className="dept_col">
            <button className="dept" onClick={() => filterData("CS")}>
              CS DEPT
            </button>
            <button className="dept" onClick={() => filterData("IT")}>
              IT DEPT
            </button>
            <button className="dept" onClick={() => filterData("AIDS")}>
              AIDS DEPT
            </button>
            <button className="dept" onClick={() => filterData("EnTC")}>
              EnTC DEPT
            </button>
            <button className="dept" onClick={() => filterData("MECH")}>
              MECH DEPT
            </button>
            <button className="dept" onClick={() => filterData("CIVIL")}>
              CIVIL DEPT
            </button>
          </div>
          <div className="event_col">
            <div className="events">
              {events.map((event) => (
                <Link to="/register">
                  <div
                    className="event"
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                  >
                    <div className="event_overlay"></div>
                    <img src={event.EventPoster} alt="gandharva" />
                    <div className="event_info">
                      <div className="date">{event.DateTime}</div>
                      <h4 className="event_title">{event.EventName}</h4>
                      <p className="event_des">{event.Description}</p>
                      {/* {hovered && (
                        <p className="event_des">{event.Description}</p>
                      )} */}
                      {/* <p className={hovered ? "event_des" : "event_des hide"}>
                        {event.Description}
                      </p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
