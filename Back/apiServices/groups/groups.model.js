const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('group', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
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
}
