const { Groups } = require('./groups.model')
const {handleHttpError} = require('../../utils/handleError')

const getGroups = async (req, res, next) => {
  try {
    let allGroups = await Groups.findAll({ attributes: ['name'] })
    res.json(allGroups)
  } catch (error) {
    next(error)
  }
}

const createGroups = async (req, res, next) => {
  try {
    const groupBody = req.body

    const createGroup = await Groups.create(groupBody)

    res.status(200).json(createGroup)

  } catch (error) {
    handleHttpError(res,'ERROR_CREATE_GROUP', 500)
  }
}

module.exports = { getGroups, createGroups }
