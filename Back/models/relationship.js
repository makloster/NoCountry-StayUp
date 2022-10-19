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

    Locals.hasMany(Groups, { through: Reservations })
    Groups.hasMany(Locals, { through: Reservations })

    // Locals.hasMany(Reviews)
    // Reviews.belongsTo(Locals)

}

module.exports = { relationship }
