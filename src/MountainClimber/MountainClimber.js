import React from "react";
import "./styles.css";
import Timer from "../Timer/Timer";
export default function MountainClimber(props) {
  const { appData } = props;
  const initialState = 30;
  return (
    <div className="mountain-area">
      <div className="container-fluid">
        <div className="mountain-text">
          <h2>{appData.MountainClimberHeading}</h2>
          <p>{appData.MountainClimberMessage}</p>
          <Timer appData={appData} initialState={initialState} />
        </div>
        <span>
          <img
            className="car-img"
            src={appData.mountainClimberImage}
            alt="Car"
          ></img>
        </span>
      </div>
    </div>
  );
}
