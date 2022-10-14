const {Locals} = require('./locals.model')
const {Activities} = require('../activities/activities.model')
const { handleHttpError } = require("../../utils/handleError");
const {ref, uploadBytes, getDownloadURL} = require('firebase/storage');
const { storage } = require('../../utils/firebase');

const getLocals = async (req, res, next)=> {

  const local = await Locals.findAll({attributes: ['id', 'name', 'description', 'avatar', 'price','address', 'schedule', 'services'], 
  include: [{model: Activities, attributes: ['name']}]
  })

  try {
    res.json(local)

  } catch (error) {
    handleHttpError(res,"ERROR_GET_LOCALS",404)
  }
}

const getDetailLocal = async (req, res, next) => {

  try {
    const {id} = req.params

    const getId = await Locals.findByPk(id);

    if(!getId){
      return res.status(404).json({
        message: 'Local not found'
      })
    }

  const imgLocal = getId.avatar.map( async img => {

    const imgFirebase = ref(storage, img)
    
    const imgDownload = await getDownloadURL(imgFirebase)

    return imgDownload
  })

  const avatar = await Promise.all(imgLocal);  

    res.status(200).json({
      message: 'Local found',
      avatar,
      data: getId
    })

  } catch (error) {
    handleHttpError(res,"ERROR_GET_LOCAL",404)
  }

}

const createLocal = async (req, res, next) => {

  const {name, description,email, price,address, schedule, services} = req.body
  
  try {
    
  const imgLocal = req.files.map(async img => {

    const imgFilename = ref(storage, `${Date.now()}_img_${img.originalname}`)

    const imgUpload= await uploadBytes(imgFilename, img.buffer)

    return imgUpload.metadata.name

  })

  const avatar = await Promise.all(imgLocal)

  const local = await Locals.create({
    name, email, description, price, address, schedule, services, avatar
  })

  if(!local){
      throw  new Error('Error create local')
  }

    res.status(201).json(
      {
        message: 'Local created',
        data:local
      }
    )
    
  } catch (error) {
    handleHttpError(res,"ERROR_CREATE_LOCALS",404)
  }

  }

const updateLocal = async (req, res, next) => {

  const {id} = req.params

  const localBody = req.body

  try {

    const imgLocal = req.files.map(async img => {

      const imgFilename = ref(storage, `${Date.now()}_img_${img.originalname}`)
      
      const imgUpload= await uploadBytes(imgFilename, img.buffer)
  
      return imgUpload.metadata.name
  
    })
  
    const avatar = await Promise.all(imgLocal)

    const update = await Locals.update({
      name: localBody.name,
      description: localBody.description,
      email: localBody.email,
      avatar,
      price: localBody.price,
      address: localBody.address,
      schedule: localBody.schedule,
      services: localBody.services

    },
  {
      where:{
      id: parseInt(id)
      }
    }
  )

  if(update == 0) {
      throw new Error("Error local updated");
  }

    return res.status(200).json({
      message: 'Local updated',
      newData: {localBody, avatar}
    })
  } catch (error) {
    handleHttpError(res,"ERROR_UPDATE_LOCAL",404)
  }

}

const deleteLocal = async (req, res, next) => {
  try {
    const id = req.params.id

    const localDeleted = await Locals.destroy(
      { 
          where: {id}
      }
    );

    if (localDeleted === 0) {            
      return res.status(404).json({
          message: "Local not found",
      })
    }

      return res.status(200).json({
          message: "Deleted",
          id: id
      })


    
  } catch (error) {
    handleHttpError(res,"ERROR_DELETE_LOCAL",404)
  }

}
  
module.exports  = {getLocals, getDetailLocal,createLocal, updateLocal, deleteLocal}
