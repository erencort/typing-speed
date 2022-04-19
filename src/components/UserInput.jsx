import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountdown } from "../redux/wordSlice";

function UserInput() {
  const dispatch = useDispatch();
  const countdown = useSelector((state) => state.typing.countdown);
  const start = () => {
    const interval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(interval);
      } else {
        dispatch(setCountdown());
      }
    }, 1000);
    if (countdown === 0) {
      clearInterval(interval);
    }
  };

  return (
    <div>
      <input type="text" />
      <button onClick={start}>Start</button>
    </div>
  );
}

export default UserInput;
