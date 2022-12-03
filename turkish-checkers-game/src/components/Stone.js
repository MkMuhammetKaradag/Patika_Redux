import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectStone } from "../redux/cheackersGame/cheackersGameSlice";

const Stone = ({ item }) => {
  const dispatch = useDispatch();
  const {  orderOfPlayers, isControl } = useSelector(
    (s) => s.cheackerGame
  );
  const addSelectStone = (item) => {
    if (!isControl) {
      dispatch(setSelectStone(item));
    }
  };

  return (
    <button
      disabled={orderOfPlayers != item.stone.type}
      style={{
        width: 80,
        height: 80,
      }}
      onClick={() => addSelectStone(item)}
      className={`${
        item.stone.bgColor
      } rounded-full hover:border-4 disabled:hover:border-red-900  items-center flex  justify-center ${
        item.stone.bgColor == "bg-white" && " hover:border-black"
      }`}
    >
      {item.stone.isSuper && (
        <div
          className={`w-[50%] h-[50%]  rounded-full ${
            item.stone.bgColor === "bg-white" ? "bg-black" : "bg-white"
          }`}
        ></div>
      )}
      {item.stone.eaten && <div className="text-red-500 absolute">Av</div>}
      {item.stone.eater && <div className="text-red-500 absolute">Avcı</div>}
    </button>
  );
};

export default Stone;
