const express = require('express')
const {getLocals, getDetailLocal, createLocal, updateLocal, deleteLocal} = require ('./locals.controller')
const {validatorLocals} = require('./middleware/locals.validator')
const {uploadFile} = require('../../utils/multer')


const localsRouter = express.Router()

localsRouter.get('/', getLocals)
localsRouter.get('/:id', getDetailLocal)
localsRouter.post('/',
validatorLocals, 
uploadFile.array('avatar[]', 6), createLocal)
localsRouter.put('/:id', validatorLocals, updateLocal)
localsRouter.delete('/:id', deleteLocal)


module.exports = {localsRouter}