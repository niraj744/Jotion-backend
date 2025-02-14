import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    kindeID: { type: String, required: true },
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
