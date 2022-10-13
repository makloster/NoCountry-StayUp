const { DataTypes } = require('sequelize')
const {db} = require('../../config/database')

const Locals = db.define('local', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1500), // ToDo ¿longitud?
      allowNull: false
    },
    email: { // de contacto
      type: DataTypes.STRING,
      allowNull: false
      // ToDo validación de mail
    },
    avatar: {
      type: DataTypes.ARRAY(DataTypes.STRING), // es una Img
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(11),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    schedule: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    services: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    activity_id: {
      type : DataTypes.INTEGER,
      allowNull: false      
    },
    groups_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviews_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  })


module.exports = {Locals}
