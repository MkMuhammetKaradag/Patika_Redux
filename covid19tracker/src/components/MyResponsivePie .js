import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux";
const MyResponsivePie = () => {
  const { selectCountry } = useSelector((s) => s.covid19);
  const [data, setData] = useState([
    {
      id: "confirmed",
      label: "confirmed",
      value: 55,
    },
    {
      id: "deaths",
      label: "deaths",
      value: 269,
    },
  ]);
  useEffect(() => {
    setData([
      {
        id: "confirmed",
        label: "confirmed",
        value: selectCountry.confirmed.value,
      },
      {
        id: "deaths",
        label: "deaths",
        value: selectCountry.deaths.value,
      },
    ]);
  }, [selectCountry]);

  console.log(selectCountry);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 90 }}
      startAngle={-90}
      endAngle={90}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={9}
      colors={{ scheme: "dark2" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={2}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 25,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsivePie;
