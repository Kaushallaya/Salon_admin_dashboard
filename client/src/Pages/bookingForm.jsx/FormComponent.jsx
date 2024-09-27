import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../components/FormControls";
import { useForm, Form } from "../../components/useForm";
import { getClient } from "../../setup/clientService";
import { SaveReservation } from "../../setup/reservationService";
import { getServices } from "../../setup/servicesService";
import { getStylist } from "../../setup/stylistService";
// import { ToastContainer, toast } from "../../../node_modules/react-toastify/dist";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent = ({
  setCurClient,
  setCurService,
  setCurStylist,
  handleClose,
}) => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");
  const [allClints, setAllClients] = useState([]);
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [allServices, setAllServices] = useState([]);
  const [stylists, setStylists] = useState([]);
  const [stylistId, setStylistId] = useState("");
  const [allStylist, setAllStylist] = useState([]);
  const [newReservation, setNewReservation] = useState([]);

  const booking = [];

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
    // id: 0,
    serviceId: 0,
    stylistId: 0,
    clientId: 0,
    bookingDate: null,
    bookingTime: null,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("serviceId" in fieldValues)
      temp.serviceId = fieldValues.serviceId ? "" : "Service is required.";
    if ("stylistId" in fieldValues)
      temp.stylistId = fieldValues.stylistId ? "" : "Stylist is required.";
    if ("clientId" in fieldValues)
      temp.clientId = fieldValues.clientId ? "" : "Client is required.";
    if ("bookingDate" in fieldValues) {
      temp.bookingDate = fieldValues.bookingDate
        ? ""
        : "Date Field is required.";
    }
    if ("bookingTime" in fieldValues) {
      temp.bookingTime =
        fieldValues.bookingTime !== null ? null : "Time Field is required.";
    }

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
  // console.log(stylistId);

  if (stylistId.length !== 0) {
    allStylist.map((item) => {
      if (item._id == stylistId) setCurStylist(item);
    });
  }

  if (serviceId.length !== 0) {
    allServices.map((item) => {
      if (item._id == serviceId) setCurService(item);
    });
  }
  if (clientId.length !== 0) {
    allClints.map((item) => {
      if (item._id == clientId) setCurClient(item);
    });
  }

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

    if (!checkError) {
      newReservation.push(values);

      allStylist.map((item) => {
        if (item._id == stylistId) {
          newReservation.push(item.name);
        }
      });

      allServices.map((item) => {
        if (item._id == serviceId) {
          newReservation.push({
            service: item.title,
            price: item.price,
            service_img: item.img,
          });
        }
      });

      allClints.map((item) => {
        if (item._id == clientId) {
          newReservation.push({
            name: item.name,
            email: item.email,
            mobile: item.mobile,
            client_img: item.img,
          });
        }
      });
      //console.log(newReservation);
      const res = await SaveReservation(newReservation);
      if (res == "Reservation saved successfully") {
        console.log(res);
        setNewReservation([]);
        handleClose();
        toast.success("Reservation Saved succesfuly!", {
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
    }
  };
  return (
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

      <FormControl.DatePickerField
        name="bookingDate"
        label="Date"
        value={values.bookingDate}
        onChange={handleInputChange}
        error={errors.bookingDate}
      />
      <FormControl.TimePickerFirld
        name="bookingTime"
        label="Time"
        value={values.bookingTime}
        onChange={handleInputChange}
        error={errors.bookingTime}
        dateValue={values.bookingDate}
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
  );
};

export default FormComponent;
