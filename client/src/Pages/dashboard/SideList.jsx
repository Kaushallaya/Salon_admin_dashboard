import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import { useTheme, styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import {
  Badge,
  CalendarMonth,
  CalendarMonthRounded,
  Dashboard,
  LibraryBooks,
  Logout,
  People,
  StoreMallDirectory,
} from "@mui/icons-material";
import { useMemo } from "react";
import MainField from "../main/MainField";
import ClientField from "../clients/ClientField";
import ReservationField from "../reservation/ReservationField";
import StylistField from "../stylists/StylistField";
import CalendarField from "../calendar/CalendarField";
import BookingForm from "../bookingForm.jsx/BookingForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import FullCalander from "../calendar/FullCalander";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideList = ({ open, setOpen }) => {
  //const {state:{currentUser}} = useValue
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    const veryfyUser = async () => {
      // console.log(cookies.jwt);
      // if (!cookies.jwt) {
      //   navigate("/login");
      // }
    };
    veryfyUser();
  }, [cookies, navigate]);

  const list1 = useMemo(
    () => [
      {
        title: "Main",
        icon: <Dashboard />,
        link: "",
        component: <MainField {...{ setSelectedLink, link: "" }} />,
      },
      {
        title: "Clients",
        icon: <People />,
        link: "clients",
        component: <ClientField {...{ setSelectedLink, link: "clients" }} />,
      },
      {
        title: "Reservations",
        icon: <StoreMallDirectory />,
        link: "reservations",
        component: (
          <ReservationField {...{ setSelectedLink, link: "reservations" }} />
        ),
      },
      {
        title: "Stylists",
        icon: <Badge />,
        link: "stylists",
        component: <StylistField {...{ setSelectedLink, link: "stylists" }} />,
      },
    ],
    []
  );
  const list2 = useMemo(
    () => [
      {
        title: "Calendar",
        icon: <CalendarMonth />,
        link: "calender",
        component: <CalendarField {...{ setSelectedLink, link: "calender" }} />,
      },
      {
        title: "Calendar2",
        icon: <CalendarMonthRounded />,
        link: "calender2",
        component: <FullCalander {...{ setSelectedLink, link: "calender2" }} />,
      },
      {
        title: "Booking",
        icon: <LibraryBooks />,
        link: "booking",
        component: <BookingForm {...{ setSelectedLink, link: "booking" }} />,
      },
    ],
    []
  );

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
          <Tooltip title="Jone snow">
            <Avatar
              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666590497/Quincy-Larson-photo_feelkr.jpg"
              {...(open && { sx: { width: 100, height: 100 } })}
            />
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          {open && <Typography>Jone Snow</Typography>}
          <Typography variant="body2">Super Admin</Typography>
          {open && <Typography variant="body2">jonesn@gmail.com</Typography>}
          {/* <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Tooltip> */}
        </Box>
        <Divider />
        <List>
          {list1.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {list2.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
          <Tooltip title="Jone snow">
            <Avatar
              src="https://res.cloudinary.com/dkbk51c9j/image/upload/v1666590497/Quincy-Larson-photo_feelkr.jpg"
              {...(open && { sx: { width: 100, height: 100 } })}
            />
          </Tooltip>
        </Box> */}
        <Box sx={{ textAlign: "center" }}>
          {/* {open && <Typography>Jone Snow</Typography>}
          <Typography variant="body2">Super Admin</Typography>
          {open && <Typography variant="body2">jonesn@gmail.com</Typography>} */}
          <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {list1.map((item) => {
            <Route
              key={item.title}
              path={item.link}
              element={item.component}
            />;
          })}
          <Route
            kay="main"
            path=""
            element={<MainField {...{ setSelectedLink, link: "" }} />}
          />
          <Route
            kay="clients"
            path="clients"
            element={<ClientField {...{ setSelectedLink, link: "clients" }} />}
          />
          <Route
            kay="reservations"
            path="reservations"
            element={
              <ReservationField
                {...{ setSelectedLink, link: "reservations" }}
              />
            }
          />
          <Route
            kay="stylists"
            path="stylists"
            element={
              <StylistField {...{ setSelectedLink, link: "stylists" }} />
            }
          />
          <Route
            kay="calender"
            path="calender"
            element={
              <CalendarField {...{ setSelectedLink, link: "calender" }} />
            }
          />
          <Route
            kay="calender2"
            path="calender2"
            element={
              <FullCalander {...{ setSelectedLink, link: "calender2" }} />
            }
          />
          <Route
            kay="booking"
            path="booking"
            element={<BookingForm {...{ setSelectedLink, link: "booking" }} />}
          />
        </Routes>
      </Box>
    </>
  );
};

export default SideList;
