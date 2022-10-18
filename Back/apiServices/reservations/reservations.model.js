const { DataTypes, } = require('sequelize')
const { db } = require('../../config/database')

const Reservations = db.define('reservation', {
  id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
  })
 
module.exports = { Reservations }
