const mongoose = require('mongoose')
const Deliveryman = require('../models/Deliveryman')
require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    seedDeliverymen()
  })
  .catch((e) => {
    console.error('MongoDB connection error:', e.message)
  })

const deliverymenData = [
  {
    name: 'Ahmed Ali',
    phone: '+973 12345678',
    email: 'ahmed.ali@example.com'
  },
  {
    name: 'Mohammed Jasem',
    phone: '+973 87654321',
    email: 'mohammed@example.com'
  },
  {
    name: 'Khalid Hassan',
    phone: '+973 11223344',
    email: 'khalid.hassan@example.com'
  }
]

const seedDeliverymen = async () => {
  try {
    await Deliveryman.insertMany(deliverymenData)
    console.log('Deliverymen seeded successfully!')
    mongoose.connection.close()
  } catch (err) {
    console.error('Error seeding deliverymen:', err)
  }
}
