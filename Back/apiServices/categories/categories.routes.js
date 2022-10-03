const express = require("express");
const { getCategories } = require("./categories.controller");



const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories)


module.exports = { categoriesRouter };