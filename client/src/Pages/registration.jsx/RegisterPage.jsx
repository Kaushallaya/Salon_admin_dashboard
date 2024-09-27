import {
  Call,
  Email,
  Person,
  Person2,
  PersonAdd,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/useForm";
import { RegisterUser } from "../../setup/authonticationService";
import jwt_decode from "jwt-decode";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const RegisterPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await RegisterUser(values);
    console.log(res);
    console.log(res.emasil);
    if (res == "User saved successfully") {
      console.log(res);
      navigate("/dashboard");
    }
    //else if(res.email)
  };

  useEffect(() => {
    const token = urlParams.get("token");
    const decode = jwt_decode(token);
    console.log(decode.id);
    setValues({ ...values, email: decode.id });
  }, []);

  return (
    <div
      align="center"
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/dkbk51c9j/image/upload/v1669831151/pexels-thgusstavo-santana-1813272_hxz5ur.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Paper
          elevation={10}
          sx={{ maxWidth: 350, maxHeight: 500, padding: 2, mt: 10, mb: 20 }}
        >
          <Grid align="center">
            <Avatar sx={{ backgroundColor: "yellowgreen", marginBottom: 2 }}>
              <PersonAdd />
            </Avatar>
            <Typography variant="h4"> SIGN UP</Typography>
          </Grid>

          <FormControl
            sx={{ m: 1, maxWidth: "500px", mt: 2 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
              disabled
              id="standard-adornment-email"
              type="text"
              value={values.email}
              onChange={handleChange("email")}
              endAdornment={
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ m: 1, maxWidth: "800px" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, maxWidth: "500px", mt: 2 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-name">Full Name</InputLabel>
            <Input
              id="standard-adornment-password"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              endAdornment={
                <InputAdornment position="end">
                  <Person2 />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, maxWidth: "500px", mt: 2 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-mobile">
              Phone Number
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type="text"
              value={values.mobile}
              onChange={handleChange("mobile")}
              endAdornment={
                <InputAdornment position="end">
                  <Call />
                </InputAdornment>
              }
            />
          </FormControl>

          <Box mt={5}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 250, padding: 1 }}
              onClick={handleSubmit}
            >
              REGISTER
            </Button>
          </Box>

          <Box display="flex" justifyContent="center" mt="5px" mb="5px">
            <Typography fontSize={15}>Do you have an account?</Typography>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "darkcyan",
                marginLeft: "10px",
              }}
            >
              <Typography>Login</Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default RegisterPage;
