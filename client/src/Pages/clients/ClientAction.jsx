import { Box, CircularProgress, Fab, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Check, Delete, Save } from "@mui/icons-material";
import { green, grey, red } from "@mui/material/colors";
import { deleteClient, updateClient } from "../../setup/clientService";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientAction = ({ params, rowID, setRowId, clients, setClients }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  //console.log(params.id + " " + rowID);

  const getAllClients = async () => {
    let res = await getClient();
    setClients(res.data);
  };

  const handleSubmit = async () => {
    // console.log(params.row);
    // console.log(params.id);
    setLoading(true);
    const res = await updateClient(params.id, params.row);
    if (res == "success") {
      setSuccess(true);
      setRowId(null);
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    const res = await deleteClient(params.id);
    if (res == "Delete successfully") {
      setRowId(null);
      setClients(clients.filter((row) => row._id !== params.id));
      toast.success("Client Deleted succesfuly!", {
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
  };

  useEffect(() => {
    if (rowID === params.id && success) setSuccess(false);
  }, [rowID]);

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      {success ? (
        <Fab
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            "&:hover": { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowID || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
      <Tooltip title="Delete Reservation" sx={{ marginLeft: "30px" }}>
        {/* <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton> */}
        <Fab
          sx={{
            width: 40,
            height: 40,
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? red[300] : red[900],
            marginLeft: 2,
            "&:hover": { bgcolor: grey[700] },
          }}
          onClick={handleDelete}
        >
          <Delete color="#FF0000" />
        </Fab>
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

export default ClientAction;
