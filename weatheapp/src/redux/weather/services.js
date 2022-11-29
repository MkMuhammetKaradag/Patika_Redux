import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async ({ city }) => {
    console.log(`asa`);
    console.log("geldiasasas", process.env.REACT_APP_WEATHER_KEY);
    const res = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_GEO_KEY}`
    );

    // console.log("geldiasasas", process.env.REACT_APP_WEATHER_KEY);
    const resData = await axios({
      method: "GET",
      url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
      params: { lat: res.data[0].lat, lon: res.data[0].lon },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_WEATHER_KEY}`,
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    });
    console.log(res);
    return resData.data.data;
  }
);
