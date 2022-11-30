import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTextResults,
  resetGame,
} from "../redux/typingSpeed/typingSpeedSlice";
import styles from "./Modal.module.css";

const Modal = () => {
  const { trueWords, falseWord } = useSelector(getTextResults);
  const dispatch = useDispatch();
  resetGame();
  console.log(falseWord);
  return (
    <>
      <div className={styles.darkBG} onClick={() => console.log("naber")} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Result</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(resetGame())}
          >
            x
          </button>
          <div className={styles.modalContent}>
            <div className={[styles.modalTrueAnswer + " " + styles.scroll]}>
              <h1>True-{trueWords.length}</h1>
              {trueWords.map((s) => (
                <p style={{ paddingLeft: 20, textAlign: "start" }}>
                  <span style={{ color: "green" }}>{s}</span>
                </p>
              ))}
            </div>
            <div className={styles.modalFalseAnswer + " " + styles.scroll}>
              <h1>False-{falseWord.length}</h1>
              {falseWord.map((s) => (
                <p style={{ textAlign: "start" }}>
                  <span style={{ color: "green" }}>{s.text}</span> !={" "}
                  <span style={{ color: "red" }}>{s.answer}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
