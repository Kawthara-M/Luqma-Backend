const Customer = require("../models/Customer")

const middleware = require("../middleware/index")

const SignUp = async (req, res) => {
  try {

    const { name, email, phone, passwordDigest } = req.body

    let hashPassword = await middleware.hashPassword(passwordDigest)

    let existingUser = await Customer.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send("A user with that email has already been registered!")
    } else {
      const customer = await Customer.create({
        name,
        email,
        phone,
        passwordDigest: hashPassword,
      })
      res.send(customer)
    }
  } catch (error) {
    throw error
  }
}

const Signin = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  SignUp,
  Signin,
}
