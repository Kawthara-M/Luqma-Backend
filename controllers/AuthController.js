const Customer = require("../models/Customer")
const Order = require("../models/Order")
const middleware = require("../middleware/index")
const validatePassword = require("../validators/passwordValidator.js")

const SignUp = async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body
    let existingUser = await Customer.findOne({ email })

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "A user with that email has already been registered!" })
    } else {
      if (!validatePassword(password)) {
        return res.status(400).json({
          error:
            "Weak Password! Have a mix of -lower & upper- case letters, digits, and unique symbols!",
        })
      } else {
        if (password === confirmPassword) {
          let hashPassword = await middleware.hashPassword(password)
          const customer = await Customer.create({
            name,
            email,
            phone,
            passwordDigest: hashPassword,
          })
          let payload = {
            id: customer._id,
            email: customer.email,
          }

          let token = middleware.createToken(payload)

          return res.send({ user: payload, token })
        } else {
          return res.status(400).json({
            error: "Passwords must match!",
          })
        }
      }
    }
  } catch (error) {
    throw error
  }
}

const SignIn = async (req, res) => {
  try {
    const { email, passwordDigest } = req.body

    const customer = await Customer.findOne({ email })

    if (customer) {
      let matched = await middleware.comparePassword(
        passwordDigest,
        customer.passwordDigest
      )
      if (matched) {
        let payload = {
          id: customer._id,
          email: customer.email,
        }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })
      }
    } else {
      res.status(401).send({ status: "Error", msg: "Invalid Credentials" })
    }
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "Invalid Credentials!" })
  }
}

const deletAccount = async (req, res) => {
  try {
    const userId = req.params.id

    if (res.locals.payload.id !== userId) {
      return res.status(403).send({ msg: "Unauthorized request" })
    }

    await Order.deleteMany({ customer: userId })
    await Customer.findByIdAndDelete(userId)

    res.status(200).send({ msg: "Account successfully deleted" })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: "Failed to delete account" })
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
  deletAccount,
}
