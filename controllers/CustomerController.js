const Customer = require('../models/Customer')
const middleware = require('../middleware/index')
const validatePassword = require('../validators/passwordValidator.js')

const getCustomerProfile = async (req, res) => {
  try {
    console.log('test')
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
      /*   if (!validatePassword(newPassword)) {
      return res.status(400).json({ error: "Weak Password! Have a mix of capital and lower letters, digits, and unique symbols!" })
    } */ //uncomment when everything is done
      let passwordDigest = await middleware.hashPassword(newPassword)
      customer = await Customer.findByIdAndUpdate(req.params.id, {
        passwordDigest
      })
      let payload = {
        id: customer.id,
        email: customer.email
      }
      return res
        .status(200)
        .send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}
module.exports = {
  getCustomerProfile,
  updateCustomerProfile,
  UpdatePassword
}
