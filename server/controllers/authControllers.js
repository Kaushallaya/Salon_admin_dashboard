import jwt from "jsonwebtoken";
import admins from "../model/admins.js";

const expTime = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "@McQfTjW", { expiresIn: expTime });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export const register = async (req, res, next) => {
  //console.log(req.body);
  try {
    const { email, password } = req.body;
    const responce = await admins.create({ email, password });
    const token = createToken(responce._id.toString());
    console.log(token);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: expTime * 1000,
    });

    return res.status(200).json({ success: "User saved successfully" });
  } catch (error) {
    console.log(error);
    const err = handleErrors(error);
    return res.status(200).json({ Error: error });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const responce = await admins.login(email, password);
    const token = createToken(responce._id.toString());
    console.log(token);

    res.cookie("jwt", token, { httpOnly: false, maxAge: expTime * 1000 });
    res.cookie(`Cookie token name`, `encrypted cookie string Value`);
    // document.cookie = "sample cookie";
    // console.log(res.cookie.jwt);
    //res.status(200).json({ user: responce._id, status: true });
    //res.cookies.set("token", "test_token", { signed: true, httpOnly: true });
    return res
      .status(200)
      .json({ success: "User saved successfully", token: token });
    //return res.status(200).json({ token: token });
  } catch (error) {
    console.log("error this");
    const err = handleErrors(error);
    console.log(err);
    //return res.json({ Error: err });
    return res.status(200).json({ success: err });
  }
};
