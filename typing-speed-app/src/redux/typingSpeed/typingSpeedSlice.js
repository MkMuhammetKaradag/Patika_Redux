import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data";

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    words: data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value),
    language: "Turkish",
    getRange: 0,
    correctNumbers: [],
    wrongNumbers: [],
    started: false,
    finished: false,
    time: 60,
  },
  reducers: {
    resetGame: (state, action) => {
      state.words = data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      state.getRange = 0;
      state.correctNumbers = [];
      state.wrongNumbers = [];
      state.started = false;

      state.finished = false;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    getNextWords: (state, action) => {
      state.getRange += 1;
    },
    setStarted: (state, action) => {
      state.started = action.payload;
    },
    setFinished: (state, action) => {
      state.finished = action.payload;
    },
    setWrongNumber: (state, action) => {
      state.words[
        Number(action.payload.index) + state.getRange * 30
      ].change = false;
      state.wrongNumbers.push({
        text: action.payload.text,
        answer: action.payload.answer,
      });
    },
    setCorrectNumber: (state, action) => {
      state.words[
        Number(action.payload.index) + state.getRange * 30
      ].change = true;
      state.correctNumbers.push(action.payload.text);
    },
  },
});

export const getSpeedWordNext = (state) => {
  const data = state.typingSpeed.words
    .slice(
      state.typingSpeed.getRange * 30,
      state.typingSpeed.getRange * 30 + 30
    )
    .map((s) => {
      if (state.typingSpeed.language == "Turkish") {
        return {
          text: s.Turkish,
          change: s.change,
        };
      } else {
        return {
          text: s.English,
          change: s.change,
        };
      }
    });
  return data;
};

export const getTextResults = (state) => {
  const trueWords = state.typingSpeed.correctNumbers;
  const falseWord = state.typingSpeed.wrongNumbers;
  return {
    trueWords,
    falseWord,
  };
};

export const {
  getNextWords,
  setFinished,
  setStarted,
  setWrongNumber,
  setCorrectNumber,
  resetGame,
  setLanguage,
} = typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;
