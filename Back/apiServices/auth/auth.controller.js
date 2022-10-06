

//NPM
const bycript = require("bcryptjs");
const { AppError } = require("../../utils/appError");
const { handleHttpError } = require("../../utils/handleError");

//Models
const { Users } = require("../users/users.model");


//controllers
const singUp = async (req, res, next) => {
  
  try {

    const { firstName, lastName, email, password } = req.body;

    const salt = await bycript.genSalt(10);
    const hashPassword = await bycript.hash(password, salt, );


    console.log(firstName, lastName, email, hashPassword);  

    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: hashPassword,

    });

    newUser.password = undefined;

    //Email welcome

    res.status(200).json({
      status: "succes",
      newUser
    })

  } catch (err) {
    
    handleHttpError(res,"ERROR_CREATE_USERS",403)
  }
}

const login = () => {
  console.log("login working")
}


module.exports  = {singUp, login}