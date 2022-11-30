import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNextWords,
  getSpeedWordNext,
  setCorrectNumber,
  setFinished,
  setStarted,
  setWrongNumber,
} from "../redux/typingSpeed/typingSpeedSlice";
import { useEffect, useState } from "react";
const Words = () => {
  const range = useSelector(getSpeedWordNext);
  const isStarted = useSelector((s) => s.typingSpeed.started);
  const isFinished = useSelector((s) => s.typingSpeed.finished);
  const [text, settText] = useState("");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(range);
  const dispatch = useDispatch();
  const changeText = () => {
    items.map((s, index) => {
      if (index == count) {
        if (s.text.toLowerCase().trim() == text.toLowerCase().trim()) {
          dispatch(
            setCorrectNumber({ index, text: text.toLowerCase().trim() })
          );
        } else {
          dispatch(setWrongNumber({ index, text: s.text, answer: text }));
        }
      }
    });
    if (count == 29) {
      dispatch(getNextWords());
      setCount(0);
    }
  };
  useEffect(() => {
    setItems(range);
  }, [range]);
  useEffect(() => {
    if (isFinished == true) {
      setCount(0);
      settText("");
    }
  }, [isFinished]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "#D7E9F7",
            width: 800,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          {items.map((s, index) => (
            <span
              key={s.text + index}
              style={{
                fontSize: 24,
                color:
                  s.change == undefined
                    ? "black"
                    : s.change == true
                    ? "green"
                    : "red",
              }}
            >
              {s.text.toLowerCase()}{" "}
            </span>
          ))}
        </div>
        <input
          disabled={isFinished}
          style={{
            height: 50,
          }}
          placeholder="text giriniz"
          value={text}
          onKeyUp={(e) => {
            console.log(e);
            if (!isStarted && e.code != "Space") {
              dispatch(setStarted(true));
              dispatch(setFinished(false));
            }
            if (e.code == "Space" && text != " " && text != "") {
              setCount(count + 1);
              changeText();
              settText("");
            } else if (e.key == " ") {
              settText("");
            }
          }}
          onChange={(e) => settText(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Words;
