import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assest/data";
import { getLatAndLon, getWeather } from "./services";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Ankara",
    weatherData: data,
    selectItem: 0,
  },
  reducers: {
    addCity: (state, action) => {
      state.city = action.payload;
    },

    setSelectItem: (state, action) => {
      state.selectItem = action.payload;
    },
  },
  extraReducers: {
    [getWeather.pending]: (state, action) => {
      state.status = "pending";
    },
    [getWeather.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.weatherData = action.payload;
      state.status = "fulfilled";
    },
    [getWeather.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
  },
});

export const { setSelectItem, addCity } = weatherSlice.actions;
export const selectTodayData = (state) => {
  return state.weather.weatherData[0];
};
export const selectItemData = (state) => {
  return state.weather.weatherData[state.weather.selectItem];
};

export const selectWeeklyForecast = (state) => {
  return state.weather.weatherData.slice(1, 8);
};
export default weatherSlice.reducer;
