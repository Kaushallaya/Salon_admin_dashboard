import React, { useState } from "react";
import { format } from "date-fns";
import { ResponsiveBar } from "@nivo/bar";
import { blue, green, red } from "@mui/material/colors";
import { useEffect } from "react";
import { getReservations } from "../../setup/reservationService";

const data = [
  {
    day: "Monday",
    process: 54,
    Incomplete: 65,
    complete: 50,
  },
  {
    day: "Tuesday",
    process: 35,
    Incomplete: 10,
    complete: 40,
  },
  {
    day: "Wednesday",
    process: 54,
    Incomplete: 50,
    complete: 50,
  },
  {
    day: "Thursday",
    process: 65,
    Incomplete: 20,
    complete: 10,
  },
  {
    day: "Friday",
    process: 100,
    Incomplete: 35,
    complete: 50,
  },
  {
    day: "Saturday",
    process: 20,
    Incomplete: 65,
    complete: 15,
  },
  {
    day: "Sunday",
    process: 60,
    Incomplete: 20,
    complete: 35,
  },
];

const data2 = [
  {
    date: '09/26/2024',
    stylist: 'Sanush Raj',
    service: 'HairCut',
  },
  {
    date: '09/26/2024',
    stylist: 'Sanush Raj',
    service: 'HairStyle',
  }
];

const BarChart = ({ stylist, reservations, services }) => {
  const array = [];

  const day = new Date();
  const today = format(new Date(), "MM/dd/yyyy");
  const todayRes = data2.filter((item) => item.date == today);
  console.log(todayRes);

  stylist.map((item) => {
    console.log(item.name);
    const res = todayRes.filter((resItem) => resItem.stylist == item.name);

    const temp = [];
    services.map((sitem) => {
      const serv = res.filter((resItem) => resItem.service == sitem.title);
      temp.push(serv.length);
    });
    //console.log(temp);

    array.push({
      title: item.name,
      Mecup: temp[0],
      Tattoo: temp[1],
      HairStyle: temp[2],
      HairCut: temp[3],
    });
  });
  //console.log(array);

  return (
    <ResponsiveBar
      data={array}
      keys={["Mecup", "Tattoo", "HairStyle", "HairCut"]}
      indexBy="title"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "category10" }}
      theme={{
        axis: {
          fontSize: "14px",
          tickColor: "#eee",
          ticks: {
            line: {
              stroke: "#555555",
            },
            text: {
              fill: "#999",
            },
          },
          legend: {
            fontSize: "40px",
            text: {
              fill: "#999",
            },
          },
        },
        grid: {
          line: {
            stroke: "#555555",
          },
        },
      }}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: `Date : ${today}`,
        legendPosition: "middle",
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Time (Hours)",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          itemTextColor: "#555555",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
                color: "#FF0000",
              },
            },
          ],
        },
      ]}
      colorBy={({ id }) =>
        id === "Mecup"
          ? "#d43c3c"
          : id === "Tattoo"
          ? "#008000"
          : id === "HairStyle"
          ? "#0000FF"
          : "#E65155"
      }
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
