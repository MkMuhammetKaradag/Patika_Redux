import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTextAsync = createAsyncThunk(
  "textGenerator/getTextAsync",
  async ({ count, format }) => {
    const res = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${format}`
    );
    console.log(res);
    return res.data;
  }
);
