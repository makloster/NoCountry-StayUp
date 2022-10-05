const express = require('express')
const {getReviews} = require('./reviews.controller')



const reviewsRouter = express.Router()

reviewsRouter.get('/', getReviews)


module.exports = {reviewsRouter}