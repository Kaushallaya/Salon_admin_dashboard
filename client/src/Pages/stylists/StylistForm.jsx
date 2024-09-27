import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../components/FormControls";
import { Form, useForm } from "../../components/useForm";
import { SaveUser } from "../../setup/clientService";
import { getServices } from "../../setup/servicesService";
import { SaveStylist } from "../../setup/stylistService";

const StylistForm = ({ onClose }) => {
  const [clientId, setClientId] = useState("");
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    let res = await getServices();
    setAllServices(res.data);
    const newServices = res.data.map((service, index) => {
      return { ...services, key: index, id: service._id, title: service.title };
    });
    setServices(newServices);
  };

  const initialFValues = {
    serviceId: 0,
    name: "",
    email: "",
    address: "",
    mobile: "",
    age: "",
    img: "",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues) {
      temp.name = fieldValues.name ? "" : "Your Name is required.";
    }
    if ("address" in fieldValues) {
      temp.address = fieldValues.address ? "" : "Address is required.";
    }
    if ("mobile" in fieldValues) {
      temp.mobile = fieldValues.mobile ? "" : "Nummber is not valid..";
    }
    if ("email" in fieldValues)
      temp.email =
        /$^|.+@.+..+/.test(fieldValues.email) && fieldValues.email
          ? ""
          : "Email is not valid.";

    if ("age" in fieldValues)
      temp.age = fieldValues.age ? "" : "Service is required.";

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
    setServiceId
  );

  let checkError = true;

  if (
    values.name !== "" &&
    values.address !== "" &&
    values.mobile !== "" &&
    values.email !== "" &&
    /$^|.+@.+..+/.test(values.email) &&
    values.age !== ""
  ) {
    checkError = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
    if (!checkError) {
      //   console.log(values);

      if (serviceId.length !== 0) {
        allServices.map(async (item) => {
          if (item._id == serviceId) {
            const newData = [
              { ...values, service: item.title, service_img: item.img },
            ];
            console.log(newData[0]);
            const res = await SaveStylist(newData[0]);
            if (res == "Stylist saved successfully") {
              console.log(res);
              onClose();
            }
          }
        });
      }

      //const newData = [...values,{service:}]

      //   const res = await SaveUser(values);
      //   if (res == "User saved successfully") {
      //     console.log(res);
      //     onClose();
      //   }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box mt={3}></Box>
      <Box justifyContent="center">
        <FormControl.InputField
          name="name"
          label="Name"
          value={values.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <FormControl.SelectField
          name="serviceId"
          label="Service"
          value={values.serviceId}
          onChange={handleInputChange}
          options={services}
          error={errors.serviceId}
        />
        <FormControl.InputField
          name="email"
          label="Email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <FormControl.InputField
          name="address"
          label="Address"
          value={values.address}
          onChange={handleInputChange}
          error={errors.address}
        />
        <FormControl.InputField
          name="mobile"
          label="Mobile"
          value={values.mobile}
          onChange={handleInputChange}
          error={errors.mobile}
        />
        <FormControl.InputField
          name="age"
          label="Age"
          value={values.age}
          onChange={handleInputChange}
          error={errors.age}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button>
        <Box>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Box>
      </Box>
    </Form>
  );
};

export default StylistForm;
