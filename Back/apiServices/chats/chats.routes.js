const express = require("express");
const { getChat } = require("./chats.controller");



const chatRouter = express.Router();

chatRouter.get("/", getChat)


module.exports = { chatRouter };