import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminsSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email is Required"], unique: true },
  password: { type: String, required: [true, "Password is Required"] },
});

adminsSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

adminsSchema.statics.login = async function (email, password) {
  const admin = await this.findOne({ email });
  if (admin) {
    const auth = await bcrypt.compare(password, admin.password);
    if (auth) {
      return admin;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const admins = mongoose.model("admins", adminsSchema);

export default admins;
