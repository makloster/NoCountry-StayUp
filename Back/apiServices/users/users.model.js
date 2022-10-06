
const { DataTypes, } = require('sequelize')
const { db } = require('../../config/database')



const Users = db.define('Users', {
   
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    allowNull:false,
  },
  firstName: {
    type: DataTypes.STRING(16),
    allowNull:false

  },
  lastName: {
    type: DataTypes.STRING(16),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1500),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  hobbies: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull:false
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM([
      "user",
      "local",
      "admin",
      "superadmin",
    ])
  },
  friends: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull:false
  },
  personality: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
})
 
module.exports = { Users }
