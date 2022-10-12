const { Locals } = require('../apiServices/locals/locals.model')
const { Review } = require('../apiServices/reviews/reviews.model')
const { Activity } = require('../apiServices/activities/activities.model')
const { Groups } = require('../apiServices/groups/groups.model')


const relationship = () => {

    Locals.hasOne(Activity)
    Activities.belongsTo(Locals)

    Locals.hasMany(Review)
    Review.belongsTo(Locals)

    Locals.hasMany(Groups)
    Groups.belongsTo(Locals)

}


module.exports = {relationship}