const { DataTypes } = require('sequelize')
const {db} = require('../../config/database')

const Groups = db.define('group', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    name: { // el organizador puede elegir nombre para el grupo si quiere
      type: DataTypes.STRING(40),
      allowNull: true
    },
    description: { // qué quieren hacer en grupo
      type: DataTypes.STRING(1500), // ToDo ¿longitud?
      allowNull: false
    },
    avatar: { // si quieren ponerle una imagen
      type: DataTypes.STRING, // es una Img
      allowNull: true
    },    
  })

module.exports = { Groups }
