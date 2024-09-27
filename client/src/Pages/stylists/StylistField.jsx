import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

import { grey } from "@mui/material/colors";
import { PersonAddAlt1 } from "@mui/icons-material";
import StylistDialog from "./StylistDialog";
import StylistAction from "./StylistAction";
import { getStylist } from "../../setup/stylistService";

const StylistField = ({ setSelectedLink, link }) => {
  const [pageSize, setPageSize] = useState(5);
  const [rowID, setRowId] = useState(null);
  const [open, setOpen] = useState(false);
  const [stylist, setStylist] = useState([]);

  useEffect(() => {
    getAllStylist();
    setSelectedLink(link);
  }, []);

  const getAllStylist = async () => {
    let res = await getStylist();
    setStylist(res.data);
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

      {
        field: "service_img",
        headerName: "Service",
        width: 70,
        renderCell: (params) => (
          <Tooltip title={params.row.service}>
            <Avatar src={params.row.service_img} variant="rounded" />
          </Tooltip>
        ),
        sortable: false,
        filterable: false,
      },
      { field: "service", headerName: "Service", width: 150, editable: true },
      { field: "age", headerName: "Age", width: 50, editable: true },
      { field: "email", headerName: "Email", width: 200, editable: true },
      { field: "mobile", headerName: "Mobile", width: 150, editable: true },
      {
        field: "active",
        headerName: "Active",
        width: 100,
        editable: true,
        type: "boolean",
      },
      {
        field: "action",
        headerName: "Save",
        type: "actions",
        renderCell: (params) => (
          <StylistAction {...{ params, rowID, setRowId }} />
        ),
      },
    ],
    [rowID]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    getAllStylist();
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
          Manage Stylist
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
        <StylistDialog open={open} handleClose={handleClose} />
      </Box>
      <DataGrid
        columns={colums}
        rows={stylist}
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

export default StylistField;
