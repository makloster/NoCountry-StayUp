const express = require("express");
const { getFavsList } = require("./favs_lists.controller");



const favsListRouter = express.Router();

// favsListRouter.get("/", getFavsList)


module.exports = { favsListRouter };