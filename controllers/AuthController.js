const Customer = require('../models/Customer')

const middleware = require('../middleware/index')

const SignUp = async (req, res) => {
  try {
    const { name, email, phone, passwordDigest } = req.body

    let hashPassword = await middleware.hashPassword(passwordDigest)

    let existingUser = await Customer.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
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

const Signin = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const getCustomerProfile = async (req, res) => {
  try {
    const customerId = req.params.id
    const customer = await Customer.findById(customerId)

    if (!customer) {
      return res.status(404).send('Customer not found')
    }

    res.status(200).json(customer)
  } catch (error) {
    throw error
  }
}

const updateCustomerProfile = async (req, res) => {
  try {
    const { name, email, phone } = req.body

    const customerId = req.params.id

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      {
        name,
        email,
        phone
      },
      { new: true }
    )

    if (!updatedCustomer) {
      return res.status(404).send('Customer not found')
    }

    res.status(200).json(updatedCustomer)
  } catch (error) {
    throw error
  }
}
const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let customer = await Customer.findById(req.params.id)
    let matched = await middleware.comparePassword(
      oldPassword,
      customer.passwordDigest
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      customer = await Customer.findByIdAndUpdate(req.params.id, {
        passwordDigest
      })
      let payload = {
        id: customer.id,
        email: user.email
      }
      return res.status(200).send({ status: 'Password Updated!', user: payload })
    }
    res.status(401).send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.status(200).send(payload)
}
module.exports = {
  SignUp,
  Signin,
  getCustomerProfile,
  updateCustomerProfile,
  UpdatePassword,
  CheckSession,
}
