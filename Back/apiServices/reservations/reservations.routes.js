const express = require('express')
const {getReservation} = require('./reservations.controller')



const reservationRouter = express.Router()

reservationRouter.get('/', getReservation)


module.exports = {reservationRouter}