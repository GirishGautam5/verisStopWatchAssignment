import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataList } from "./actions/timerAction";
import MountainClimber from "./MountainClimber/MountainClimber";
import Plank from "./Plank/Plank";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const timerData = useSelector((state) => state.dataList);
  const { appData } = timerData;
  useEffect(() => {
    dispatch(dataList());
  }, [dispatch]);
  return (
    <div>
      <h1 className="main-heading">{appData.heading}</h1>
      <MountainClimber appData={appData} />
      <Plank appData={appData}/>
    </div>
  );
}
