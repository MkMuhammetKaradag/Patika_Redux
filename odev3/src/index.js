import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { PlayGround } from "./App";
import reportWebVitals from "./reportWebVitals";
import Card from "./components/Card";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="app">
        {/* <PlayGround></PlayGround> */}
        <Card></Card>
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
