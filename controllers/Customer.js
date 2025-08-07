const Customer = require("./../models/Customer")

exports.customer_new_POST = async (req, res) => {
 //initial just for database to work
  const customer=await Customer.create(req.body)
  return res.send(customer)
}
