const { Sequelize, DataTypes } = require("sequelize")
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })

const db = new Sequelize({
  
  dialect: "postgres",
  host: "stayup.co42ajjsnddx.us-east-1.rds.amazonaws.com",
  username: "postgres",
  password: "postgres123321",
  port: 5432,
  database:"postgres",
  logging: false,
  dialectOptions:
  process.env.NODE_ENV ==='production'
      ? {
         ssl: {
             required:true,
             rejectUnauthorized:false,
         }
        }
     : {},
})

const connectDB = () => {

  db.authenticate()
    .then(() => console.log("db auth"))
    .catch(err => console.log(err))
  
  db.sync({ force: false })
    .then(() => console.log("db sync"))
    .catch(err => console.log(err))
}

module.exports = { connectDB, db }
