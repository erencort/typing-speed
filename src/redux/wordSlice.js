import { createSlice } from "@reduxjs/toolkit";
import randomWords from "random-words";

export const wordSlice = createSlice({
  name: "typing",
  initialState: {
    words: [],
    countdown: 60,
    userInput: "",
    word: "",
    turn: 0,
    success: 0,
    failed: 0,
    status: "firstMounted",
    playedTimes: 0,
  },
  reducers: {
    setWords: (state, action) => {
      state.words = randomWords(200);
      state.word = state.words[0];
    },
    setCountdown: (state, action) => {
      state.countdown = state.countdown - 1;
      if (state.countdown <= 0) {
        state.status = "finished";
      }
    },
    setStart: (state, action) => {
      state.playedTimes = state.playedTimes + 1;
      if (state.playedTimes >= 2) {
        state.words = randomWords(200);
        state.word = state.words[0];
      }
      state.countdown = 60;
      state.turn = 0;
      state.success = 0;
      state.failed = 0;
      state.status = "running";
    },
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    compareWords: (state, action) => {
      if (state.userInput === state.word) {
        state.success = state.success + 1;
      } else {
        state.failed = state.failed + 1;
      }
      state.turn = state.turn + 1;
      state.word = state.words[state.turn];
    },
  },
});

export default wordSlice.reducer;
export const { setWords, setCountdown, setUserInput, compareWords, setStart } =
  wordSlice.actions;
