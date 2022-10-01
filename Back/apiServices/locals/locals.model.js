const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('local', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.STRING, // es una Img
      allowNull: false
    },    
  })
}
