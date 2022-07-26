import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults, saveResult } from "../redux/leaderBordSlice";
import LeaderBoard from "./LeaderBoard";

function Result() {
  const correctWords = useSelector((state) => state.typing.successfulWords);
  const failedWords = useSelector((state) => state.typing.failedWords);
  const [userName, setUserName] = useState("");
  const [isResultSaved, setIsResultSaved] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      name: userName,
      result: correctWords.length,
    };
    dispatch(saveResult(data));
    setIsResultSaved(true);
  };
  return (
    <div>
      <div>
        <h1>Result</h1>
      </div>
      <div>
        <p>{correctWords.length + failedWords.length} words per minute</p>
        <p>Correct Words: {correctWords.length}</p>
        <p>Wrong Words: {failedWords.length}</p>
      </div>
      <div>Enter username to save your result.</div>
      <input
        value={userName}
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isResultSaved} onClick={handleSubmit}>
        Submit
      </button>
      <LeaderBoard />
    </div>
  );
}

export default Result;
