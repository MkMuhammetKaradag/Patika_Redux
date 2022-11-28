import React, { useState } from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const { item } = useSelector((s) => s.textGenerator);
  return (
    <div
      style={{
        textAlign: "start",
        backgroundColor: "#303030",
        marginTop: 30,
        padding: 50,
        borderRadius: 12,
      }}
    >
      {item}
    </div>
  );
};

export default Content;
