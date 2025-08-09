const mongoose = require("mongoose")
const Meal = require("../models/Meal")
require("dotenv").config()
console.log(process.env.MONGO_URI)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    seedMeals()
  })
  .catch((e) => {
    console.error("MongoDB connection error . . .:", e.message)
  })

const jasmiId = new mongoose.Types.ObjectId("6896047c12fbac76be186d8e")
const cocoId = new mongoose.Types.ObjectId("6896047d12fbac76be186d8f")

const mealData = [
  {
    name: "Cheeseburger",
    description: "Juicy beef burger with cheddar cheese",
    price: 2.5,
    restaurant: jasmiId,
  },
  {
    name: "Chicken Nuggets",
    description: "Crispy chicken nuggets, 6 pieces",
    price: 1.8,
    restaurant: jasmiId,
  },
  {
    name: "Spaghetti Bolognese",
    description: "Pasta with slow-cooked meat sauce",
    price: 4.2,
    restaurant: cocoId,
  },
  {
    name: "Chicken Caesar Salad",
    description: "Grilled chicken over romaine lettuce with Caesar dressing",
    price: 3.5,
    restaurant: cocoId,
  },
]

const seedMeals = async () => {
  try {
    await Meal.insertMany(mealData)

    console.log("Meals seeded successfully!")
    mongoose.connection.close()
  } catch (err) {
    console.error("Error seeding meals:", err)
  }
}
