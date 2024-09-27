import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ClientForm from "./ClientForm";

const ClientDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>New Client Form</DialogTitle>
      <DialogContent>
        <ClientForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ClientDialog;
