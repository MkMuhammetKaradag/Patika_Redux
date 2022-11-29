import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLatAndLon, getWeather } from "../redux/weather/services";
import { addCity } from "../redux/weather/weatherSlice";

const Search = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[5vh] flex  bg-white  justify-center items-center">
      <form
        className="flex  items-center"
        onSubmit={(e) => {
         ;
          e.preventDefault(false);
          dispatch(addCity(city))
          dispatch(getWeather({ city }));
          setCity("");
        }}
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={city}
            id="simple-search"
            className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
            placeholder="Search"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
