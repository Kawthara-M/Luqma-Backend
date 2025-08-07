const Customer = require('../models/Customer')

const middleware = require('../middleware/index')

const SignUp = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body

    let passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      const customer = await Customer.create({
        username,
        email,
        passwordDigest,
        phone
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
  Signin
}
