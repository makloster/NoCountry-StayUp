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
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
      // ToDo validación de mail
    },
    hobbies: {
      type: DataTypes.ARRAY(DataTypes.UUID), // ToDo deberíamos asociar las FK de los actividades elegidas con una tabla media?
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING, // es una Img
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM({
        values: ['user', 'local', 'admin', 'superadmin']
      }),
      allowNull: false
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.UUID), // ToDo podríamos poner los FK de los usuarios amigos?
      allowNull: true
    },
    personality: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },    
  })
}
