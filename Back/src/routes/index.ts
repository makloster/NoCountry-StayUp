import express from "express";
import userRouter from "../apiServices/users/user.routes";
import authRouter from "../apiServices/auth/auth.routes";

const router = express.Router()

//endpoints
router.use("/auth", authRouter)
router.use("/users", userRouter)

export default router;


