import React from "react";
import { useState } from "react";

export const useForm = (
  initialFValues,
  validateOnChange = false,
  validate,
  setClientId,
  setServiceId,
  setStylistId
) => {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
    if (name == "clientId") setClientId(value);
    if (name == "serviceId") setServiceId(value);
    if (name == "stylistId") setStylistId(value);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
};

export const Form = (props) => {
  const { children, ...other } = props;

  return (
    <form autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};
