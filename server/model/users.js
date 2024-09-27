import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: String, required: true },
  img: { type: String, required: true },
});

const users = mongoose.model("clients", userSchema);

export default users;
