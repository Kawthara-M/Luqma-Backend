const Customer = require('../models/Customer')
const Order = require('../models/Order')
const middleware = require('../middleware/index')
const validatePassword = require('../validators/passwordValidator.js')

const SignUp = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body

    /*   if (!validatePassword(password)) {
      return res.status(400).json({ error: "Weak Password! Have a mix of capital and lower letters, digits, and unique symbols!" })
    } */ //uncomment when everything is done

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
      let payload = {
        id: customer._id,
        email: customer.email
      }
      console.log(payload)

      let token = middleware.createToken(payload)

      return res.send({ customer: payload, token })
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

// this controller require handling like signout in front-end to clear localStorage
const deletAccount = async (req, res) => {
  try {
    const userId = req.params.id

    if (res.locals.payload.id !== userId) {
      return res.status(403).send({ msg: 'Unauthorized request' })
    }

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
  CheckSession,
  deletAccount
}
