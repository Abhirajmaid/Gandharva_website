import React from "react";
import "./style.css";

function Timer({ timerDays, timerHours, timerMinutes }) {
  return (
    <div className="timer">
      <div className="days">
        <p className="dnum">{timerDays}</p>
        <div className="dfoot">Days</div>
      </div>

      <div className="hours">
        <p className="hnum">{timerHours}</p>
        <div className="hfoot">Hours</div>
      </div>

      <div className="minutes">
        <p className="mnum">{timerMinutes}</p>
        <div className="mfoot">Minutes</div>
      </div>
    </div>
  );
}

Timer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
};
export default Timer;
