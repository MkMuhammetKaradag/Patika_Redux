import { configureStore } from "@reduxjs/toolkit";
import covid19educer from "./covid19/covid19TrackerSlice";

export const store = configureStore({
  reducer: {
    covid19: covid19educer,
  },
});
