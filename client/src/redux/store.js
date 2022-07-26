import { configureStore } from "@reduxjs/toolkit";
import leaderBoardSlice from "./leaderBordSlice";
import wordSlice from "./wordSlice";

export const store = configureStore({
  reducer: {
    typing: wordSlice,
    leaderBoard: leaderBoardSlice,
  },
});
