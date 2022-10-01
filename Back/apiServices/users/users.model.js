const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1500), // ToDo ¿longitud?
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
      // ToDo validación de mail
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.UUID), // ToDo podríamos poner los FK de los usuarios amigos?
      allowNull: false
    },
    hobbies: {
      type: DataTypes.ARRAY(DataTypes.UUID), // ToDo podríamos poner los FK de los actividades elegidas?
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING, // es una Img
    },
    role: {
      type: DataTypes.ENUM({
        values: ['user', 'local', 'admin', 'superadmin']
      }),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
}
