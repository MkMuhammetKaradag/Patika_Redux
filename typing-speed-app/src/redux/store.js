import { configureStore } from "@reduxjs/toolkit";
import speedReducer from "./typingSpeed/typingSpeedSlice";
export const store = configureStore({
  reducer: {
    typingSpeed: speedReducer,
  },
});
