const { DataTypes } = require('sequelize')
const {db} = require('../../config/database')

const Activities = db.define('activity', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false

    }
    
  })

module.exports = {Activities}
