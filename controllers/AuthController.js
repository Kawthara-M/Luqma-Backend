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

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let customer = await Customer.findById(req.params.customerId)

    let matched = await middleware.comparePassword(
      oldPassword,
      customer.passwordDigest
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      customer = await Customer.findByIdAndUpdate(req.params.customerId, {
        passwordDigest,
      })
      let payload = {
        id: user.id,
        email: user.email,
      }
      return res
        .status(200)
        .send({ status: "Password Updated!", user: payload })
    }
    res
      .status(401)
      .send({ status: "Error", msg: "Old Password did not match!" })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred updating password!",
    })
  }
}

module.exports = {
  SignUp,
  Signin,
  UpdatePassword,
}
