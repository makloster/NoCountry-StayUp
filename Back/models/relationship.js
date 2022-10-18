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

    Locals.hasMany(Groups)
    Groups.belongsTo(Locals)

    Locals.hasMany(Reservations)
    Reservations.belongsTo(Locals)
    
    Groups.hasMany(Reservations)
    Reservations.belongsTo(Groups)

    // Locals.hasMany(Reviews)
    // Reviews.belongsTo(Locals)

}

module.exports = { relationship }
