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
    })
  }
}

const createOrder = async (req, res) => {
  try {
    console.log("create order")
    let order = await Order.findOne({
      customer: res.locals.payload.id,
      status: "cart",
    })
    console.log(req.body.meals.meal)
    const ObjectId = mongoose.Types.ObjectId
    const mealId = new ObjectId(req.body.meals.meal)
    console.log("meal id:" + mealId)

    const meal = await Meal.findById(mealId)
    if (meal) {
      console.log("meal:" + meal)
    } else {
      console.log("no meal")
    }

    if (!order) {
      let order = await Order.create({
        meals: [req.body.meals],
        customer: res.locals.payload.id,
        status: "cart",
         totalPrice: meal.price // would this work?
      })
      console.log("meals in body" + req.body.meals)
      res.status(200).send(order)
    } else {
      console.error("An order for this user already exist in cart.")
    }
  } catch (error) {
     console.error(error)
    res.status(500).send("An error occured while adding a meal to the order")
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
     // console.log(mealDetails)
      meal.quantity += 1
      order.totalPrice+=parseInt(mealDetails.price)
    } else {
      order.meals.push({ meal: req.body.mealId, quantity: 1 })
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
}
