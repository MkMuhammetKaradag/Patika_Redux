import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    selectColor: "#f44e3b",
    searchText: "",
    searchType: true,
  },
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ description, bgColor }) => {
        console.log(description);
        return {
          payload: {
            id: nanoid(),
            description,
            bgColor,
          },
        };
      },
    },
    setSelectColor: (state, action) => {
      state.selectColor = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
});
export const { addItem, setSelectColor, setSearchText, setSearchType } =
  notesSlice.actions;
export const selectFilteredNotes = (state) => {
  const filtered = state.notes.items.filter((item) => {
    if (
      state.notes.searchType &&
      item.description.includes(state.notes.searchText)
    ) {
      console.log("filtered");

      return item;
    } else if (
      !state.notes.searchType &&
      item.bgColor == state.notes.selectColor
    ) {
      console.log(item.description.includes(state.notes.searchText));
      return item;
    }
  });
  console.log(filtered);
  return filtered;
};
export default notesSlice.reducer;
