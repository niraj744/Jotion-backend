import jwt from "jsonwebtoken";
import User from "../lib/Models/User.js";

export const CreateUser = async (req, res, next) => {
  const { token } = req.body;
  try {
    const decode = jwt.decode(token);
    if (decode.type === "user.created") {
      const { id, email, first_name, last_name } = decode.data.user;
      const finduser = await User.findOne({ kindeID: id });
      if (finduser) return;
      await User.create({
        kindeID: id,
        email,
        first_name,
        last_name,
      });
      res.status(201).json({ message: "User created successfully" });
    }
    if (decode.type === "user.deleted") {
      const { id: deleteUserID } = decode.data.user;
      await User.deleteOne({ kindeID: deleteUserID });
      res.status(201).json({ message: "User delete successfully" });
    }
    return res.status(200).json({ message: "actions performed successfully" });
  } catch (error) {
    next(error);
  }
};
