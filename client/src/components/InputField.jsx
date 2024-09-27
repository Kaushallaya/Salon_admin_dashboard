import React from "react";
import { Box, TextField } from "@mui/material";

const InputField = (props) => {
  const { name, label, value, error = null, onChange } = props;

  return (
    <Box>
      <TextField
        sx={{ mb: 2, minWidth: 500 }}
        //required
        size="small"
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error === null ? "" : error}
      />
    </Box>
  );
};

export default InputField;
