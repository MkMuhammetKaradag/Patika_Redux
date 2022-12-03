import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import { useSelector } from "react-redux";

function App() {
  const { eater, eaten } = useSelector((s) => s.cheackerGame);
  // console.log("eater", eater);
  // console.log("eaten", eaten);
  return (
    <div className="flex items-center justify-center">
      <Board></Board>
    </div>
  );
}

export default App;
