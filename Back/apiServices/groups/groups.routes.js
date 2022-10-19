const express = require("express");
const { getGroups, createGroups } = require("./groups.controller");
const { validatorGroups } = require("./middleware/groups.validator");



const groupsRouter = express.Router();

groupsRouter.get("/", getGroups)
groupsRouter.post('/', validatorGroups,createGroups)


module.exports = { groupsRouter };