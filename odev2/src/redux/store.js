import { configureStore } from "@reduxjs/toolkit";
import purchaseSlice from "./purchase/purchaseSlice";
export const store = configureStore({
  reducer: {
    purchase: purchaseSlice,
  },
});
