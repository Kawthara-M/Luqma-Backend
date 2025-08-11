const Order = require('../models/Order')
const Deliveryman = require('../models/Deliveryman')

const GetCartOrders = async (req, res) => {
  try {
    console.log('Payload:', res.locals.payload)

    const orders = await Order.find({
      customer: res.locals.payload.id,
      status: 'cart'
    })
    res.status(200).send(orders)
  } catch (error) {
    console.error('Error in GetCartOrders:', error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred getting cart!'
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
      res.status(200).send([])
    }
  } catch (error) {
    console.error('Error in GetPastOrders:', error)
    res.status(401).send({
      msg: 'An error has occurred getting past orders!'
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
      const deliveryMen = await Deliveryman.find()
      let randomDeliveryMan = null
      if (deliveryMen.length > 0) {
        const randomIndex = Math.floor(Math.random() * deliveryMen.length)
        randomDeliveryMan = deliveryMen[randomIndex]._id
      }

      order = await Order.create({
        ...req.body,
        customer: res.locals.payload.id,
        status: 'cart',
        deliveryMan: randomDeliveryMan
      })
      res.status(200).send(order)
    } else {
      console.error('An order for this user already exists in cart.')
      res.status(409).send({ msg: 'Order already exists in cart' })
    }
  } catch (error) {
    console.error('Error in createOrder:', error)
    res.status(500).send('An error occurred while creating the order.')
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

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    await order.deleteOne()
    res.status(200)
  } catch (error) {
    console.log(error)
    res.status(500).send("An error occured meal can't be deleted")
  }
}

module.exports = {
  GetCartOrders,
  GetPastOrders,
  createOrder,
  updateOrder,
  deleteOrder
}
