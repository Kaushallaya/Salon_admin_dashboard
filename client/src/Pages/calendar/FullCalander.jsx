import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { format } from "date-fns";
import { getReservations } from "../../setup/reservationService";
import Democal from "./democal";

//const events = [{ title: "Meeting", start: new Date() }];
const events = [
  {
    id: "639b56a60514ed816e506106",
    title: "Kevin piterson-Tattoo",
    date: "2022-12-21",
  },
  {
    id: "639b56a60514ed816e506107",
    title: "Kevin piterson-Tattoo",
    date: "2022-12-08",
  },
];

const FullCalander = ({ setSelectedLink, link }) => {
  const [dataArr, setDataArr] = useState([]);

  const getAllReservations = async () => {
    let res = await getReservations();
    //setAllReservation(res.data);

    // res.data.map((item) => {
    //   dataArr.push({
    //     id: item._id,
    //     title: `${item.client_name}-${item.service}`,
    //     date: format(new Date(item.date), "yyyy-MM-dd").toString(),
    //   });
    // });

    res.data.map((item) => {
      dataArr.push({
        title: "Kevin piterson-Tattoo",
        date: "2022-12-08",
      });
    });
  };

  //console.log(dataArr);

  useEffect(() => {
    setSelectedLink(link);
    getAllReservations();
  }, []);

  return (
    <div>
      <h1>Demo App</h1>
      <Democal dataarr={dataArr} />
      {/*<FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      /> */}
    </div>
  );
};

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default FullCalander;
