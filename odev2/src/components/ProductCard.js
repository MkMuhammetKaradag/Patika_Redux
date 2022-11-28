import React from "react";
import { useDispatch } from "react-redux";
import { updateInovice } from "../redux/purchase/purchaseSlice";
const ProductCard = ({ item, totalMoney }) => {
  const [value, setValue] = React.useState(item.amount);
  const dispacth = useDispatch();
  const changedInovice = (amount) => {
    if (amount < 0) {
      setValue(0);
      return;
    }
    if (totalMoney < item.price && item.amount < amount) {
      return;
    }
    dispacth(updateInovice({ id: item.id, amount }));
    setValue(amount);
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "white",
      }}
    >
      <img
        style={{
          height: 120,
          maxWidth: "100%",
        }}
        src={item.src}
      ></img>
      <h3>{item.name}</h3>
      <h5 style={{ color: "green" }}>{item.price}</h5>
      <div style={{ display: "flex" }}>
        <button
          disabled={item.amount == 0}
          onClick={() => {
            changedInovice(Number(value) - 1);
          }}
          style={{
            padding: 15,
            width: "30%",
            backgroundColor: "#68D391",
            cursor: "pointer",
          }}
        >
          sell
        </button>
        <input
          type={"number"}
          value={value}
          onChange={(e) => {
            changedInovice(e.target.value);
          }}
          style={{
            padding: 15,
            width: "30%",
          }}
        ></input>
        <button
          disabled={totalMoney < item.price}
          onClick={() => {
            changedInovice(Number(value) + 1);
          }}
          style={{
            padding: 15,
            width: "30%",
            cursor: "pointer",
          }}
        >
          buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
