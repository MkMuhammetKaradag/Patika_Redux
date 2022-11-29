import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodayData, setSelectItem } from "../redux/weather/weatherSlice";
import rainimg from "../assest/img/500.png";
import cloudimg from "../assest/img/501.png";
const DailyForecast = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectTodayData);

  return (
    <div className="w-full h-[33vh] flex flex-col  justify-center items-center">
      <div
        className="flex h-[220px] w-[400px]  justify-evenly mt-5 items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl cursor-pointer"
        onClick={() => dispatch(setSelectItem(0))}
      >
        <img
          className="object-cover w-44 rounded-t-lg"
          src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
        />
        <div className="flex flex-col justify-between p-1 leading-normal">
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
    </div>
  );
};

export default DailyForecast;
