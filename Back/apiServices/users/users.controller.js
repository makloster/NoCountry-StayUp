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
        next(err);
    }
 }

 
module.exports = {updateName}