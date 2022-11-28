import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";
import SelectInput from "./components/SelectInput";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "60%",
          margin: "0px auto",
          paddingTop: 50,
          color: "white",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 40 }}>React sample text generator app</span>

        <div
          style={{
            border: "1px solid white",
            marginTop: 50,
            display: "flex",
          }}
        ></div>
        <SelectInput></SelectInput>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
