import { Delete, Edit, Save } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteReservations,
  getReservations,
  updateReservation,
} from "../../setup/reservationService";

const ReservationAction = ({
  params,
  rowID,
  setRowId,
  setReservation,
  reservation,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getAllReservations = async () => {
    let res = await getReservations();
    setReservation(res.data);
  };

  //console.log(reservation);
  // console.log(params.id);
  const handleDelete = async () => {
    //console.log(params.row);
    // console.log(params.id);
    // console.log(reservation);
    setLoading(true);
    const res = await deleteReservations(params.id);
    if (res == "Delete successfully") {
      setSuccess(true);
      setRowId(null);
      setReservation(reservation.filter((row) => row._id !== params.id));
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
    setLoading(false);
  };

  const handleEdit = async () => {
    console.log(params.row);
    console.log(params.id);
    console.log(reservation);
  };

  const handleSave = async () => {
    console.log(params);
    setLoading(true);
    const res = await updateReservation(params.id, params.row);
    if (res == "success") {
      setSuccess(true);
      setRowId(null);
      toast.success("Reservation Updated succesfuly!", {
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
    setLoading(false);
  };

  useEffect(() => {
    if (rowID === params.id && success) setSuccess(false);
    getAllReservations();
  }, [rowID]);

  return (
    <Box>
      <Tooltip title="Edit Reservation" sx={{ marginLeft: "10px" }}>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Save Reservation" sx={{ marginLeft: "10px" }}>
        <IconButton onClick={handleSave}>
          <Save />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete Reservation" sx={{ marginLeft: "10px" }}>
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
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
};

export default ReservationAction;
