const { handleHttpError } = require("../../utils/handleError");
const { Users } = require("./users.model");

const updateName = async (req, res) => {

    try {

        const { userActive } = req;
        
    
        const { firstName, lastName } = req.body;

      

         await userActive.update({
            firstName,
            lastName
        })
        
        res.status(200).json({
            status:"succes"
        })

    } catch (err) {
       handleHttpError(res,"ERROR_UPDATENAME",500)
    }
 }

 
module.exports = {updateName}