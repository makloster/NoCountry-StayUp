const express = require("express");
const { getGroups } = require("./groups.controller");



const groupsRouter = express.Router();

groupsRouter.get("/", getGroups)


module.exports = { groupsRouter };