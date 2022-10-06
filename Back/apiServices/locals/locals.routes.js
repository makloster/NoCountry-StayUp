const express = require('express')
const {getLocals, getDetailLocal, createLocal, updateLocal, deleteLocal} = require ('./locals.controller')



const localsRouter = express.Router()

localsRouter.get('/', getLocals)
localsRouter.get('/:id', getDetailLocal)
localsRouter.post('/', createLocal)
localsRouter.put('/:id', updateLocal)
localsRouter.delete('/:id', deleteLocal)


module.exports = {localsRouter}