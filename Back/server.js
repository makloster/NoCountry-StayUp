const { app } = require("./app")
const { connectDB } = require("./config/database")
const { Models } = require("./models")
const { relationship } = require('./models/relationship')
const PORT = process.env.DB_PORT

const startServer = async () => {
  
  relationship()

  await connectDB()

  app.listen(PORT, () => {

    console.log("express running on PORT:" + PORT)
  })
}

startServer()
