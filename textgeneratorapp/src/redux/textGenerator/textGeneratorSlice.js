import { createSlice } from "@reduxjs/toolkit";
import { getTextAsync } from "./services";

export const textGeneratorSlice = createSlice({
  name: "textGenerator",
  initialState: {
    item: "",
    format: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getTextAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTextAsync.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    },
    [getTextAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default textGeneratorSlice.reducer;
