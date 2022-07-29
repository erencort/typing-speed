import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResults = createAsyncThunk(
  "result/fetchResults",
  async () => {
    const response = await axios("http://localhost:5000/results");
    return response.data;
  }
);

export const saveResult = createAsyncThunk(
  "result/saveResult",
  async (data) => {
    const response = await axios.post("http://localhost:5000/saveResult", data);
    console.log(response.data);
    return response.data;
  }
);

export const leaderBoardSlice = createSlice({
  name: "leaderBoard",
  initialState: {
    results: [],
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchResults.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchResults.fulfilled]: (state, action) => {
      state.status = "succeed";
      //sorting by score
      action.payload.sort((a, b) => b.result - a.result);
      state.results = action.payload;
    },
    [fetchResults.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default leaderBoardSlice.reducer;
