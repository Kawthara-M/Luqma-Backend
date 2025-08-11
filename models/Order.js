const mongoose = require("mongoose")

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    deliveryMan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryMan",
      default: null,
    },
    meals: [
      {
        meal: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
        quantity: { type: Number, default: 1 },
      },
    ],

    totalPrice: {
      type: Number,
    },
    address: {
      type: String,
      //   required: true,
    },
    status: {
      type: String,
      enum: ["cart", "submitted", "processing", "delivered"],
      default: "cart",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Order", orderSchema)
