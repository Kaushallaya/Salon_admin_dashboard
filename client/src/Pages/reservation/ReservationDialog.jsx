import React from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import FormComponent from "../bookingForm.jsx/FormComponent";
import { useState } from "react";

const ReservationDialog = ({ open, handleClose }) => {
  const [curClient, setCurClient] = useState([]);
  const [curService, setCurService] = useState([]);
  const [curStylist, setCurStylist] = useState([]);
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>Reservation Form</DialogTitle>
      <DialogContent>
        <FormComponent
          handleClose={handleClose}
          setCurClient={setCurClient}
          setCurService={setCurService}
          setCurStylist={setCurStylist}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
