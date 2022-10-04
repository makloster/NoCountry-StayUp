const { DataTypes } = require('sequelize')

// los chats de grupos, serían a los "messages" como las "fav_lists" a los "fav_items"

module.exports = (sequelize) => {
  sequelize.define('chat', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
  })
}
