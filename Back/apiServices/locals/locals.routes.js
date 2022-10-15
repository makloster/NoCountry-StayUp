const express = require('express')
const {getLocals, getDetailLocal, createLocal, updateLocal, deleteLocal} = require ('./locals.controller')
const {validatorLocals} = require('./middleware/locals.validator')
const {uploadFile} = require('../../utils/multer')
const { checkToken } = require('../../middleware/checkToken.middleware')



const localsRouter = express.Router()

localsRouter.get('/', 
checkToken, 
getLocals
)

localsRouter.get('/:id', getDetailLocal)

localsRouter.post('/', 
checkToken, 
uploadFile.array('avatar', 6),
validatorLocals, 
createLocal
)

localsRouter.put('/:id', 
checkToken, 
uploadFile.array('avatar', 6), 
updateLocal
)

localsRouter.delete('/:id',checkToken, deleteLocal)


module.exports = {localsRouter}