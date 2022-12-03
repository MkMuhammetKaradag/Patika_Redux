import { nanoid } from "@reduxjs/toolkit";

export const createStone = (j) => {
  if (j === 2 || j === 1)
    return {
      id: nanoid(),
      bgColor: "bg-white",
      type: 0,
      isSuper: false,
      eater: false,
      eaten: false,
    };
  else if (j === 6 || j === 5)
    return {
      id: nanoid(),
      bgColor: "bg-black",
      type: 1,
      eater: false,
      eaten: false,
      isSuper: false,
    };
  return null;
};

export const createBoard = () => {
  const board = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push({
        id: nanoid(),
        j,
        i,
        playable: false,
        moveable: false,
        startingCell: false,
        reached: false,
        bgColor: (j + i) % 2 == 0 ? "bg-slate-500 " : "bg-stone-400",
        stone: createStone(i),
      });
    }
  }
  return board;
};

export const gamePlayForNotSuper = (data) => {
  const { board, selectStone } = data;
  board.map((s, index) => {
    if (
      selectStone.i + (selectStone.stone.bgColor == "bg-white" ? 1 : -1) ===
        s.i &&
      selectStone.j === s.j &&
      !s.stone
    ) {
      s.playable = true;
    } else if (selectStone.j - 1 === s.j && selectStone.i === s.i && !s.stone) {
      s.playable = true;
    } else if (selectStone.j + 1 === s.j && selectStone.i === s.i && !s.stone) {
      s.playable = true;
    } else {
      s.playable = false;
    }
  });
};

export const clearBoard = ({ board, selectedSquare, eatenStone }) => {
  let isDeleted = false;
  board.map((s, index) => {
    s.playable = false;
    if (s.stone) {
      if (s.stone.eaten && index === eatenStone) {
        isDeleted = true;
        delete board[index].stone;
      } else {
        s.stone.eaten = false;
        s.stone.eater = false;
      }
    }
    selectedSquare.itemDeleted = null;
  });
  return isDeleted;
};
export const gamePlayForSuper = ({ selectStone, board }) => {
  const rowControl = [];
  const colControl = [];
  board.map((s) => {
    s.playable = false;
    if (s.j == selectStone.j) {
      rowControl.push(s);
    }
    if (s.i == selectStone.i) {
      colControl.push(s);
    }
  });
  let stoneBack = false;
  for (let index = selectStone.i - 1; index >= 0; index--) {
    let cell = rowControl[index];
    if (!stoneBack && !cell.stone) cell.playable = true;
    else stoneBack = true;
  }
  stoneBack = false;
  for (let index = selectStone.i + 1; index < rowControl.length; index++) {
    let cell = rowControl[index];
    if (!stoneBack && !cell.stone) cell.playable = true;
    else stoneBack = true;
  }

  stoneBack = false;
  for (let index = selectStone.j - 1; index >= 0; index--) {
    let cell = colControl[index];
    if (!stoneBack && !cell.stone) cell.playable = true;
    else stoneBack = true;
  }
  stoneBack = false;
  for (let index = selectStone.j + 1; index < colControl.length; index++) {
    let cell = colControl[index];
    if (!stoneBack && !cell.stone) cell.playable = true;
    else stoneBack = true;
  }
};

const fourDirectionsForcedMove = (board, currentUser, stone) => {
  if (!stone.stone.isSuper) {
    return board.filter((s) => {
      if (
        (((s.j === stone.j + 1 || s.j === stone.j - 1) && s.i === stone.i) ||
          ((s.i === stone.i - 1 || s.i === stone.i + 1) && s.j === stone.j)) &&
        s.stone &&
        s.stone.type !== currentUser
      ) {
        if (s.j === stone.j + 1) {
          return theBackBlank(board, s.i, s.j + 1, stone, s);
        } else if (s.j == stone.j - 1) {
          return theBackBlank(board, s.i, s.j - 1, stone, s);
        } else if (s.i === stone.i - 1) {
          return theBackBlank(board, s.i - 1, s.j, stone, s);
        } else {
          return theBackBlank(board, s.i + 1, s.j, stone, s);
        }
      }
    });
  } else {
    return theBackBlankSuper(board, currentUser, stone);
  }
};
const theBackBlank = (board, i, j, stone, s) => {
  const isplayable =
    j <= 7 && j >= 0 && board[i * 8 + j] && !board[i * 8 + j].stone;
  if (isplayable) {
    board[i * 8 + j].playable = isplayable;
    stone.stone.eater = true;
    s.stone.eaten = true;
  }
  return isplayable;
};

const theBackBlankSuper = (board, currentUser, stone) => {
  const rowControl = [];
  const colControl = [];
  const selectStone = [];
  board.map((s) => {
    if (s.j == stone.j) {
      rowControl.push(s);
    }
    if (s.i == stone.i) {
      colControl.push(s);
    }
  });

  let stoneBack = [];
  for (let index = 0; index <= stone.i; index++) {
    let cell = rowControl[index];
    if (cell.stone && cell.stone.type !== currentUser && index <= stone.i) {
      if (
        board[(cell.i - 1) * 8 + cell.j] &&
        !board[(cell.i - 1) * 8 + cell.j].stone &&
        (!board[(cell.i + 1) * 8 + cell.j].stone ||
          board[(cell.i + 1) * 8 + cell.j].stone.type !== cell.stone.type)
      ) {
        stoneBack.push(board[(cell.i - 1) * 8 + cell.j]);
        stone.stone.eater = true;
        cell.stone.eaten = true;
        selectStone.push(stone);
      }
    }
  }
  if (stoneBack.length > 0) {
    stoneBack[stoneBack.length - 1].playable = true;
  }
  stoneBack = [];
  for (let index = stone.i + 1; index < rowControl.length; index++) {
    let cell = rowControl[index];
    if (cell.stone && cell.stone.type !== currentUser && index > stone.i) {
      if (
        board[(cell.i + 1) * 8 + cell.j] &&
        !board[(cell.i + 1) * 8 + cell.j].stone &&
        (!board[(cell.i - 1) * 8 + cell.j].stone ||
          board[(cell.i - 1) * 8 + cell.j].stone.type !== cell.stone.type)
      ) {
        stoneBack.push(board[(cell.i + 1) * 8 + cell.j]);
        stone.stone.eater = true;
        cell.stone.eaten = true;
        selectStone.push(stone);
      }
    }
  }
  if (stoneBack.length > 0) {
    stoneBack[0].playable = true;
  }
  stoneBack = [];
  for (let index = 0; index <= stone.j; index++) {
    let cell = colControl[index];
    if (cell.stone && cell.stone.type !== currentUser && index <= stone.j) {
      if (
        cell.j < 7 &&
        cell.j > 0 &&
        board[cell.i * 8 + cell.j - 1] &&
        !board[cell.i * 8 + cell.j - 1].stone &&
        (!board[cell.i * 8 + cell.j + 1].stone ||
          board[cell.i * 8 + cell.j + 1].stone.type !== cell.stone.type)
      ) {
        stoneBack.push(board[cell.i * 8 + cell.j - 1]);
        stone.stone.eater = true;
        cell.stone.eaten = true;
        selectStone.push(stone);
      }
    }
  }
  if (stoneBack.length > 0) {
    stoneBack[stoneBack.length - 1].playable = true;
  }
  stoneBack = [];
  for (let index = stone.j + 1; index < colControl.length; index++) {
    let cell = colControl[index];
    if (cell.stone && cell.stone.type !== currentUser && index > stone.j) {
      if (
        cell.j < 7 &&
        cell.j > 0 &&
        board[cell.i * 8 + cell.j + 1] &&
        !board[cell.i * 8 + cell.j + 1].stone &&
        (!board[cell.i * 8 + cell.j - 1].stone ||
          board[cell.i * 8 + cell.j - 1].stone.type !== cell.stone.type)
      ) {
        stoneBack.push(board[cell.i * 8 + cell.j + 1]);
        stone.stone.eater = true;
        cell.stone.eaten = true;
        selectStone.push(stone);
      }
    }
  }
  if (stoneBack.length > 0) {
    stoneBack[0].playable = true;
  }
  return selectStone;
};
export const thereIsForcedMove = (board, currentUser) => {
  const eaten = [];
  const eater = board.filter((s) => {
    if (
      s.stone &&
      s.stone.type === currentUser &&
      fourDirectionsForcedMove(board, currentUser, s).length > 0
    ) {
      eaten.push(fourDirectionsForcedMove(board, currentUser, s));
      return true;
    }
  });

  return { eater, eaten };
};
