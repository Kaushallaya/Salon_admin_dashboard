import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import StylistForm from "./StylistForm";

const StylistDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>New Stylist Form</DialogTitle>
      <DialogContent>
        <StylistForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default StylistDialog;
