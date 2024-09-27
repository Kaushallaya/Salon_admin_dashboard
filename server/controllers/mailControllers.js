import jwt from "jsonwebtoken";
import sendInviteEmail from "../Services/sendAdminEmailer.js";
import sendRemindEmail from "../Services/sendRemindEmailer.js";

const expTime = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "@McQfTjW", { expiresIn: expTime });
};

export const inviteAddmin = async (req, res) => {
  try {
    const data = req.body;
    const token = createToken(data.email);
    await sendInviteEmail(data, token);
    //const responce = await admins.login(email, password);
    //   const token = createToken(responce._id.toString());
    //console.log(res);
    return res.status(200).json({ success: "Invited sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

export const remindTomorrowReservation = async (req, res) => {
  try {
    const data = req.body;
    await sendRemindEmail(data);
    return res
      .status(200)
      .json({ success: `${data.client_name} Remind sent successfully` });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
