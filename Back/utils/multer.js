const multer = require('multer')
const path = require('path')

const storage = multer.memoryStorage()

const uploadFile = multer({ storage });

module.exports = {uploadFile}