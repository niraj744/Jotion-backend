import { Router } from "express";
import { CreateUser } from "../Controller/auth.js";

const authRouter = Router();

authRouter.post("/CreateUser", CreateUser);

export { authRouter };
