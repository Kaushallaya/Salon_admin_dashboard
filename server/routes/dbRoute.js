import express from "express";
import users from "../model/users.js";
import services from "../model/services.js";
import stylist from "../model/stylist.js";
import reservations from "../model/reservations.js";
import admins from "../model/admins.js";
import { login, register } from "../controllers/authControllers.js";
import { checkUser } from "../middlewares/AuthMiddlewares.js";
import {
  inviteAddmin,
  remindTomorrowReservation,
} from "../controllers/mailControllers.js";

const router = express.Router();

router.post("/dashboard", checkUser);
router.post("/register", register);
router.post("/login", login);

router.post("/sendinvitemail", inviteAddmin);
router.post("/sendreminderemail", remindTomorrowReservation);

router.post("/client/save", (req, res) => {
  let newUser = new users(req.body);

  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "User saved successfully",
    });
  });
});

router.get("/client", async (req, res) => {
  try {
    const getClients = await users.find().sort({ _id: -1 });
    return res.status(200).json(getClients);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

router.patch("/updateClient/:id", async (req, res) => {
  try {
    const updatedClient = await users.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.status(200).json({ success: "User updated successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/client/delete/:id", async (req, res) => {
  try {
    const updatedClient = await users.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: "Delete successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/services", async (req, res) => {
  try {
    const getServices = await services.find().sort({ _id: -1 });
    return res.status(200).json(getServices);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

router.post("/stylist/save", (req, res) => {
  let newStylist = new stylist(req.body);

  newStylist.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Stylist saved successfully",
    });
  });
});

router.get("/stylist", async (req, res) => {
  try {
    const getStylist = await stylist.find().sort({ _id: -1 });
    return res.status(200).json(getStylist);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

router.patch("/updateStylist/:id", async (req, res) => {
  try {
    const updatedClient = await stylist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.status(200).json({ success: "User updated successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.post("/reservation/save", (req, res) => {
  let newReservation = new reservations(req.body);

  newReservation.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Reservation saved successfully",
    });
  });
});

router.get("/reservation", async (req, res) => {
  try {
    const getReservation = await reservations.find().sort({ _id: -1 });
    return res.status(200).json(getReservation);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

router.patch("/updateReservation/:id", async (req, res) => {
  try {
    const updatedBooking = await reservations.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res
      .status(200)
      .json({ success: "Reservation updated successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/reservation/delete/:id", async (req, res) => {
  try {
    const updatedClient = await reservations.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: "Delete successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/searchreservation/:date", async (req, res) => {
  try {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const getReservation = await reservations
      .find(
        { date: date.toLocaleDateString() },
        {
          client_name: 1,
          client_email: 1,
          service: 1,
          date: 1,
          time: 1,
          price: 1,
        }
      )
      .sort({ _id: -1 });
    return res.status(200).json(getReservation);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

export default router;
