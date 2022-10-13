const express = require("express");
const { getActivities, createActivities } = require("./activities.controller");



const activitiesRouter = express.Router();

activitiesRouter.get("/", getActivities)
activitiesRouter.post("/", createActivities)


module.exports = { activitiesRouter };