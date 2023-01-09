import React, { useState, useEffect } from "react";
import "./style.css";
import Timer from "../Timer/Timer";
import { Link } from "react-router-dom";

function Hero() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Jan 23, 2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="hero">
      <div className="hero_content">
        <div className="hero_txt">
          <span className="d_txt">GANDHARVA</span>
          <br /> LET's START THE PARTY!
        </div>
        {/* <span className="slogan">Slogan Goes here!</span> */}
        <div className="timing">
          LIVE IN PUNE <br /> FROM JAN 26-29, 2023
        </div>
        <div className="register_btn">
          <Link to="/events">
            <button>Register for Events</button>
          </Link>
          <a href="/" className="sch_btn">
            Event Schedule
          </a>
        </div>

        <div className="counter">
          <Timer
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
