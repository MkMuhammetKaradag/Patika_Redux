import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChartsDataAsync = createAsyncThunk(
  "covid19/getChartsDataAsync",
  async () => {
    const res = await axios.get(`https://covid19.mathdro.id/api/confirmed`);
    return res.data.map((item) => {
      return { id: item.iso3, value: item.confirmed };
    });
  }
);
export const getCountriesDataAsync = createAsyncThunk(
  "covid19/getCountriesDataAsync",
  async ({ country }) => {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    return { ...res.data, country };
  }
);
export const getFeaturesAsync = createAsyncThunk(
  "covid19/getFeaturesAsync",
  async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json`
    );
    return res.data.features;
  }
);
