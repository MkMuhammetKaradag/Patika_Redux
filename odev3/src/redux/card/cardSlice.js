import { createSlice } from "@reduxjs/toolkit";
import { frameworks, shuffle } from "./service";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [...shuffle([...frameworks, ...frameworks])],
    openedFrameworks: [],
    TotalPoint: 0,
  },
  reducers: {
    selectCard: (state, action) => {
      const { name, index } = action.payload;
      const card = state.items.find((s, i) => i == index);
      card.close = false;

      state.openedFrameworks = [...state.openedFrameworks, { name, index }];
    },
    checkCards: (state) => {
      if (
        state.openedFrameworks[0].name == state.openedFrameworks[1].name &&
        state.openedFrameworks[0].index != state.openedFrameworks[1].index
      ) {
        state.items[state.openedFrameworks[0].index].complete = true;
        state.items[state.openedFrameworks[1].index].complete = true;
        state.TotalPoint += 50;
      } else {
        state.items[state.openedFrameworks[0].index].close = true;
        state.items[state.openedFrameworks[1].index].close = true;
        state.TotalPoint -= 10;
      }
      state.openedFrameworks = [];
    },
    resetGame: (state, action) => {
      state.TotalPoint = 0;
      state.openedFrameworks = [];
      state.items = [...shuffle([...frameworks, ...frameworks])];
    },
  },
});

export const { selectCard, checkCards, resetGame } = cardSlice.actions;
export const filteredCardComplated = (state) => {
  const filtered = state.card.items.filter((item) => item.complete == true);
  //   console.log(filtered);
  return filtered.length == state.card.items.length;
};
export default cardSlice.reducer;
