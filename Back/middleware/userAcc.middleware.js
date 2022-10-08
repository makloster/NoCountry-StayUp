
/* 
Este middleware es para saber si el usuario es el dueño de la cuenta
que se va a usar
 */

const { handleHttpError } = require("../utils/handleError")

const userAccount = async (req,res,next) => {

  try {

    const { user, userActive } = req;

    console.log(user,user)

    if (userActive.id !== user.id) {
      handleHttpError(res,"THIS_ACC_DONT_BELONG_TO_YOU",403)
    };

    next();

  } catch (err) {
    
  }

}

module.exports = { userAccount };