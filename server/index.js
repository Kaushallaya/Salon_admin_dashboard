import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./database/database.connection.js";
import bookingRoutes from "./routes/dbRoute.js";
import cookieParser from "cookie-parser";
import Cookies from "universal-cookie";
const cookies = new Cookies();
cookies.set("myCat", "Pacman", { path: "/" });
console.log(cookies.get("myCat")); // Pacman
debugger;

connect();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser());

// app.get("/cookie", (req, res) => {
//   res.cookie(`Cookie token name`, `encrypted cookie string Value`);
//   res.send("Cookie have been saved successfully");
// });

//Mongo DB Routes
app.use(bookingRoutes);

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Your server is running on port 5000");
});
