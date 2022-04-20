import React, { useEffect, useState } from "react";
import randomWords from "random-words";
import { useDispatch, useSelector } from "react-redux";
import { setWords } from "../redux/wordSlice";

function Words() {
  //   const [words, setWords] = useState([]);
  const words = useSelector((state) => state.typing.words);
  const activeWord = useSelector((state) => state.typing.activeWord);
  const failedWords = useSelector((state) => state.typing.failedWords);
  const successfulWords = useSelector((state) => state.typing.successfulWords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWords());
  }, []);

  return (
    <div className="words-section">
      {words.map((item, i) => (
        <p
          key={i}
          className={`word ${activeWord == item ? "background" : ""} ${
            failedWords.includes(item) ? "failed" : ""
          } ${successfulWords.includes(item) ? "successful" : ""}`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default Words;
