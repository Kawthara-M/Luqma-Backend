const mongoose = require("mongoose")
const Meal = require("../models/Meal")
require("dotenv").config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    seedMeals()
  })
  .catch((e) => {
    console.error("MongoDB connection error . . .:", e.message)
  })

const jasmiId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dba9")
const cocoId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbaa")
const mcdonaldsId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbab")
const hardeesId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbac")
const papajohnsId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbad")
const kfcId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbae")
const burgerkingId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbb0")
const dominosId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbb1")
const subwayId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbb2")
const texasChickenId = new mongoose.Types.ObjectId("689b39844c015cccc8f2dbb3")



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
  {
    name: "Big Mac",
    description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
    price: 5.99,
    restaurant: mcdonaldsId,
  },
  {
    name: "McChicken Sandwich",
    description: "Crispy chicken breast with mayo and lettuce on a toasted bun.",
    price: 4.49,
    restaurant: mcdonaldsId,
  },
  {
    name: "Fries (Medium)",
    description: "Golden and crispy french fries, perfect for any meal.",
    price: 2.29,
    restaurant: mcdonaldsId,
  },
  {
    name: "McFlurry Oreo",
    description: "Creamy vanilla soft serve with Oreo cookie pieces.",
    price: 3.99,
    restaurant: mcdonaldsId,
  },
  {
    name: "Chicken Nuggets (6 pcs)",
    description: "Crispy fried chicken nuggets served with your choice of dipping sauce.",
    price: 4.99,
    restaurant: mcdonaldsId,
  },

  // Hardee's
  {
    name: "Famous Star with Cheese",
    description: "1/3 lb. charbroiled beef patty with cheese, lettuce, tomato, pickles, onions, and mayo.",
    price: 6.49,
    restaurant: hardeesId,
  },
  {
    name: "Hand-Breaded Chicken Tenders (4 pcs)",
    description: "Crispy chicken tenders with your choice of dipping sauce.",
    price: 5.99,
    restaurant: hardeesId,
  },
  {
    name: "Fries",
    description: "Golden crispy fries, perfect as a side.",
    price: 2.19,
    restaurant: hardeesId,
  },
  {
    name: "Breakfast Biscuit",
    description: "Flaky biscuit with egg, cheese, and your choice of sausage or bacon.",
    price: 3.99,
    restaurant: hardeesId,
  },
  {
    name: "Super Star Burger",
    description: "Double charbroiled beef patties with cheese, lettuce, tomato, pickles, onions, and mayo.",
    price: 7.49,
    restaurant: hardeesId,
  },

  // Papa John's
  {
    name: "Pepperoni Pizza (Medium)",
    description: "Classic pizza topped with mozzarella cheese and pepperoni slices.",
    price: 8.99,
    restaurant: papajohnsId,
  },
  {
    name: "Cheese Pizza (Medium)",
    description: "Traditional pizza topped with mozzarella and tomato sauce.",
    price: 7.99,
    restaurant: papajohnsId,
  },
  {
    name: "BBQ Chicken Pizza",
    description: "Pizza topped with BBQ sauce, grilled chicken, onions, and cheese.",
    price: 9.49,
    restaurant: papajohnsId,
  },
  {
    name: "Garlic Knots",
    description: "Fresh-baked dough knots brushed with garlic butter.",
    price: 4.49,
    restaurant: papajohnsId,
  },
  {
    name: "Chicken Wings (8 pcs)",
    description: "Oven-baked chicken wings served with BBQ or buffalo sauce.",
    price: 6.99,
    restaurant: papajohnsId,
  },

  // KFC
  {
    name: "Zinger Burger",
    description: "Spicy crispy chicken fillet with lettuce and mayo in a toasted bun.",
    price: 4.99,
    restaurant: kfcId,
  },
  {
    name: "Twister Wrap",
    description: "Crispy chicken strips, lettuce, tomato, and sauce wrapped in a tortilla.",
    price: 5.49,
    restaurant: kfcId,
  },
  {
    name: "8-Piece Bucket",
    description: "8 pieces of original recipe fried chicken.",
    price: 14.99,
    restaurant: kfcId,
  },
  {
    name: "Popcorn Chicken",
    description: "Bite-sized crispy chicken pieces, perfect for snacking.",
    price: 3.99,
    restaurant: kfcId,
  },
  {
    name: "Fries (Large)",
    description: "Crispy golden fries seasoned with KFC's signature spices.",
    price: 2.99,
    restaurant: kfcId,
  },

  // Burger King
  {
    name: "Whopper",
    description: "Flame-grilled beef patty with lettuce, tomato, pickles, onions, ketchup, and mayo.",
    price: 6.29,
    restaurant: burgerkingId,
  },
  {
    name: "Chicken Royale",
    description: "Long sesame seed bun with crispy chicken fillet, lettuce, and mayo.",
    price: 5.49,
    restaurant: burgerkingId,
  },
  {
    name: "Mozzarella Sticks",
    description: "Crispy breaded mozzarella cheese sticks served with marinara sauce.",
    price: 3.99,
    restaurant: burgerkingId,
  },
  {
    name: "Fries (Medium)",
    description: "Classic golden fries with a crispy outside and fluffy inside.",
    price: 2.49,
    restaurant: burgerkingId,
  },
  {
    name: "Double Cheeseburger",
    description: "Two flame-grilled beef patties with cheese, pickles, ketchup, and mustard.",
    price: 4.99,
    restaurant: burgerkingId,
  },
  // Domino's
  {
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella cheese, and fresh basil.",
    price: 7.99,
    restaurant: dominosId,
  },
  {
    name: "Meat Lovers Pizza",
    description: "Pepperoni, sausage, ham, beef, and bacon.",
    price: 10.99,
    restaurant: dominosId,
  },
  {
    name: "Veggie Pizza",
    description: "Onions, green peppers, mushrooms, black olives, and tomatoes.",
    price: 9.49,
    restaurant: dominosId,
  },
  {
    name: "Stuffed Cheesy Bread",
    description: "Soft bread stuffed with cheese and garlic seasoning.",
    price: 5.99,
    restaurant: dominosId,
  },
  {
    name: "Chicken Wings (8 pcs)",
    description: "Oven-baked wings with your choice of sauce.",
    price: 7.49,
    restaurant: dominosId,
  },

  // Subway
  {
    name: "Italian B.M.T.",
    description: "Genoa salami, pepperoni, ham, veggies, and cheese.",
    price: 6.99,
    restaurant: subwayId,
  },
  {
    name: "Chicken Teriyaki",
    description: "Chicken strips glazed in teriyaki sauce with fresh veggies.",
    price: 7.49,
    restaurant: subwayId,
  },
  {
    name: "Tuna Sub",
    description: "Tuna salad with mayo, lettuce, and tomato.",
    price: 6.49,
    restaurant: subwayId,
  },
  {
    name: "Veggie Delite",
    description: "Fresh vegetables and cheese on freshly baked bread.",
    price: 5.99,
    restaurant: subwayId,
  },
  {
    name: "Meatball Marinara",
    description: "Meatballs in marinara sauce topped with cheese.",
    price: 6.99,
    restaurant: subwayId,
  },

  // Texas Chicken
  {
    name: "Original Chicken (2 pcs)",
    description: "Crispy and juicy fried chicken pieces.",
    price: 5.49,
    restaurant: texasChickenId,
  },
  {
    name: "Spicy Chicken Sandwich",
    description: "Spicy fried chicken filet with lettuce and mayo.",
    price: 4.99,
    restaurant: texasChickenId,
  },
  {
    name: "Mashed Potatoes with Gravy",
    description: "Creamy mashed potatoes topped with savory gravy.",
    price: 2.49,
    restaurant: texasChickenId,
  },
  {
    name: "Honey Butter Biscuit",
    description: "Fluffy biscuit glazed with honey butter.",
    price: 1.99,
    restaurant: texasChickenId,
  },
  {
    name: "Chicken Tenders (3 pcs)",
    description: "Golden crispy chicken tenders served with dipping sauce.",
    price: 4.99,
    restaurant: texasChickenId,
  },
]



const seedMeals = async () => {
  try {
    await Meal.insertMany(mealData)
    mongoose.connection.close()
  } catch (err) {
    console.error("Error seeding meals:", err)
  }
}
