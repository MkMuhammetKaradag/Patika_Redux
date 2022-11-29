import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWeeklyForecast,
  setSelectItem,
} from "../redux/weather/weatherSlice";
import rainimg from "../assest/img/500.png";
import cloudimg from "../assest/img/501.png";
const WeeklyForecast = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectWeeklyForecast);

  console.log(data);
  return (
    <div className="max-w-full  h-[33vh] flex gap-3 justify-center items-center overflow-auto overflow-x-auto cursor-pointer">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col border bg-white min-h-[260px] min-w-[240px]  mt-5 items-center  rounded-lg shadow-md "
          onClick={() => dispatch(setSelectItem(index + 1))}
        >
          <img
            className="object-cover w-32 rounded-t-lg"
            src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
          />
          <div className="flex flex-col justify-between leading-normal">
            <h3 className=" mb-2 text-3xl font-bold tracking-tight text-gray-800">
              {item.temp} °<span className="font-normal">C</span>
            </h3>
            <p className=" font-normal text-gray-700">{item.valid_date}</p>
            <p className=" font-normal text-gray-800">
              {item.max_temp}° / {item.min_temp}° C
            </p>
            <p className="font-normal text-gray-800">
              {item.weather.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
