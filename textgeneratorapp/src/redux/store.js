import { configureStore } from "@reduxjs/toolkit";
import textGeneratorReducer from "./textGenerator/textGeneratorSlice";
export const store = configureStore({
  reducer: {
    textGenerator: textGeneratorReducer,
  },
});
