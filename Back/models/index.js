const { Users } = require("../apiServices/users/users.model");
const { Locals } = require('../apiServices/locals/locals.model');
const { Activities } = require("../apiServices/activities/activities.model");
const { Groups } = require("../apiServices/groups/groups.model");


const Models = {
 
  users: Users,
  locals: Locals,
  activities: Activities,
  group: Groups
}

module.exports = { Models }