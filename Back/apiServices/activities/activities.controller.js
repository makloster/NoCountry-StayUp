const db = require('./activities.model')
const {handleHttpError} = require('../../utils/handleError')

const getActivities = async (req, res, next) => {
  try {
    let allActivities = await db.Activities.findAll({ attributes: ['name'] })
    res.json(allActivities)
  } catch (error) {
    next(error)
  }
}


const createActivities = async (req, res, next) => {

  const activityBody = req.body

  try {
    const activity = await db.Activities.create(activityBody)

  if(!activity){
      throw  new Error('Error activity local')
  }

    res.status(201).json(
      {
        message: 'Activity created',
        data:activity
      }
    )
    
  } catch (error) {
    handleHttpError(res,"ERROR_CREATE_ACTIVITY",404)
  }

}



module.exports = { getActivities, createActivities }
