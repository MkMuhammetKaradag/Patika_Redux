import React from "react";
import { useSelector } from "react-redux";
import { filteredInvoice } from "../redux/purchase/purchaseSlice";
import ProductCard from "./ProductCard";
const Content = () => {
  const { invoice, totalMoney } = useSelector((s) => s.purchase);
  const filteredInv = useSelector(filteredInvoice);
  return (
    <div
      style={{
        backgroundColor: "transparent",
      }}
    >
      <img></img>
      <h1>Test user-1</h1>
      <div
        style={{
          background: "green",
          color: "white",
          height: 50,
          alignItems: "center",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          position: "sticky",
          top: 0,
        }}
      >
        {totalMoney}
      </div>
      <div className="wrapper">
        {invoice.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            totalMoney={totalMoney}
          ></ProductCard>
        ))}
      </div>
      <div>
        {filteredInv.length > 0 && <h1>Your Receipt</h1>}
        {filteredInv.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 300,

                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  width: 200,
                }}
              >
                {item.name}
              </span>
              <span
                style={{
                  width: 50,
                }}
              >
                x{item.amount}
              </span>
              <span
                style={{
                  width: 50,
                }}
              >
                {item.price * item.amount}
              </span>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 20 }}> total: {100000000000 - totalMoney}</div>
      </div>
    </div>
  );
};

export default Content;
