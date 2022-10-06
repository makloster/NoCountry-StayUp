const { Locals } = require('../../config/database')

const getLocals = async (req, res, next) => {
  try {
    let allLocals = await Locals.findAll({ attributes: ['name'] })
    res.json(allLocals)
  } catch (error) {
    next(error)
  }
}

module.exports = { getLocals }
