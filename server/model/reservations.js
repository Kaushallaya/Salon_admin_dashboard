import mongoose from "mongoose";

const reservationsSchema = new mongoose.Schema({
  service: { type: String, required: true },
  price: { type: String, required: true },
  service_pic: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true },
  client_name: { type: String, required: true },
  client_email: { type: String, required: true },
  client_mobile: { type: String, required: true },
  client_img: { type: String, required: true },
  stylist: { type: String, required: true },
});

const reservations = mongoose.model("reservations", reservationsSchema);

export default reservations;
