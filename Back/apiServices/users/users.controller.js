const { Users } = require('../../config/database')

const getUsers = async (req, res, next) => {
  try {
    let allUsers = await Users.findAll({ attributes: ['name'] })
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
}

module.exports = { getUsers }
