import React, { useEffect, useState } from "react";
import randomWords from "random-words";
import { useDispatch, useSelector } from "react-redux";
import { setWords } from "../redux/wordSlice";

function Words() {
  //   const [words, setWords] = useState([]);
  const words = useSelector((state) => state.typing.words);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWords());
  }, []);

  return (
    <div className="words-section">
      {words.map((item) => (
        <p className="word">{item}</p>
      ))}
    </div>
  );
}

export default Words;
