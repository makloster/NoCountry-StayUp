const {Activities} = require('../activities/activities.model')
const {Locals} = require('../locals/locals.model')
const { Op } = require("sequelize");
const {handleHttpError} = require('../../utils/handleError')


const search = async (req,res,next) => {

    const searchBar = req.query.name

    try {
        
        const searchActivities = await Activities.findAll({
            attributes: ['name'],
            where: {
                name: {
                    [Op.like]: `%${searchBar}%` 
                }
            }
        })
    
        const searchLocals = await Locals.findAll(
            { attributes: ['name'],
                where: {
                    name: {
                                    [Op.like]: `%${searchBar}%`                
                                }
                }
        })
        

        res.status(200).json({
            searchActivities,
             searchLocals
        })

    } catch (error) {
        handleHttpError(res, 'ERROR_SEARCH', 500)
    }


}




module.exports = {search}