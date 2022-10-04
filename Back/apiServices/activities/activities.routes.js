const express = require("express");
const { getActivities } = require("./activities.controller");



const activitiesRouter = express.Router();

activitiesRouter.get("/", getActivities)


module.exports = { activitiesRouter };