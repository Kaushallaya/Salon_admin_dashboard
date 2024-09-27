import mongoose from "mongoose";

const stylistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: String, required: true },
  active: { type: String, required: true },
  img: { type: String, required: true },
  service: { type: String, required: true },
  service_img: { type: String, required: true },
});

const stylist = mongoose.model("stylist", stylistSchema);

export default stylist;
