import React, { useEffect, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";
import { green, grey } from "@mui/material/colors";
import ReservationDialog from "../reservation/ReservationDialog";
import CalendarDialog from "./CalendarDialog";
import {
  deleteReservations,
  getReservations,
} from "../../setup/reservationService";
import { format } from "date-fns";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MySwal = withReactContent(Swal);

const CalendarField = ({ setSelectedLink, link }) => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [savedReservation, setSavedReservation] = useState([]);
  const [allReservation, setAllReservation] = useState([]);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState("");
  const [isNew, setIsNew] = useState(true);
  const [initEvent, setInitEvent] = useState([
    {
      id: "aaaaaaaaaaaaaaaaa",
      title: "Rasal Saiman-Hair Cut",
      date: "2022-11-28",
    },
  ]);

  const handleDateClick = (selected) => {
    setTime(selected.start);
    handleClickOpen();

    const calenderAPI = selected.view.calendar;
    calenderAPI.unselect();

    console.log(success);
    console.log(savedReservation);

    if (isNew) {
      setIsNew(false);
      allReservation.map((item) => {
        calenderAPI.addEvent({
          id: item._id,
          title: `${item.client_name}-${item.service}`,
          start: format(new Date(item.date), "yyyy-MM-dd"),
          end: format(new Date(item.date), "yyyy-MM-dd"),
          allDay: true,
        });
      });
    }
  };

  const handleEventClick = (selected) => {
    MySwal.fire({
      icon: "error",
      title: "Are You sure ",
      text: `you want to delete reservation :'${selected.event.title}'`,
      time: 4000,
    }).then(async (result) => {
      if (result.isConfirmed) {
        //console.log(selected.event.id);
        selected.event.remove();
        let res = await deleteReservations(selected.event.id);
        if (res == "Delete successfully") {
          toast.success("Reservation Deleted succesfuly!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAllReservations = async () => {
    let res = await getReservations();
    setAllReservation(res.data);

    res.data.map((item) => {
      initEvent.push({
        id: item._id,
        title: `${item.client_name}-${item.service}`,
        date: format(new Date(item.date), "yyyy-MM-dd"),
      });
    });
  };

  useEffect(() => {
    setSelectedLink(link);
    getAllReservations();
    console.log(success);
    console.log(savedReservation);
  }, []);

  return (
    <Box m="20px">
      <CalendarDialog
        open={open}
        handleClose={handleClose}
        time={time}
        setSuccess={setSuccess}
        setSavedData={setSavedReservation}
      />
      <Header title="CALENDER" subtitle="Client booking view on Calender" />

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 30%"
          backgroundColor={(theme) =>
            theme.palette.mode === "light" ? grey[400] : grey[900]
          }
          //"#262626"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h6"> Bookings</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? grey[200] : grey[800],
                  margin: "10px 0",
                  borderRadius: "5px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={initEvent}
            // {[
            //   {
            //     id: "12315",
            //     title: "All-day event",
            //     date: "2022-11-14",
            //     key: "sdfg",
            //   },
            //   {
            //     id: "5123",
            //     title: "Timed event",
            //     date: "2022-11-28",
            //   },
            // ]}
          />
        </Box>
      </Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
  // return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
};

export default CalendarField;
