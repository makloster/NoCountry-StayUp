const express = require("express");
const { getFavsItem } = require("./favs_items.controller");



const favsItemsRouter = express.Router();

// favsItemsRouter.get("/", getFavsItem)


module.exports = { favsItemsRouter };