import logo from "./logo.svg";
import "./App.css";
import DailyForecast from "./components/DailyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import FeaturesOfTheDay from "./components/FeaturesOfTheDay";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./redux/weather/services";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather({ city: "Ankara" }));
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#F3F4F6] flex flex-col items-center">
      {/* bg-[url(https://wallpaperaccess.com/full/123080.jpg)] */}
      <Search></Search>
      <DailyForecast></DailyForecast>
      <WeeklyForecast></WeeklyForecast>
      <FeaturesOfTheDay></FeaturesOfTheDay>
    </div>
  );
}

export default App;
