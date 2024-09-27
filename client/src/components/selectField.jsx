import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";

const selectField = (props) => {
  const { name, label, value, error = null, onChange, options } = props;
  return (
    <Box>
      <FormControl
        variant="outlined"
        sx={{ mb: 3, minWidth: 500 }}
        {...(error && { error: true })}
      >
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          size="small"
          label={label}
          name={name}
          value={value == 0 ? "" : value}
          onChange={onChange}
        >
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default selectField;
