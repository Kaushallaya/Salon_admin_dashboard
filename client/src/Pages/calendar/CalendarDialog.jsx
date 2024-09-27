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
import { useState } from "react";
import { Form, useForm } from "../../components/useForm";
import { getStylist } from "../../setup/stylistService";
import { getServices } from "../../setup/servicesService";
import { getClient } from "../../setup/clientService";
import { useEffect } from "react";
import FormControl from "../../components/FormControls";
import { SaveReservation } from "../../setup/reservationService";

const CalendarDialog = ({
  open,
  handleClose,
  time,
  setSuccess,
  setSavedData,
}) => {
  const [curClient, setCurClient] = useState([]);
  const [curService, setCurService] = useState([]);
  const [curStylist, setCurStylist] = useState([]);
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [stylists, setStylists] = useState([]);
  const [clientId, setClientId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [stylistId, setStylistId] = useState("");
  const [allClints, setAllClients] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [allStylist, setAllStylist] = useState([]);
  const [newReservation, setNewReservation] = useState([]);

  useEffect(() => {
    getAllClients();
    getAllServices();
    getAllStylist();
  }, []);

  const getAllStylist = async () => {
    let res = await getStylist();
    setAllStylist(res.data);
    const newStylists = res.data.map((stylist, index) => {
      return { ...stylists, key: index, id: stylist._id, title: stylist.name };
    });
    setStylists(newStylists);
  };

  const getAllServices = async () => {
    let res = await getServices();
    setAllServices(res.data);
    const newServices = res.data.map((service, index) => {
      return { ...services, key: index, id: service._id, title: service.title };
    });
    setServices(newServices);
  };

  const getAllClients = async () => {
    let res = await getClient();
    setAllClients(res.data);
    const newClints = res.data.map((client, index) => {
      return { ...clients, key: index, id: client._id, title: client.name };
    });
    setClients(newClints);
  };

  const initialFValues = {
    serviceId: 0,
    stylistId: 0,
    clientId: 0,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("serviceId" in fieldValues)
      temp.serviceId = fieldValues.serviceId ? "" : "Service is required.";
    if ("stylistId" in fieldValues)
      temp.stylistId = fieldValues.stylistId ? "" : "Stylist is required.";
    if ("clientId" in fieldValues)
      temp.clientId = fieldValues.clientId ? "" : "Client is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFValues,
    true,
    validate,
    setClientId,
    setServiceId,
    setStylistId
  );

  let checkError = true;

  if (
    values.serviceId !== "" &&
    values.stylistId !== "" &&
    values.clientId !== "" &&
    values.bookingDate !== null &&
    values.bookingTime !== null
  ) {
    checkError = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
    //console.log(time);

    if (!checkError) {
      const dateTime = { bookingDate: time, bookingTime: time };
      newReservation.push(dateTime);

      const res = allStylist.filter((item) => item._id == values.stylistId);
      newReservation.push(res[0].name);

      const res3 = allServices.filter((item) => item._id == values.serviceId);
      res3.push({
        service: res3[0].title,
        price: res3[0].price,
        service_img: res3[0].img,
      });
      newReservation.push(res3[1]);

      const res2 = allClints.filter((item) => item._id == values.clientId);
      res2.push({
        name: res2[0].name,
        email: res2[0].email,
        mobile: res2[0].mobile,
        client_img: res2[0].img,
      });
      newReservation.push(res2[1]);
      setSavedData(newReservation);
      //console.log(newReservation);

      const responce = await SaveReservation(newReservation);
      //console.log(responce);
      if (responce == "Reservation saved successfully") {
        setSuccess("success");
        setNewReservation([]);
        handleClose();
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>Reservation Form</DialogTitle>
      <DialogContent>
        <Form onSubmit={handleSubmit}>
          <Box mt={3}></Box>
          <FormControl.SelectField
            name="serviceId"
            label="Service"
            value={values.serviceId}
            onChange={handleInputChange}
            options={services}
            error={errors.serviceId}
          />

          <FormControl.SelectField
            name="stylistId"
            label="Stylist"
            value={values.stylistId}
            onChange={handleInputChange}
            options={stylists}
            error={errors.stylistId}
          />

          <FormControl.SelectField
            name="clientId"
            label="Client"
            value={values.clientId}
            onChange={handleInputChange}
            options={clients}
            error={errors.clientId}
          />
          <Box mt={5} width={500} display="flex" justifyContent="end">
            <Button variant="contained" type="submit" sx={{ width: "100px" }}>
              Save
            </Button>
            <Button sx={{ width: "100px" }} onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarDialog;
