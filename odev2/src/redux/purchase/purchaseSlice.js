import { createSlice } from "@reduxjs/toolkit";

import { products } from "../../data";
export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    totalMoney: 100000000000,
    invoice: [...products],
  },
  reducers: {
    updateInovice: (state, action) => {
      const { amount, id } = action.payload;
      console.log(amount, id);
      const item = state.invoice.find((item) => item.id === id);
      let price = (item.amount - amount) * item.price;
      item.amount = amount;
      console.log(item.amount - amount);
      state.totalMoney += price;
    },
  },
});

export const { updateInovice } = purchaseSlice.actions;
export const filteredInvoice = (state) => {
  const filtered = state.purchase.invoice.filter((item) => item.amount > 0);
  //   console.log(filtered);
  return filtered;
};
export default purchaseSlice.reducer;
