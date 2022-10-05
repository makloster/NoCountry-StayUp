const { DataTypes } = require('sequelize')

// Tiene que estar relacionada a un grupo y aun local, cada RESERVATION tiene UN grupo y UN local, cada uno de esos tiene MUCHAS reservations

module.exports = (sequelize) => {
  sequelize.define('reservation', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
  })
}
