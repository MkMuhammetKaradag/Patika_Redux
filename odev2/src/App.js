import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F1F2F6",
        display: "flex",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <Navbar></Navbar>
      <div
        style={{
          width: "1000px",
          backgroundColor: "transparent",
        }}
      >
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
