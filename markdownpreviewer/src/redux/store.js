import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./markdown/markdownSlice";

export const store = configureStore({
  reducer: {
    markdown: markdownReducer,
  },
});
