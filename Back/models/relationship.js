const {
    Locals,
    Activities,
    Reservations,
    Groups,
    Reviews,
} = require('./index')

const relationship = () => {

    Locals.hasMany(Activities, { foreignKey: 'localId' })
    Activities.belongsTo(Locals)

    Groups.belongsToMany(Locals, { through: Reservations })
    Locals.belongsToMany(Groups, { through: Reservations })

    // Locals.hasMany(Reviews)
    // Reviews.belongsTo(Locals)

}

module.exports = { relationship }
