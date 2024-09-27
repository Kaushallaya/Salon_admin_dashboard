import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerField = (props) => {
  const { name, label, value, error = null, onChange } = props;
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        format="DD-MM-YYYY"
        minDate={new Date()}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            sx={{ width: "230px" }}
            error={!!error}
            helperText={error === null ? "" : error}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;
