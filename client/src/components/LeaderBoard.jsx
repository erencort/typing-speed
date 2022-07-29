import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults } from "../redux/leaderBordSlice";

function LeaderBoard() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.leaderBoard.results);
  const status = useSelector((state) => state.leaderBoard.status);
  const error = useSelector((state) => state.leaderBoard.error);
  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  if (status === "failed") {
    return <div>an error occurred: {error}</div>;
  }

  return (
    <div className="leaderboard">
      <h3>LeaderBoard</h3>
      <div>
        {status === "loading" ? (
          <div>Loading...</div>
        ) : (
          results.map((item) => {
            return (
              <li key={item._id} className="leaderboard-list-item">
                <div>
                  <div className="leaderboard-list-name">{item.name}</div>
                  <div className="leaderboard-list-result">{item.result}</div>
                </div>
              </li>
            );
          })
        )}
      </div>
    </div>
  );
}

export default LeaderBoard;

/*  */
