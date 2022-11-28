import { createSlice } from "@reduxjs/toolkit";
import {
  getChartsDataAsync,
  getCountriesDataAsync,
  getFeaturesAsync,
} from "./services";

const covid19Slice = createSlice({
  name: "covid19",
  initialState: {
    chartData: [],
    features: [],
    status: "",
    selectCountry: null,
  },
  extraReducers: {
    [getChartsDataAsync.pending]: (state, action) => {
      state.status = "pending";
    },
    [getChartsDataAsync.fulfilled]: (state, action) => {
      state.chartData = action.payload;
      state.status = "succeeded";
    },
    [getChartsDataAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
    [getFeaturesAsync.pending]: (state, action) => {
      state.status = "pending";
    },
    [getFeaturesAsync.fulfilled]: (state, action) => {
      state.features = action.payload;
      state.status = "succeeded";
    },
    [getFeaturesAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
    [getCountriesDataAsync.pending]: (state, action) => {
      state.status = "pending";
    },
    [getCountriesDataAsync.fulfilled]: (state, action) => {
      state.selectCountry = action.payload;
      state.status = "succeeded";
    },
    [getCountriesDataAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});

export default covid19Slice.reducer;
