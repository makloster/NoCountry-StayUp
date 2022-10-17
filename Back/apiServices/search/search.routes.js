const express = require('express')
const { search } = require('./search.controller')


const searchRouter = express.Router()


searchRouter.get('/', search)

module.exports={searchRouter}