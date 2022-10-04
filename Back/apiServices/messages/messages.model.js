const { DataTypes } = require('sequelize')

// Tiene que estar relacionado ¿a un grupo y a una reserva? ¿O solo al grupo? Quizá es mejor que vaya solo atado al grupo.
// cada MESSAGE tiene UN grupo, grupo tiene MUCHOS messages

module.exports = (sequelize) => {
  sequelize.define('message', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
  })
}
