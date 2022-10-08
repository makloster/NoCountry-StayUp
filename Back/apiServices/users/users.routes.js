const express = require('express')

//Controllers

const {updateName} = require('./users.controller')


//Middlewares
const { checkToken } = require('../../middleware/checkToken.middleware')



const usersRouter = express.Router()


usersRouter.put("/:id",
  checkToken,
  updateName
)



module.exports = {usersRouter}