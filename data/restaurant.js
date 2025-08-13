const mongoose = require('mongoose')
const Restaurant = require('../models/Restaurant')
require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error:', e.message)
  })

const restaurantData = [
  {
    name: "Jasmi's",
    cuisineType: 'Fast-food',
    phone: '+973 17179000',
    address: '2450 Muharraq',
    email: 'jasmis@gmail.com',
    image:
      'https://cdn.prod.website-files.com/63a327f073bbfd0ed01684d8/63a327f073bbfd4246168ad3_239999.svg'
  },
  {
    name: "Coco's",
    cuisineType: 'International',
    phone: '+973 17712288',
    address: '3389 Adliya',
    email: 'cocos@gmail.com',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/6f/cf/b7/photo8jpg.jpg?w=1400&h=-1&s=1'
  },
  {
    name: "McDonald's",
    cuisineType: 'Fast-food',
    phone: '+973 1234 5678',
    address: 'Multiple branches across Bahrain',
    email: 'contact@mcdonalds.bh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/McDonald%27s_square_2020.svg/960px-McDonald%27s_square_2020.svg.png'
  },
  {
    name: "Hardee's",
    cuisineType: 'Fast-food',
    phone: '+973 2345 6789',
    address: 'Multiple branches across Bahrain',
    email: 'info@hardees.bh',
    image: 'https://1000logos.net/wp-content/uploads/2023/10/Hardees-Logo.jpg'
  },
  {
    name: "Papa John's",
    cuisineType: 'Italian',
    phone: '+973 3456 7890',
    address: 'Multiple branches across Bahrain',
    email: 'support@papajohns.bh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f0/Papa_John%27s_Logo_2019.svg'
  },
  {
    name: 'KFC',
    cuisineType: 'Fast-food',
    phone: '+973 4567 8901',
    address: 'Multiple branches across Bahrain',
    email: 'contact@kfc.bh',
    image: 'https://m.media-amazon.com/images/I/61sDhtXeCgL._AC_SL1000_.jpg'
  },
  {
    name: 'Pizza Hut',
    cuisineType: 'Italian',
    phone: '+973 5678 9012',
    address: 'Multiple branches across Bahrain',
    email: 'support@pizzahut.bh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/06/Pizza_hut_logo_international.svg'
  },
  {
    name: 'Burger King',
    cuisineType: 'Fast-food',
    phone: '+973 6789 0123',
    address: 'Multiple branches across Bahrain',
    email: 'info@burgerking.bh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg'
  },
  {
    name: "Domino's Pizza",
    cuisineType: 'Italian',
    phone: '+973 7890 1234',
    address: 'Multiple branches across Bahrain',
    email: 'contact@dominos.bh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/500px-Dominos_pizza_logo.svg.png'
  },
  {
    name: 'Subway',
    cuisineType: 'Fast-food',
    phone: '+973 8901 2345',
    address: 'Multiple branches across Bahrain',
    email: 'support@subway.bh',
    image: 'https://logos-world.net/wp-content/uploads/2023/01/Subway-Logo.png'
  },
  {
    name: 'Texas Chicken',
    cuisineType: 'Fast-food',
    phone: '+973 9012 3456',
    address: 'Multiple branches across Bahrain',
    email: 'contact@texaschicken.bh',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/ea/Texas_Chicken_logo.png'
  }
]

// Seed function
const seedRestaurants = async () => {
  await Restaurant.insertMany(restaurantData)
  mongoose.connection.close()
}

seedRestaurants()
