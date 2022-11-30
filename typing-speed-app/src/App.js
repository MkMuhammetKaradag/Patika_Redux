import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getNextWords,
  getSpeedWordNext,
  setCorrectNumber,
  setWrongNumber,
} from "./redux/typingSpeed/typingSpeedSlice";
import { useEffect, useState } from "react";
import Words from "./components/Words";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";

function App() {
  const isFinished = useSelector((s) => s.typingSpeed.finished);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Words></Words>
      <Counter></Counter>
      {isFinished && <Modal />}
    </div>
  );
}

export default App;
