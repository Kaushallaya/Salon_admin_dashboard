import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

//import clients from "../../mockData/users.json";
import { grey } from "@mui/material/colors";
import ClientAction from "./ClientAction";
import { PersonAddAlt1, Send } from "@mui/icons-material";
import ClientDialog from "./ClientDialog";
import { getClient } from "../../setup/clientService";

const ClientField = ({ setSelectedLink, link }) => {
  const [pageSize, setPageSize] = useState(5);
  const [rowID, setRowId] = useState(null);
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients();
    setSelectedLink(link);
  }, []);

  const getAllClients = async () => {
    let res = await getClient();
    setClients(res.data);
  };

  const colums = useMemo(
    () => [
      {
        field: "img",
        headerName: "Avatar",
        width: 80,
        renderCell: (params) => <Avatar src={params.row.img} />,
        sortable: false,
        filterable: false,
      },
      { field: "name", headerName: "Name", width: 200 },
      { field: "age", headerName: "Age", width: 50, editable: true },
      {
        field: "active",
        headerName: "Active",
        width: 100,
        editable: true,
        type: "boolean",
      },
      { field: "email", headerName: "Email", width: 200, editable: true },
      { field: "mobile", headerName: "Mobile", width: 150, editable: true },
      { field: "address", headerName: "Address", width: 250, editable: true },
      {
        field: "contact",
        headerName: "Contact",
        width: 180,
        renderCell: (params) => {
          const mail = "mailto:" + params.row.email;
          return (
            <Button
              sx={{ width: "120px" }}
              variant="contained"
              justifyContent="center"
              endIcon={<Send />}
              color="success"
              size="small"
              href={mail}
            >
              send
            </Button>
          );
        },
      },
      {
        field: "action",
        headerName: "Action",
        type: "actions",
        renderCell: (params) => (
          <ClientAction {...{ params, rowID, setRowId, clients, setClients }} />
        ),
      },
    ],
    [rowID, clients]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 2, mb: 3 }}
        >
          Manage client
        </Typography>
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          startIcon={<PersonAddAlt1 />}
          sx={{
            marginLeft: "300px",
            marginRight: "50px",
            marginTop: "30px",
            height: "35px",
            width: "200px",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          Add new
        </Button>
        <ClientDialog open={open} handleClose={handleClose} />
      </Box>
      <DataGrid
        columns={colums}
        rows={clients}
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
        }}
      />
    </Box>
  );
};

export default ClientField;
