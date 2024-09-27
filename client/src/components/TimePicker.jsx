import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const TimePickerFirld = (props) => {
  const { name, label, value, error = null, onChange } = props;
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  const disabledHours = () => {
    const hours = [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23, 24];
    const minute = [];
    if (selectDate == today) {
      const currentHour = moment().hour();
      const currentMinut = moment().minute();
      for (let i = 8; i < currentHour && i < 18; i++) {
        hours.push(i);
      }
      for (let x = 0; x < currentMinut; x++) {
        minute.push(x);
      }
    }
    return { disabledHours: () => hours };
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={value}
        format="DD-MM-YYYY"
        onChange={(time) => onChange(convertToDefEventPara(name, time))}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            sx={{ width: "230px", marginLeft: "40px" }}
            error={!!error}
            helperText={error === null ? "" : error}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePickerFirld;
