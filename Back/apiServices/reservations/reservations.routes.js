const express = require('express')
const { getReservations, getReservationDetail, deleteReservation, createReservation } = require('./reservations.controller')

const reservationRouter = express.Router()

reservationRouter.get('/', getReservations)
reservationRouter.get('/:id', getReservationDetail)

reservationRouter.post('/', createReservation)

reservationRouter.delete('/:id', deleteReservation)

module.exports = { reservationRouter }
