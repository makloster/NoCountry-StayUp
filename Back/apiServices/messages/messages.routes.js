const express = require('express')
const {getMsg} = require('./messages.controller')



const messagesRouter = express.Router()

messagesRouter.get('/', getMsg)


module.exports = {messagesRouter}