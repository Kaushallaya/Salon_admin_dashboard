import { Email, Person, Visibility, VisibilityOff } from "@mui/icons-material";
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
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import FormControl from "../../components/FormControls";
import { Form } from "../../components/useForm";
import { LoginUser } from "../../setup/authonticationService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    // try {
    //   let res = await axios.get(`http://localhost:5000/cookie`);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
    let res = await LoginUser(values);
    if (res.success == "User saved successfully") {
      console.log(res);
      sessionStorage.setItem("login_user", res.token);
      window.location = "/dashboard";
      // navigate("/dashboard");
    } else if (res.email != "") {
      toast.error(res.email, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      //console.log(res.email);
    } else {
      toast.error(res.password, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      //console.log(res.password);
    }
  };

  return (
    <div
      align="center"
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/dkbk51c9j/image/upload/v1669831151/pexels-thgusstavo-santana-1813272_hxz5ur.jpg"})`,
        backgroundSize: "cover",
        height: 700,
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
            <Avatar sx={{ backgroundColor: "#1bbd7e", marginBottom: 2 }}>
              <Person />
            </Avatar>
            <Typography variant="h4"> SIGN IN</Typography>
          </Grid>

          <FormControl
            sx={{ m: 1, maxWidth: "500px", mt: 2 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
            <Input
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

          <Box mt={5}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 250, padding: 1 }}
              onClick={handleSubmit}
            >
              LOGIN
            </Button>
          </Box>

          <Box display="flex" justifyContent="center" mt="5px" mb="5px">
            <Typography fontSize={15}>Forgot your password?</Typography>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "darkcyan",
                marginLeft: "10px",
              }}
            >
              <Typography>Recover</Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default LoginPage;
