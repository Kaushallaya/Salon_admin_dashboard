import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let database;

const connect = async () => {
  const MONGODB_URL = process.env.CONNECTION_STRING;
  //const MONGODB_URL = process.env.MONGO;

  if (database) return;

  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      console.log("Database Synced");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connect;
