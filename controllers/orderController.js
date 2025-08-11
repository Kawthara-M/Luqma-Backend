const Order = require("../models/Order")
const Meal = require("../models/Meal")
const mongoose = require("mongoose")

const GetCartOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: res.locals.payload.id,
      status: "cart",
    })
    res.status(200).send(orders)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred getting cart !",
    })
  }
}
const GetPastOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: res.locals.payload.id,
      status: "delivered",
    })
    res.status(200).send(orders)
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred getting past orders !",
      status: "Error",
      msg: "An error has occurred getting past orders !",
    })
  }
}

const createOrder = async (req, res) => {
  try {
    let order = await Order.findOne({
      customer: res.locals.payload.id,
      status: "cart",
    })
    const ObjectId = mongoose.Types.ObjectId
    const mealId = new ObjectId(req.body.meals.meal)

    const meal = await Meal.findById(mealId)

    if (!order) {
      if (meal) {
        let order = await Order.create({
          meals: [req.body.meals],
          customer: res.locals.payload.id,
          status: "cart",
          totalPrice: meal.price * parseInt(req.body.meals.quantity),
        })
        res.status(200).send(order)
      }
    } else {
      console.error("An order for this user already exist in cart.")
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("An error occured while adding a meal to the order")
    console.error(error)
    res.status(500).send('An error occured while adding a meal to the order')
  }
}

const updateOrder = async (req, res) => {
  try {
    let order = await Order.findById(req.params.id)
    const meal = order.meals.find(
      (oneMeal) => oneMeal.meal.toString() === req.body.mealId
    )
    const mealDetails = await Meal.findById(req.body.mealId)
    if (meal) {
      meal.quantity += parseInt(req.body.quantity)
      order.totalPrice +=
        parseFloat(mealDetails.price) * parseInt(req.body.quantity)
    } else {
      order.meals.push({ meal: req.body.mealId, quantity: req.body.quantity })
      order.totalPrice +=
        parseFloat(mealDetails.price) * parseInt(req.body.quantity)
    }

    await order.save()

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
  deleteOrder,
  deleteOrder,
}
