const { handleHttpError } = require("../../utils/handleError");
const jwt = require("jsonwebtoken");
const bycript = require("bcryptjs");

const updateName = async (req, res) => {

    try {

        const { userActive } = req;
        
        const { firstName, lastName } = req.body;

         await userActive.update({
            firstName,
            lastName
        })
        
        res.status(204).json({
            status:"succes"
        })

    } catch (err) {
       handleHttpError(res,"ERROR_UPDATENAME",500)
    }
 }

const updateEmail = async (req, res) => {
     
    try {

        const { userActive } = req;

        console.log(userActive)

        const { email } = req.body;

        console.log(email)

        await userActive.update({
            email,
        }) 

        res.status(204).json({
            status:"sucess"
        })
        
    } catch (err) {
        handleHttpError(res,"ERROR_UPDATE_EMAIL",500)
    }
}
 
const updatePassword = async (req, res, next) => {

    try {

        const { userActive } = req;

        const { password } = req.body;

        const salt = await bycript.genSalt(10);
        const hashPassword = await bycript.hash(password, salt,);
        

        await userActive.update({
            password:hashPassword,
        })

        res.status(200).json({
            status:"succes"
        })


        
    } catch (error) {
        handleHttpError(res,"ERROR_UPDATE_PASSWORD",500)
    }
}
 

module.exports = {
    updateName,
    updateEmail,
    updatePassword
}