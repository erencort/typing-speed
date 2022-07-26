import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults } from "../redux/leaderBordSlice";

function LeaderBoard() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.leaderBoard.results);
  const status = useSelector((state) => state.leaderBoard.status);
  useEffect(() => {
    dispatch(fetchResults());
    console.log(results);
    console.log(status);
  }, [dispatch]);
  return (
    <div>
      <div>LeaderBoard</div>
      <div>
        <ul>
          {results.map((item) => {
            return (
              <li>
                <div>
                  <div>{item.name}</div>
                  <div>{item.result}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeaderBoard;
