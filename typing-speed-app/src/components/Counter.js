import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFinished, setStarted } from "../redux/typingSpeed/typingSpeedSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const gametime = useSelector((s) => s.typingSpeed.time);
  const [time, setTime] = useState(gametime);

  const countDown = () => {
    setTimeout(() => setTime((prev) => prev - 1), 1000);
  };
  const isStarted = useSelector((s) => s.typingSpeed.started);
  useEffect(() => {
    if (isStarted === true) {
      time !== 0 && countDown();
    } else {
      setTime(gametime);
    }

    if (time === 0) {
      dispatch(setFinished(true));
      dispatch(setStarted(false));
    }
  }, [isStarted, time]);

  return <div>{time}</div>;
};

export default Counter;
