import { Group, MapsHomeWork, Style, Search } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { green, grey } from "@mui/material/colors";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import users from "../../mockData/users.json";
import { getStylist } from "../../setup/stylistService";
import { getServices } from "../../setup/servicesService";
import { getClient } from "../../setup/clientService";
import { getReservations } from "../../setup/reservationService";
import ClientField from "../clients/ClientField";

const MainField = ({ setSelectedLink, link }) => {
  const [allClints, setAllClients] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [allStylist, setAllStylist] = useState([]);
  const [allReservation, setAllReservation] = useState([]);

  useEffect(() => {
    setSelectedLink(link);
    getAllClients();
    getAllServices();
    getAllStylist();
    getAllReservations();
  }, []);

  const getAllReservations = async () => {
    let res = await getReservations();
    setAllReservation(res.data);
  };

  const getAllStylist = async () => {
    let res = await getStylist();
    setAllStylist(res.data);
  };

  const getAllServices = async () => {
    let res = await getServices();
    setAllServices(res.data);
  };

  const getAllClients = async () => {
    let res = await getClient();
    setAllClients(res.data);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box
          display="flex"
          backgroundColor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          borderRadius="3px"
          height="40px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </Box>
      </Box>
      <Box
        m="10px"
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: "repeat(4,1fr)",
          gridAutoRows: "minmax(50px, auto)",
          gap: 3,

          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Box
          elevation={3}
          sx={{ p: 3, gridColumn: "2", gridRow: "2" }}
          bgcolor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={allClints.length}
            subtitle="All users count"
            progress="0.70"
            increase="+62%"
            icon={<Group sx={{ fontSize: "26px" }} />}
            array={allClints}
          />
        </Box>

        <Box
          elevation={3}
          sx={{ p: 3, gridColumn: "span 2" }}
          bgcolor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={allReservation.length}
            subtitle="Reservations"
            progress={allReservation.length / 100}
            increase="+21%"
            icon={<MapsHomeWork sx={{ fontSize: "26px" }} />}
            array={allReservation}
          />
        </Box>

        <Box
          elevation={3}
          sx={{ p: 3, gridColumn: "1", gridRow: "2" }}
          bgcolor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={allStylist.length}
            subtitle="Stylist Obtained"
            progress="0.58"
            increase="+41%"
            icon={<Style sx={{ fontSize: "26px" }} />}
            array={allStylist}
          />
        </Box>

        <Box
          backgroundColor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          elevation={3}
          sx={{
            p: 2,
            gridColumn: "3",
            gridRow: "span 2",
            height: "300px",
            width: "500px",
          }}
          // height="100px"
        >
          <PieChart
            // height="400px"
            services={allServices}
            reservations={allReservation}
          />
        </Box>

        <Box
          elevation={3}
          sx={{ p: 2, gridColumn: 4, gridRow: "span 5" }}
          backgroundColor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
        >
          <Typography variant="h6">Recently added Users</Typography>
          <Divider />
          <List>
            {allClints.slice(0, 6).map((user, i) => (
              <Box key={user._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user?.name} src={user?.img} />
                  </ListItemAvatar>
                  <ListItemText primary={user?.name} secondary={user?.email} />
                </ListItem>
              </Box>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: "20px" }}>
            OUR Stylists
          </Typography>
          <Divider />
          <List>
            {allStylist.slice(0, 6).map((user, i) => (
              <Box key={user._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user?.name} src={user?.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user?.name}
                    secondary={` ${user?.service}  \r\n - ${user?.mobile} `}
                  />
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>

        {/* <Box
          backgroundColor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          elevation={3}
          sx={{
            p: 2,
            gridColumn: "3",
            gridRow: "span 2",
            height: "300px",
            width: "500px",
          }}
        >
          <PieChart
            height="400px"
            services={allServices}
            reservations={allReservation}
          />
        </Box> */}

        <Box
          backgroundColor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          elevation={3}
          sx={{ p: 2, gridColumn: "1/4", height: "400px" }}
          height="100px"
        >
          <BarChart
            height="400px"
            reservations={allReservation}
            stylist={allStylist}
            services={allServices}
          />
        </Box>
        {/* <ClientField /> */}
      </Box>
    </>
  );
};

export default MainField;
