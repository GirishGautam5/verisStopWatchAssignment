import React, { useRef, useState } from "react";
import "./styles.css";
export default function Timer(props) {
  const { appData, initialState } = props;

  const [timer, setTime] = useState(initialState);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const useCount = useRef(null);
  const onClickhandler = () => {
    setIsTimerStart(true);
    setIsPaused(true);
    useCount.current = setInterval(() => {
      setTime((timer) => (timer > 0 ? timer - 1 : timer));
    }, 1000);
  };
  const stophandler = () => {
    clearInterval(useCount.current);
  };
  const pauseHandler = () => {
    clearInterval(useCount.current);
    setIsPaused(false);
  };
  const continuehandler = () => {
    setIsPaused(true);
    useCount.current = setInterval(() => {
      setTime((timer) => timer - 1);
    }, 1000);
  };
  const resethandler = () => {
    clearInterval(useCount.current);
    setIsTimerStart(false);
    setIsPaused(false);
    setTime(initialState);
  };
  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <div>
      <h1 className="time">{formatTime(timer)}</h1>
      <div className="row">
        {!isTimerStart && !isPaused ? (
          <button className="btn start-button" onClick={onClickhandler}>
            {appData.startButton}
          </button>
        ) : (
          <button
            className="btn start-button pause-button "
            onClick={pauseHandler}
          >
            Pause
          </button>
        )}

        <button className="btn start-button stop-button" onClick={stophandler}>
          {appData.stopButton}
        </button>

        <button
          className="btn start-button continue-button"
          onClick={continuehandler}
        >
          {appData.continueButton}
        </button>
        <button
          className="btn start-button reset-button"
          onClick={resethandler}
        >
          {appData.resetButton}
        </button>
      </div>
    </div>
  );
}
