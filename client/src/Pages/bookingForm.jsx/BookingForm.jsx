import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../components/FormControls";
import Header from "../../components/Header";
import MediaCard from "../../components/mediaCard";
import ServiceCard from "../../components/ServiceCard";
import { useForm, Form } from "../../components/useForm";
import * as userServices from "../../setup/userService";
import FormComponent from "./FormComponent";
// import Swal from "sweetalert2";

// const MySwal = withReactContent(Swal);
// const data = [
//   { id: 0, price: 0, title: "null value" },
//   { id: 1, price: 25, title: "Haircut" },
//   { id: 2, price: 75, title: "Hair Styling" },
//   { id: 3, price: 20, title: "Makeup" },
//   { id: 4, price: 30, title: "Tatoo" },
//   { id: 2, price: 75, title: "Hair Styling" },
//   { id: 3, price: 20, title: "Makeup" },
// ];

const BookingForm = ({ setSelectedLink, link }) => {
  const [curClient, setCurClient] = useState([]);
  const [curService, setCurService] = useState([]);
  const [curStylist, setCurStylist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedLink(link);
  }, []);

  return (
    <Box paddingLeft={2}>
      <Header
        title="BOOKING FORM"
        subtitle="Add new Client booking using form"
      />
      <Box
        m="10px"
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: "repeat(4,1fr)",
          gridAutoRows: "minmax(50px, auto)",
          gap: 3,
          flexDirection: "column",
        }}
      >
        <Box
          elevation={3}
          sx={{ p: 3 }}
          bgcolor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FormComponent
            curClient={curClient}
            curService={curService}
            curStylist={curStylist}
            setCurClient={setCurClient}
            setCurService={setCurService}
            setCurStylist={setCurStylist}
          />
        </Box>
        <Box
          elevation={3}
          sx={{ p: 3 }}
          bgcolor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <MediaCard client={curClient} />
            <MediaCard client={curStylist} />
          </Box>
        </Box>
        <Box
          elevation={3}
          sx={{ p: 3, width: 400 }}
          bgcolor={(theme) =>
            theme.palette.mode === "light" ? grey[300] : grey[900]
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <ServiceCard service={curService} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingForm;
