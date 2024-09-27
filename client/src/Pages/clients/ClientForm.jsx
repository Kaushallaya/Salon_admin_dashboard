import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../../components/FormControls";
import { Form, useForm } from "../../components/useForm";
import { SaveUser } from "../../setup/clientService";

const ClientForm = ({ onClose }) => {
  const initialFValues = {
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
    validate
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
      const res = await SaveUser(values);
      if (res == "User saved successfully") {
        console.log(res);
        onClose();
      }
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

export default ClientForm;
