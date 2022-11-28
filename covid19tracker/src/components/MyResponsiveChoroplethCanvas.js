import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getChartsDataAsync,
  getCountriesDataAsync,
  getFeaturesAsync,
} from "../redux/covid19/services";

const MyResponsiveChoroplethCanvas = () => {
  const dispatch = useDispatch();

  const charts = useSelector((s) => s.covid19);
  const selectCountry = (e) => {
    if (e) {
      console.log("geldi");
      dispatch(getCountriesDataAsync({ country: e }));
    }
  };

  useEffect(() => {
    dispatch(getFeaturesAsync());
    dispatch(getChartsDataAsync());
  }, []);

  return (
    <ResponsiveChoropleth
      data={charts.chartData}
      features={charts.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="YlOrRd"
      domain={[0, 1000000]}
      unknownColor="#666666"
      onClick={(e) => selectCountry(e.label)}
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.45]}
      projectionScale={100}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
   
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          
          justify: true,
          translateX: 20,
          translateY: -300,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 30,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 25,

          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default MyResponsiveChoroplethCanvas;
