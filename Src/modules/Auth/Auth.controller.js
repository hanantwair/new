import jwt from "jsonwebtoken";
import userModel from "../../../DB/Models/User.Model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(500).json({ message: "Email exists" });
    }
    const hashedPassword = bcrypt.hashSync(
      password,
      parseInt(process.env.SALTROUND)
    );
    const token = jwt.sign({ email }, process.env.SIGN_UP_SECRET);

    user = await userModel.create({
      userName,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({ message: "success", user, token });
  } catch (err) {
    return res.status(500).json({ message: "Error", err: err.stack });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).json({ message: "Password does not match" });
    }
    const token = jwt.sign({ id: user._id }, process.env.LOG_IN_SECRET);
    return res.status(200).json({ message: "success", token });
  } catch (err) {
    return res.status(500).json({ message: "Error", err: err.stack });
  }
};
