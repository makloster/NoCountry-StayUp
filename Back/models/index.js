const { Users } = require("../apiServices/users/users.model")
const { Locals } = require('../apiServices/locals/locals.model')
const { Activities } = require("../apiServices/activities/activities.model")
const { Reservations } = require("../apiServices/reservations/reservations.model")
const { Groups } = require("../apiServices/groups/groups.model")

const Models = {
  Activities,
  Groups,
  Locals,
  Reservations,
  Users
}

module.exports = Models
