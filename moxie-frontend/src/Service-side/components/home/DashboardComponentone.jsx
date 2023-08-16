import React from "react";
import "./dashboardcomponentone.css";
import data from "../../../data/data.json";
const DashboardComponentone = () => {
  return (
    <div className="learn-main-container">
      <div className="learn-wrapper">
        {data.map((e) => (
          <div className="learn-first-div">
            <div className="key-q">
              <div className="l-num">{e.key}</div>
              <div className="l-para-que">{e.question}</div>
            </div>
            <div className="l-para-ans">{e.ans}</div>
          </div>
        ))}
        <div className="learn-second-div"></div>
      </div>
    </div>
  );
};

export default DashboardComponentone;
