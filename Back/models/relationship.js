const { Locals } = require('../apiServices/locals/locals.model')
const { Reviews } = require('../apiServices/reviews/reviews.model')
const { Activities } = require('../apiServices/activities/activities.model')
const { Groups } = require('../apiServices/groups/groups.model')

const relationship = () => {

    Locals.hasMany(Activities)
    Activities.belongsTo(Locals)

    Locals.hasMany(Reviews)
    Reviews.belongsTo(Locals)

    Locals.hasMany(Groups)
    Groups.belongsTo(Locals)

}

module.exports = { relationship }
