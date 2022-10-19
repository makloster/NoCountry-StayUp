const { Reservations } = require('../../models/index')
const { handleHttpError } = require("../../utils/handleError")

const getReservations = async (req, res, next) => {
  try {
    let allReservations = await Reservations.findAll()
    res.json(allReservations)

  } catch (error) {
    next(error)
  }
}

const getReservationDetail = async (req, res) => {

  try {
    const { id } = req.params
    const getById = await Reservations.findByPk(id)

    if (!getById) {
      return res.status(404).json({
        message: 'Reservation not found!'
      })
    }

    res.status(200).json({
      message: `Reservation found!`,
      data: getById
    })

  } catch (error) {
    handleHttpError(res, "ERROR_GET_RESERVATION", 404)
  }
}

const createReservation = async (req, res) => {
  const reservationBody = req.body

  try {
    const reservation = await Reservations.create(reservationBody)
    if (!reservation) {
      throw new Error('Reservation was not created!')
    }

    res.status(201).json(
      {
        message: `Reservation created successfully!`,
        data: reservation
      }
    )

  } catch (error) {
    // handleHttpError(res, "ERROR_CREATE_RESERVATION", 500)
    res.json(error.message)
  }
}

const deleteReservation = async (req, res) => {
  try {
    const id = req.params.id
    const reservationDeleted = await Reservations.destroy(
      {
        where: { id }
      }
    )

    if (!reservationDeleted) {
      return res.status(404).json({
        message: "reservation was not found!",
      })
    }

    return res.json({
      message: `Reservation ${id} deleted`,
      data: reservationDeleted
    })
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_RESERVATION", 500)
  }
}

module.exports = {
  getReservations,
  getReservationDetail,
  createReservation,
  deleteReservation
}
