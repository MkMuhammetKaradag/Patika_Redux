import { configureStore } from "@reduxjs/toolkit";
import cheackersGameReducer from "./cheackersGame/cheackersGameSlice";

export const store = configureStore({
  reducer: {
    cheackerGame: cheackersGameReducer,
  },
});
