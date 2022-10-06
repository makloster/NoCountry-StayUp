const express = require("express");
const { singUp, login } = require("./auth.controller");



const authRouter = express.Router();

authRouter.post("/sign-up", singUp)
authRouter.post("/login", login)


module.exports = { authRouter };