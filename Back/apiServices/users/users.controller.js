const { Users } = require('./users.model')
const { handleHttpError } = require("../../utils/handleError")
const jwt = require("jsonwebtoken")
const bycript = require("bcryptjs")

const optionsNoPass = { attributes: { exclude: ['password'] } }

const getUsers = async (req, res) => {

  try {
    let allUsers = await Users.findAll(optionsNoPass)
    res.json(allUsers)

  } catch (err) {
    // handleHttpError(res, "ERROR_GET_USERS", 500)
    res.json(error.message)
  }
}


const getUserDetail = async (req, res) => {

  try {
    const { id } = req.params
    const getId = await Users.findOne(optionsNoPass)

    if (!getId) {
      return res.status(404).json({
        message: 'User not found!'
      })
    }

    res.json({
      message: `User found!`,
      data: getId
    })

  } catch (error) {
    // handleHttpError(res, "ERROR_GET_USER", 404)
    res.json(error.message)
  }
}

// const createUser = async (req, res) => {
//   const userBody = req.body

//   try {
//     const user = await Users.create(userBody)
//     if (!user) {
//       throw new Error('User was not created!')
//     }

//     res.status(201).json(
//       {
//         message: `User ¡created Éxito!sfully!`,
//         data: user
//       }
//     )

//   } catch (error) {
//     handleHttpError(res, "ERROR_CREATE_USERS", 500)
//   }
// }

const updateName = async (req, res) => {

  try {

    const { userActive } = req

    const { firstName, lastName } = req.body

    await userActive.update({
      firstName,
      lastName
    })

    res.status(204).json({
      status: "Success!"
    })

  } catch (err) {
    handleHttpError(res, "ERROR_UPDATENAME", 500)
  }
}

const updateEmail = async (req, res) => {

  try {

    const { userActive } = req

    console.log(userActive)

    const { email } = req.body

    console.log(email)

    await userActive.update({
      email,
    })

    res.status(204).json({
      status: "Success!"
    })

  } catch (err) {
    handleHttpError(res, "ERROR_UPDATE_EMAIL", 500)
  }
}

const updatePassword = async (req, res, next) => {

  try {

    const { userActive } = req

    const { password } = req.body

    const salt = await bycript.genSalt(10)
    const hashPassword = await bycript.hash(password, salt,)


    await userActive.update({
      password: hashPassword,
    })

    res.json({
      status: "Success!"
    })

  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_PASSWORD", 500)
  }
}

const disableUser = async (req, res) => {
  try {
    // const id = req.params.id
    // const userDisabled = await Users.findOne({
    //   where: { id },
    //   attributes: { include: ['firstName', 'lastName', 'id'] }
    // })

    // if (!userDisabled) {
    //   return res.status(404).json({
    //     message: "User was not found!",
    //   })
    // }

    // userDisabled.update({
    //   status: "disable"
    // })

    // return res.json({
    //   message: `User ${id} disabled!`,
    //   data: userDisabled
    // })
    res.send('PENDIENTE POR REVISAR!')
  } catch (error) {
    res.json(error.message)
  }
}

// const deleteUser = async (req, res) => {
//   try {
//     const id = req.params.id
//     const userDisabled = await Users.destroy(
//       {
//         where: { id }
//       }
//     )

//     if (!userDisabled) {
//       return res.status(404).json({
//         message: "User was not found!",
//       })
//     }

//     return res.json({
//       message: `User ${id} deleted`,
//       data: userDisabled
//     })
//   } catch (error) {
//     handleHttpError(res, "ERROR_DELETE_USER", 500)
//   }
// }

module.exports = {
  getUsers,
  getUserDetail,
  // createUser,
  updateName,
  updateEmail,
  updatePassword,
  disableUser
}
