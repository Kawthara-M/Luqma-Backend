const mongoose = require("mongoose")
const Deliveryman = require("../models/Deliveryman")
require("dotenv").config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error("Connection error:", e.message)
  })

const deliverymenData = [
  {
    name: "Ahmed Ali",
    phone: "+973 12345678",
    email: "ahmed.ali@example.com"
  },
  {
    name: "Mohsen Redha",
    phone: "+973 87654321",
    email: "Mohsen.re@example.com"
  },
  {
    name: "Mohammed Alaa",
    phone: "+973 11223344",
    email: "mohammed.a2@example.com"
  }
]


const seedDeliverymen = async () => {
  try {
    await Deliveryman.insertMany(deliverymenData)
  } catch (err) {
    console.error("Error seeding delivery men:", err)
  } finally {
    mongoose.connection.close()
  }
}

seedDeliverymen()
