import { createSlice } from "@reduxjs/toolkit";
import randomWords from "random-words";

export const wordSlice = createSlice({
  name: "typing",
  initialState: {
    words: [],
    countdown: 60,
  },
  reducers: {
    setWords: (state, action) => {
      state.words = randomWords(200);
    },
    setCountdown: (state, action) => {
      state.countdown = state.countdown - 1;
    },
  },
});

export default wordSlice.reducer;
export const { setWords, setCountdown } = wordSlice.actions;
