const Order = require("../models/Order")
const Meal = require("../models/Meal")
const Delivery = require("../models/Deliveryman")
const mongoose = require("mongoose")

const GetCartOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: res.locals.payload.id,
      status: "cart",
    })
      // Populate the restaurant info on the order
      .populate("restaurant")

      // Populate the deliveryMan details
      .populate("deliveryMan")

      // Populate each meal in meals array, and for each meal also populate its restaurant details
      .populate({
        path: "meals.meal",
        populate: {
          path: "restaurant",
          model: "Restaurant",
        },
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
      // Populate the restaurant info on the order
      .populate("restaurant")

      // Populate the deliveryMan details
      .populate("deliveryMan")

      // Populate each meal in meals array, and for each meal also populate its restaurant details
      .populate({
        path: "meals.meal",
        populate: {
          path: "restaurant",
          model: "Restaurant",
        },
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
    let order = await Order.findOne({
      customer: res.locals.payload.id,
      status: "cart",
    })

    const ObjectId = mongoose.Types.ObjectId
    const mealId = new ObjectId(req.body.meals.meal)
    const meal = await Meal.findById(mealId)

    const deliveryMen = await Delivery.find()
    if (deliveryMen.length === 0) {
      console.log("No delivery men found")
      return res.status(400).send({ msg: "No delivery men available" })
    }

    const randomIndex = Math.floor(Math.random() * deliveryMen.length)
    const deliveryMan = deliveryMen[randomIndex]

    console.log("Randomly selected delivery man:", deliveryMan)

    if (!order) {
      if (meal) {
        let order = await Order.create({
          meals: [req.body.meals],
          customer: res.locals.payload.id,
          status: "cart",
          totalPrice: meal.price * parseInt(req.body.meals.quantity),
          deliveryMan: deliveryMan._id,
          restaurant: meal.restaurant || null,
        })
        return res.status(200).send(order)
      } else {
        return res.status(400).send({ msg: "Meal not found" })
      }
    } else {
      console.error("An order for this user already exist in cart.")
      return res.status(400).send({ msg: "Order in cart already exists" })
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
    const newQuantity = parseInt(req.body.quantity)
    if (meal) {
      const oldQuantity = meal.quantity
      const priceDiff = (newQuantity - oldQuantity) * mealDetails.price
      meal.quantity += newQuantity
      order.totalPrice += priceDiff

    } else {
      order.meals.push({ meal: req.body.mealId, quantity: req.body.quantity })
      order.totalPrice +=
        parseFloat(mealDetails.price) * parseInt(req.body.quantity)
    }

    await order.save()

    res.status(200).send(order)
  } catch (error) {
    console.log(error)
    res.status(500).send("An error occurred, meal can't be added")
  }
}

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    await order.deleteOne()
    res.status(200).send({ msg: "Order deleted successfully" })
  } catch (error) {
    console.log(error)
    res.status(500).send("An error occurred, meal can't be deleted")
  }
}
const deleteMealFromOrder = async (req, res) => {
  console.log("entered delete")
  const { orderId, mealId } = req.params

  try {
    const order = await Order.findById(orderId)
    if (!order) {
      return res.status(404).send({ msg: "Order not found" })
    }

    // Remove the meal from the meals array
    order.meals = order.meals.filter(
      (mealItem) => mealItem.meal.toString() !== mealId
    )

    await order.save()

    // Optionally re-populate and return the updated order
    const updatedOrder = await Order.findById(orderId)
      .populate("restaurant")
      .populate("deliveryMan")
      .populate({
        path: "meals.meal",
        populate: { path: "restaurant", model: "Restaurant" },
      })

    res.status(200).send([updatedOrder]) // Match frontend structure
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: "Failed to delete meal from order" })
  }
}

module.exports = {
  GetCartOrders,
  GetPastOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  deleteMealFromOrder,
}
