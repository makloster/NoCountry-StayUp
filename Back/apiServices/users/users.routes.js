const express = require('express')

//Controllers

const {updateName} = require('./users.controller')


//Middlewares
const { checkToken } = require('../../middleware/checkToken.middleware')
const { userExist } = require('./middleware/userExist')
const { userAccount } = require('../../middleware/userAcc.middleware')



const usersRouter = express.Router()


usersRouter.put("/:id",
  userExist,
  checkToken,
  userAccount,
  updateName
)



module.exports = {usersRouter}