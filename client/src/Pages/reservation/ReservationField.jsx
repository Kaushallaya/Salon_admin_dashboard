import React, { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

import booking from "../../mockData/booking.json";
import { green, grey, red, yellow } from "@mui/material/colors";
import ReservationAction from "./ReservationAction";
import Header from "../../components/Header";
import {
  Add,
  AddBusiness,
  ChangeCircle,
  CheckCircle,
  DataSaverOff,
  Delete,
  PersonAddAlt1,
} from "@mui/icons-material";
import { tokens } from "../../styles/theme";
import ReservationDialog from "./ReservationDialog";
import { getReservations } from "../../setup/reservationService";

const ReservationField = ({ setSelectedLink, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pageSize, setPageSize] = useState(5);
  const [rowID, setRowId] = useState(null);
  const [open, setOpen] = useState(false);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    setSelectedLink(link);
    getAllReservations();
  }, []);

  const getAllReservations = async () => {
    let res = await getReservations();
    setReservation(res.data);
  };

  const colums = useMemo(
    () => [
      {
        field: "service_pic",
        headerName: "Photo",
        width: 80,
        renderCell: (params) => (
          <Avatar src={params.row.service_pic} variant="rounded" />
        ),
        sortable: false,
        filterable: false,
      },
      { field: "service", headerName: "Service", width: 130 },
      {
        field: "price",
        headerName: "Price",
        width: 80,
        renderCell: (params) => "$" + params.row.price,
      },
      {
        field: "date",
        headerName: "Date",
        width: 120,
        editable: true,
        type: "date",
      },
      {
        field: "time",
        headerName: "Time",
        width: 130,
        editable: true,
        type: "date",
      },
      {
        field: "status",
        headerName: "Status",
        width: 150,
        type: "singleSelect",
        valueOptions: ["Pending", "Inprograsse", "Cancle", "Complete"],
        editable: true,
        renderCell: ({ row: { status } }) => {
          return (
            <Chip
              label={status}
              variant="outlined"
              width="100px"
              icon={
                status == "Pending" ? (
                  <ChangeCircle />
                ) : status == "Cancle" ? (
                  <Delete />
                ) : status == "Complete" ? (
                  <CheckCircle />
                ) : (
                  <DataSaverOff />
                )
              }
              color={
                status == "Pending"
                  ? "warning"
                  : status == "Cancle"
                  ? "error"
                  : status == "Complete"
                  ? "success"
                  : "info"
              }
            />
          );
        },
      },
      {
        field: "client_img",
        headerName: "Client",
        width: 80,
        renderCell: (params) => (
          <Tooltip title={params.row.client_name}>
            <Avatar src={params.row.client_img} />
          </Tooltip>
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: "client_email",
        headerName: "Email",
        width: 200,
        editable: true,
      },
      {
        field: "client_mobile",
        headerName: "Mobile",
        width: 150,
        editable: true,
      },
      {
        field: "stylist",
        headerName: "Stylist",
        width: 100,
        editable: true,
      },
      {
        field: "action",
        headerName: "Action",
        type: "actions",
        width: 200,
        renderCell: (params) => (
          <ReservationAction
            {...{ params, rowID, setRowId, setReservation, reservation }}
          />
        ),
      },
    ],
    [rowID, reservation]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    getAllReservations();
    setOpen(false);
  };

  return (
    <Box sx={{ height: 430, width: "100%" }}>
      <Box display="flex" justifyContent="space-between">
        <Header title="RESERVATIONS" subtitle="Welcome to Reservation Grid" />
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          startIcon={<AddBusiness />}
          sx={{
            marginRight: "50px",
            marginTop: "20px",
            height: "35px",
            width: "200px",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          Add new
        </Button>
        <ReservationDialog open={open} handleClose={handleClose} />
      </Box>
      <DataGrid
        columns={colums}
        rows={reservation}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 15]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[900],
          },
        }}
        onCellEditCommit={(params) => {
          setRowId(params.id);
          setReservation(reservation);
        }}
      />
    </Box>
  );
};

export default ReservationField;
