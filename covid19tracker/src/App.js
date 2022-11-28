import "./App.css";
import MyResponsiveChoroplethCanvas from "./components/MyResponsiveChoroplethCanvas";
import MyResponsivePie from "./components/MyResponsivePie ";
import { useSelector } from "react-redux";
function App() {
  const { selectCountry } = useSelector((s) => s.covid19);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: 900,
          height: 900,
          // backgroundColor: "#e30e30",
        }}
      >
        <MyResponsiveChoroplethCanvas></MyResponsiveChoroplethCanvas>
      </div>
      {selectCountry && (
        <div
          style={{
            width: 900,
            height: 800,
            // backgroundColor: "#e30e30",
          }}
        >
          <h1>{selectCountry.country}</h1>
          <MyResponsivePie></MyResponsivePie>
        </div>
      )}
    </div>
  );
}

export default App;
