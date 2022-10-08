const express = require('express')
const {getUsers} = require('./users.controller')



const usersRouter = express.Router()

usersRouter.get('/', getUsers)

//Http:


module.exports = {usersRouter}