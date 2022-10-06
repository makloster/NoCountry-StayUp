const {allLocals, getIdLocal, create, update, deleteOne} = require('./locals.service')

const getLocals = async (req, res, next)=> {
  const locals = await allLocals()

  try {
    res.json(locals)

  } catch (error) {
    next(error.message)
  }
}

const getDetailLocal = async (req, res, next) => {

  try {
    const {id} = req.params

    const getId = await getIdLocal(id)

    if(!getId){
      return res.status(404).json({
        message: 'Local not found'
      })
    }

    res.status(200).json({
      message: 'Local found',
      data: getId
    })
  } catch (error) {
    next(error.message)
  }

}

const createLocal = async (req, res, next) => {

    const localBody = req.body

    try {
      const local = await create(localBody)

      res.status(201).json(local)
      
    } catch (error) {
      next(error.message)
    }

  }

const updateLocal = async (req, res, next) => {
  const {id} = req.params
  const localBody = req.body

  try {
    const upLocal = await update(localBody, id)

    return res.status(200).json({
      message: 'Local updated',
      data: upLocal,
      newData: localBody
    })
  } catch (error) {
    next(error.message)
  }


}

const deleteLocal = async (req, res, next) => {
  try {
    const id = req.params.id

    const deleted = await deleteOne(id)

    if (deleted === 0) {            
      return res.status(404).json({
          message: "Local not found",
      })

  }
      return res.status(200).json({
          message: "Deleted",
          id: id
      })


    
  } catch (error) {
    next(error.message)
  }





}

  
module.exports  = {getLocals, getDetailLocal,createLocal, updateLocal, deleteLocal}