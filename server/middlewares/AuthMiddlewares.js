import jwt from "jsonwebtoken";
import admins from "../model/admins.js";

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "@McQfTjW", async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
        next();
      } else {
        const admin = await admins.findById(decodedToken.id);
        if (admin) res.json({ status: true, user: admin.email });
        else res.json({ status: false });
        next();
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};
