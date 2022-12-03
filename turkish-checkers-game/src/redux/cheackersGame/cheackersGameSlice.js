import { createSlice } from "@reduxjs/toolkit";

import {
  createBoard,
  gamePlayForNotSuper,
  thereIsForcedMove,
  gamePlayForSuper,
  clearBoard,
} from "../services/service";

const cheackersGameSlice = createSlice({
  name: "cheackerGame",
  initialState: {
    board: [...createBoard()],
    orderOfPlayers: 0,
    selectStone: null,
    selectMultiStone: null,
    isControl: false,
    selectedSquare: null,
    eater: null,
    eaten: null,
  },
  reducers: {
    setSelectStone: (state, action) => {
      state.selectStone = action.payload;
    },
    findMoves: (state, action) => {
      if (state.selectStone == null || state.isControl) return;
      if (state.selectStone.stone.isSuper) {
        gamePlayForSuper({
          board: state.board,
          selectStone: state.selectStone,
        });
      } else {
        gamePlayForNotSuper({
          board: state.board,
          selectStone: state.selectStone,
        });
      }
    },
    setMovingTheStone: (state, action) => {
      let index;
      let addIndex;
      let isDeleted = false;
      if (state.selectMultiStone) {
        state.selectStone = state.selectMultiStone.filter((s) => {
          if (s.i === action.payload.i || s.j === action.payload.j) {
            return true;
          }
        })[0];
      }
      index = state.selectStone.i * 8 + state.selectStone.j;
      addIndex = action.payload.i * 8 + action.payload.j;

      if (
        (action.payload.i === 7 &&
          state.selectStone.stone.bgColor === "bg-white") ||
        (action.payload.i === 0 &&
          state.selectStone.stone.bgColor === "bg-black")
      ) {
        state.selectStone.stone.isSuper = true;
      }

      state.selectedSquare = state.board[addIndex];
      state.board[index].stone = null;
      state.board[addIndex].stone = state.selectStone.stone;
      state.selectMultiStone = null;
      state.orderOfPlayers = state.orderOfPlayers == 0 ? 1 : 0;

      let eatenStoneI =
        state.selectStone.i > state.selectedSquare.i
          ? state.selectedSquare.i + 1
          : state.selectStone.i == state.selectedSquare.i
          ? state.selectedSquare.i
          : state.selectedSquare.i - 1;
      let eatenStonej =
        state.selectStone.j > state.selectedSquare.j
          ? state.selectedSquare.j + 1
          : state.selectStone.j == state.selectedSquare.j
          ? state.selectedSquare.j
          : state.selectedSquare.j - 1;
      console.log(eatenStoneI, eatenStonej);

      isDeleted = clearBoard({
        board: state.board,
        selectedSquare: state.selectedSquare,
        eatenStone: eatenStoneI * 8 + eatenStonej,
      });
      state.selectStone = null;
      if (isDeleted) {
        state.orderOfPlayers = state.orderOfPlayers == 0 ? 1 : 0;
      }
      state.selectedSquare = null;

      let { eater, eaten } = thereIsForcedMove(
        state.board,
        state.orderOfPlayers
      );

      if (eater.length > 0) {
        state.isControl = true;
        state.selectMultiStone = eater;
        state.eater = eater;
        state.eaten = eaten;
      } else {
        state.eater = null;
        state.eaten = null;
        state.isControl = false;
      }
    },
  },
});

export const { setSelectStone, findMoves, setMovingTheStone } =
  cheackersGameSlice.actions;
export default cheackersGameSlice.reducer;
