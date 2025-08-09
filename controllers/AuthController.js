const Customer = require('../models/Customer')
const Order = require('../models/Order')
const middleware = require('../middleware/index')

const SignUp = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body

    let hashPassword = await middleware.hashPassword(password)

    let existingUser = await Customer.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'A user with that email has already been registered!' })
    } else {
      const customer = await Customer.create({
        name,
        email,
        phone,
        passwordDigest: hashPassword
      })
      res.send(customer)
    }
  } catch (error) {
    throw error
  }
}

const SignIn = async (req, res) => {
  try {
    const { email, passwordDigest } = req.body

    const customer = await Customer.findOne({ email })

    let matched = await middleware.comparePassword(
      passwordDigest,
      customer.passwordDigest
    )

    if (matched) {
      let payload = {
        id: customer._id,
        email: customer.email
      }

      let token = middleware.createToken(payload)
      return res.send({ customer: payload, token })
    }

    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

// const getCustomerProfile = async (req, res) => {
//   try {
//     const customerId = req.params.id
//     const customer = await Customer.findById(customerId)

//     if (!customer) {
//       return res.status(404).send('Customer not found')
//     }

//     res.status(200).json(customer)
//   } catch (error) {
//     throw error
//   }
// }

// const updateCustomerProfile = async (req, res) => {
//   try {
//     const { name, email, phone } = req.body

//     const customerId = req.params.id

//     const updatedCustomer = await Customer.findByIdAndUpdate(
//       customerId,
//       {
//         name,
//         email,
//         phone
//       },
//       { new: true }
//     )

//     if (!updatedCustomer) {
//       return res.status(404).send('Customer not found')
//     }

//     res.status(200).json(updatedCustomer)
//   } catch (error) {
//     throw error
//   }
// }
// const UpdatePassword = async (req, res) => {
//   try {
//     console.log('I entered update password')
//     const { oldPassword, newPassword } = req.body
//     let customer = await Customer.findById(req.params.id)
//     let matched = await middleware.comparePassword(
//       oldPassword,
//       customer.passwordDigest
//     )
//     if (matched) {
//       let passwordDigest = await middleware.hashPassword(newPassword)
//       customer = await Customer.findByIdAndUpdate(req.params.id, {
//         passwordDigest
//       })
//       let payload = {
//         id: customer.id,
//         email: customer.email
//       }
//       return res
//         .status(200)
//         .send({ status: 'Password Updated!', user: payload })
//     }
//     res
//       .status(401)
//       .send({ status: 'Error', msg: 'Old Password did not match!' })
//   } catch (error) {
//     console.log(error)
//     res.status(401).send({
//       status: 'Error',
//       msg: 'An error has occurred updating password!'
//     })
//   }
// }

// this controller require handling like signout in front-end to clear localStorage
const deletAccount = async (req, res) => {
  try {
    const userId = req.params.id

    // uncomment when login is ready
    /* if (res.locals.payload.id !== userId) {
      return res.status(403).send({ msg: "Unauthorized request" })
    }*/

    // am not sure if this works as order still don't have data, but it's supposed to delete orders made by of current user account before deleting the account
    // await Order.deleteMany({ customer: userId } )
    await Customer.findByIdAndDelete(userId)

    res.status(200).send({ msg: 'Account successfully deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: 'Failed to delete account' })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.status(200).send(payload)
}
module.exports = {
  SignUp,
  SignIn,
  // getCustomerProfile,
  // updateCustomerProfile,
  // UpdatePassword,
  CheckSession,
  deletAccount
}
