// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// const Array = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [2, 2, 2, 2, 2, 2, 2, 2],
//   [2, 2, 2, 2, 2, 2, 2, 2],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];
// const Board = () => {
//  const {board} = useSelector(s=>s)
//   return (
//     <div className="w-[805px] h-[805px] border-2 mt-10 border-black">
//       {board.map((s, indexs) => (
//         <div key={s + indexs} className="grid  grid-cols-8 ">
//           {s.map((i, indexi) => (
//             <div
//               key={indexi + indexs}
//               className={`${
//                 (indexi + indexs) % 2 == 0
//                   ? `bg-slate-500 text-white`
//                   : "bg-stone-400 text-black"
//               } h-[100px] w-[100px] text-center flex items-center justify-center`}
//             >
//               {i == 1 && (
//                 <div
//                   className="bg-white w-[80px] h-[80px] rounded-full hover:border-2 hover:border-black cursor-pointer "
//                   onClick={() => selectItem(indexs, indexi, i)}
//                 ></div>
//               )}
//               {i == 2 && (
//                 <div className="bg-black w-[80px] h-[80px] rounded-full hover:border-2 hover:border-white cursor-pointer "></div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Board;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findMoves,
  setMovingTheStone,
  setSelectStone,
} from "../redux/cheackersGame/cheackersGameSlice";
import Stone from "./Stone";

const Board = () => {
  const dispatch = useDispatch();
  const { board, selectStone } = useSelector((s) => s.cheackerGame);

  useEffect(() => {
    dispatch(findMoves());
  }, [selectStone]);

  const addMovingTheStone = (item) => {
    if (!item.playable) {
      console.log("buraya taş oynatılamaz");
      return;
    }
    dispatch(setMovingTheStone(item));
  };

  return (
    <div className="w-[805px] h-[805px] border-2 mt-10 border-black ">
      <div className="grid grid-cols-8">
        {board.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              addMovingTheStone(item);
            }}
            className={`${
              !item.playable ? item.bgColor : "bg-green-300 cursor-pointer"
            } h-[100px] w-[100px] text-center flex items-center justify-center`}
          >
            {item.stone && !item.stone.deleted && <Stone item={item}></Stone>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
