const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });



const db = new Sequelize({
  
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "47120785",
  port: 5432,
  database: "stayup",
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
    .catch(err => console.log(err));
  
  db.sync()
    .then(() => console.log("db sync"))
    .catch(err => console.log(err));
}

module.exports = { connectDB, db }