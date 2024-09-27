import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddAdminDialog = ({ open, handleClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const sendEmail = async () => {
    //console.log(email);
    if (email == "") {
      setError(true);
      setErrMessage("Email address required!");
    } else if (!/$^|.+@.+..+/.test(email)) {
      setError(true);
      setErrMessage("Email address not valied!");
    } else {
      setError(false);
      setErrMessage("");
      try {
        const data = { email: email };
        let res = await axios.post(
          `http://localhost:5000/sendinvitemail`,
          data
        );
        console.log(res);
        if (res.status === 200) {
          handleClose();
          handleSuccess();
          console.log("success");
        }
      } catch (error) {
        alert(error.response.data.msg);
        handleClose();
        handleFailer();
      }
    }
  };

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Invite sent successful",
      time: 4000,
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  const handleFailer = () => {
    MySwal.fire({
      icon: "error",
      title: "Failed to sent Invitation",
      time: 4000,
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm">
      <DialogTitle>Invite New Admin</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To invite as admin on this website, please enter invite email address
          here. We will send updates occasionally.
        </DialogContentText>
        <br />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          error={error}
          helperText={errMessage}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={sendEmail}>Send now</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAdminDialog;
