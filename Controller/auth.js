import jwt from "jsonwebtoken";
import User from "../lib/Models/User.js";

export const CreateUser = async (req, res, next) => {
  const { token } = req.body;
  try {
    const decode = jwt.decode(token);
    switch (decode.type) {
      case "user.created":
        const { id, email, first_name, last_name } = decode.data.user;
        await User.create({
          kindeID: id,
          email,
          first_name,
          last_name,
        });
        res.status(201).json({ message: "User created successfully" });
        break;
      case "user.deleted":
        const { id: deleteUserID } = decode.data.user;
        await User.deleteOne({ kindeID: deleteUserID });
        res.status(201).json({ message: "User delete successfully" });
        break;
      default:
        return;
    }
    return res.status(200).json({ message: "actions performed successfully" });
  } catch (error) {
    next(error);
  }
};
