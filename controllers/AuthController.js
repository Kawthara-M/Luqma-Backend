const Customer = require('../models/Customer')

const middleware = require('../middleware/index')

const SignUp = async (req, res) => {
  try {
    console.log('test')
    console.log(req.body)

    const { name, email, passwordDigest, phone } = req.body

    console.log(req.body)

    let hashPassword = await middleware.hashPassword(passwordDigest)

    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      const customer = await Customer.create({
        name,
        email,
        hashPassword,
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
