const mongoose = require("mongoose")

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Meal = mongoose.model("Meal", mealSchema)
module.exports = Meal
