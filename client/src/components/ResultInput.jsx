import { useState } from "react";
import LeaderBoard from "./LeaderBoard";
import { fetchResults, saveResult } from "../redux/leaderBordSlice";
import { useDispatch, useSelector } from "react-redux";

function ResultInput() {
  const [userName, setUserName] = useState("");
  const [isResultSaved, setIsResultSaved] = useState(false);
  const dispatch = useDispatch();
  const correctWords = useSelector((state) => state.typing.successfulWords);

  const handleSubmit = async () => {
    const data = {
      name: userName,
      result: correctWords.length,
    };
    await dispatch(saveResult(data));
    dispatch(fetchResults());
    setIsResultSaved(true);
  };

  return (
    <div className="result-input">
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

export default ResultInput;
