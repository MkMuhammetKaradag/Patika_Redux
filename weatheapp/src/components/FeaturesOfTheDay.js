import React from "react";
import { useSelector } from "react-redux";
import { selectItemData, selectTodayData } from "../redux/weather/weatherSlice";

const FeaturesOfTheDay = () => {
  const item = useSelector(selectItemData);
  return (
    <div className="w-full h-[28vh] flex  gap-4 justify-center items-center">
      <div className="flex h-[120px] mt-5 items-center flex-col  bg-white w-[600px] rounded-lg shadow-md  md:max-w-xl">
        <p className="text-gray-400">Average relative humidity</p>
        <div className="flex gap-5 h-full flex-row w-full items-center">
          <img
            className="object-cover w-10 rounded-t-lg m-1"
            src="https://cdn-icons-png.flaticon.com/512/483/483552.png"
          />
          <div className="flex flex-col justify-between p-1 leading-normal">
            <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-800">
              {item.rh}
              <span className="font-normal">%</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex h-[120px] mt-5 items-center flex-col  bg-white w-[600px] rounded-lg shadow-md  md:max-w-xl">
        <p className="text-gray-400">Wind</p>
        <div className="flex gap-5 h-full flex-row w-full items-center">
          <img
            className="object-cover w-14 rounded-t-lg m-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a0NHzz0FkgI1HItYOCQrpmbdiFp-6lR-lg&usqp=CAU"
          />
          <div className="flex flex-col justify-between p-1 leading-normal">
            <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-800">
              {item.wind_gust_spd}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTheDay;
