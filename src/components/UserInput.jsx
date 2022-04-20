import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountdown,
  setUserInput,
  compareWords,
  setStart,
} from "../redux/wordSlice";

function UserInput() {
  const dispatch = useDispatch();
  const countdown = useSelector((state) => state.typing.countdown);
  const failed = useSelector((state) => state.typing.failed);
  const success = useSelector((state) => state.typing.success);
  const word = useSelector((state) => state.typing.word);
  const status = useSelector((state) => state.typing.status);
  const [inputIsDisabled, setInputIsDisabled] = useState();
  const [buttonIsDisabled, setButtonIsDisabled] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    status === "finished" || status === "firstMounted"
      ? setInputIsDisabled(true)
      : setInputIsDisabled(false);
    status === "running"
      ? setButtonIsDisabled(true)
      : setButtonIsDisabled(false);
  }, [status]);

  const start = () => {
    const interval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(interval);
      } else {
        dispatch(setCountdown());
      }
    }, 1000);
    if (countdown < 0) {
      clearInterval(interval);
    }
    dispatch(setStart());
  };

  const compareWordsHandle = (e) => {
    e.preventDefault();
    dispatch(setUserInput(inputValue));
    if (inputValue != "") {
      dispatch(compareWords());
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => compareWordsHandle(e)}>
        <input
          disabled={inputIsDisabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <button disabled={buttonIsDisabled} onClick={start}>
        Start
      </button>
      {failed} {word} {success}
    </div>
  );
}

export default UserInput;
