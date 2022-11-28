import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTextAsync } from "../redux/textGenerator/services";
const SelectInput = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHtml, setIsHtml] = useState("No");
  useEffect(() => {
    dispatch(
      getTextAsync({
        count,
        format: isHtml == "No" ? "text" : "html",
      })
    );
  }, [count, isHtml]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setIsHtml(e.target.value);
  };
  return (
    <div
      style={{
        marginTop: 30,
        display: "flex",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          textAlign: "start",
          gap: 5,
        }}
      >
        <span>Paragraphs</span>
        <input
          style={{
            height: 22,
            borderRadius: 8,
            padding: 2,
          }}
          type={"number"}
          value={count}
          onChange={(e) => {
            if (Number(e.target.value) > 0) {
              setCount(e.target.value);
            }
          }}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          textAlign: "start",
          gap: 5,
        }}
      >
        <span>Include HTML</span>
        <select
          style={{
            height: 30,
            borderRadius: 5,
            width: 60,
          }}
          value={isHtml}
          onChange={(e) => handleChange(e)}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
