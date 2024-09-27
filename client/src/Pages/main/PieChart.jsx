import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
//import data from "../../mockData/piechartData";

const data = [
  {
    id: "Hair Style",
    label: "Hair Style",
    value: 3,
    color: "hsl(126, 70%, 50%)",
  },
  {
    id: "Hair Cut",
    label: "Hair Cut",
    value: 5,
    color: "hsl(522, 70%, 50%)",
  },
];

const PieChart = ({ services, reservations }) => {
  const res = reservations.filter((item) => item.status == "Complete");

  const DataArr = [
    {
      id: "All Reservations",
      label: "All Reservations",
      value: reservations.length,
      color: "hsl(126, 70%, 50%)",
    },
    {
      id: "Complete",
      label: "Complete",
      value: res.length,
      color: "hsl(522, 70%, 50%)",
    },
  ];

  return (
    <ResponsivePie
      data={DataArr}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-35}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "set1" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#999"
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
          itemsSpacing: 20,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "rgba(255, 255, 255, 0.3)",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
