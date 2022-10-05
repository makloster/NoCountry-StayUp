const express = require('express')
const {getLocals} = require ('./locals.controller')



const localsRouter = express.Router()

localsRouter.get('/', getLocals)


module.exports = {localsRouter}