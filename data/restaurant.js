const mongoose = require("mongoose")
const  Restaurant  = require("../models/Restaurant")
require("dotenv").config()

mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error("Connection error:", e.message)
  })

const restaurantData = [
  {
    name: "Jasmi's",
    cuisineType: "Fast-food",
    phone: "+973 17179000",
    address: "2450 Muharraq",
    email: "jasmis@gmail.com",
    image:"https://cdn.prod.website-files.com/63a327f073bbfd0ed01684d8/63a327f073bbfd4246168ad3_239999.svg"
  },
  {
    name: "Coco's",
    cuisineType: "International",
    phone: "+973 17712288",
    address: "3389 Adliya",
    email: "cocos@gmail.com",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/6f/cf/b7/photo8jpg.jpg?w=1400&h=-1&s=1"
  },
  {
  name: "McDonald's",
  cuisineType: "Fast-Food",
  phone: "+973 1234 5678",
  address: "Multiple branches across Bahrain",
  email: "contact@mcdonalds.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mcdonalds_logo.svg"
},
{
  name: "Hardee's",
  cuisineType: "Fast-Food",
  phone: "+973 2345 6789",
  address: "Multiple branches across Bahrain",
  email: "info@hardees.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Hardee%27s_logo.svg"
},
{
  name: "Papa John's",
  cuisineType: "Italian",
  phone: "+973 3456 7890",
  address: "Multiple branches across Bahrain",
  email: "support@papajohns.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Papa_John%27s_logo.svg"
},
{
  name: "KFC",
  cuisineType: "Fast-Food",
  phone: "+973 4567 8901",
  address: "Multiple branches across Bahrain",
  email: "contact@kfc.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KFC_logo.svg"
},
{
  name: "Pizza Hut",
  cuisineType: "Italian",
  phone: "+973 5678 9012",
  address: "Multiple branches across Bahrain",
  email: "support@pizzahut.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Pizza_Hut_logo.svg"
},
{
  name: "Burger King",
  cuisineType: "Fast Food",
  phone: "+973 6789 0123",
  address: "Multiple branches across Bahrain",
  email: "info@burgerking.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg"
},
{
  name: "Domino's Pizza",
  cuisineType: "Italian",
  phone: "+973 7890 1234",
  address: "Multiple branches across Bahrain",
  email: "contact@dominos.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Domino%27s_logo.svg"
},
{
  name: "Subway",
  cuisineType: "Fast-Food",
  phone: "+973 8901 2345",
  address: "Multiple branches across Bahrain",
  email: "support@subway.bh",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Subway_2016_logo.svg"
},
{
  name: "Texas Chicken",
  cuisineType: "Fast-Food",
  phone: "+973 9012 3456",
  address: "Multiple branches across Bahrain",
  email: "contact@texaschicken.bh",
  image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Texas_Chicken_logo.svg"
}
]

// Seed function
const seedRestaurants = async () => {
  await Restaurant.insertMany(restaurantData)
  console.log("New restaurants created!")

  mongoose.connection.close()
}

seedRestaurants()
