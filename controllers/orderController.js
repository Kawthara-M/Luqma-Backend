const Order = require('../models/Order')

const GetCartOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: res.locals.payload.id,
      status: 'cart'
    })
    if (orders.length > 0) {
      res.status(200).send(orders)
    } else {
      res.status(200).send('Empty Cart')
    }
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred getting cart !'
    })
  }
}
const GetPastOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: res.locals.payload.id,
      status: 'delivered'
    })
    if (orders.length > 0) {
      res.status(200).send(orders)
    } else {
      res.status(200).send('No previous orders yet.')
    }
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred getting past orders !'
    })
  }
}

const createOrder = async (req, res) => {
  try {
    let order = await Order.findOne({
      customer: res.locals.payload.id,
      status: 'cart'
    })

    if (!order) {
      order = await Order.create({
        ...req.body,
        customer: res.locals.payload.id,
        status: 'cart'
      })
    }
    res.status(200).send(order)
  } catch (error) {
    console.error(error)
    res.status(500).send('An error occured while adding a meal to the order')
  }
}

const updateOrder = async (req, res) => {
  try {
    let order = await Order.findByIdAndUpdate(req.params.id, {
      $push: { meals: req.body.mealId }
    })
      await order.updateOne(req.body)
    
    res.status(200).send(order)
  } catch (error) {
    console.log(error)
    res.status(500).send("An error occured meal can't be added")
  }
}

module.exports = {
  GetCartOrders,
  GetPastOrders,
  createOrder,
  updateOrder
}
