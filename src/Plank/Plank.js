import React from "react";
import Timer from "../Timer/Timer";
import "./styles.css";
export default function Plank(props) {
  const { appData } = props;
  const initialState = 60;
  return (
    <div className="plank-area">
      <div className="container-fluid">
        <span>
          <img className="plank-img" src={appData.plankImage} alt="Car"></img>
        </span>
        <div className="plank-text">
          <h2>{appData.plankHeading} </h2>
          <p>{appData.plankMessage}</p>
          <Timer appData={appData} initialState={initialState} />
        </div>
      </div>
    </div>
  );
}
