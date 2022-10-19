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
  },
  hour: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  minutes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  localId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = { Reservations }
