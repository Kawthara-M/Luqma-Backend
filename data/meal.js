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
    name: "Big J",
    description: "Juicy beef burger with cheddar cheese",
    price: 2.5,
    restaurant: jasmiId,
    image: "https://images.deliveryhero.io/image/talabat/MenuItems/C981226D9B2D3D7DF39B991FB76017FB"
  },
  {
    name: "Chikee Chicken",
    description: "Crispy chicken burger",
    price: 1.8,
    restaurant: jasmiId,
    image: "https://images.deliveryhero.io/image/talabat/MenuItems/8A1B22C09081468C3CAC57C02ED248DF"
  },
  {
    name: "Spaghetti Bolognese",
    description: "Pasta with slow-cooked meat sauce",
    price: 4.2,
    restaurant: cocoId,
    image: "https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/ab01e9b1da656f35dd1a721c810162a0/Spaghetti_bolognese_4x3_V2_LOW_RES.jpg?w=2000&h=2000&fm=webp&fit=thumb&q=100"
  },
  {
    name: "Chicken Caesar Salad",
    description: "Grilled chicken over romaine lettuce with Caesar dressing",
    price: 3.5,
    restaurant: cocoId,
    image: "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg"
  },
  {
    name: "Big Mac",
    description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
    price: 5.99,
    restaurant: mcdonaldsId,
    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-Big-Mac-Meal-bh-1223:nutrition-calculator-tile?wid=822&hei=822&dpr=off"
  },
  {
    name: "McChicken Sandwich",
    description: "Crispy chicken breast with mayo and lettuce on a toasted bun.",
    price: 4.49,
    restaurant: mcdonaldsId,
    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-McChicken-Meal-bh-1223:nutrition-calculator-tile?wid=822&hei=822&dpr=off"
  },
  {
    name: "Fries (Medium)",
    description: "Golden and crispy french fries, perfect for any meal.",
    price: 2.29,
    restaurant: mcdonaldsId,
    image: "https://t4.ftcdn.net/jpg/03/09/21/25/360_F_309212592_ZWPunXyS4q7dRzl1uJZatrUH9fsQgJ26.jpg"
  },
  {
    name: "McFlurry Oreo",
    description: "Creamy vanilla soft serve with Oreo cookie pieces.",
    price: 3.99,
    restaurant: mcdonaldsId,
    image: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-Oreo-McFlurry-bh-1223:nutrition-calculator-tile?wid=822&hei=822&dpr=off"
  },
  {
    name: "Chicken Nuggets (6 pcs)",
    description: "Crispy fried chicken nuggets served with your choice of dipping sauce.",
    price: 4.99,
    restaurant: mcdonaldsId,
    image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/6pcsmcnuggetsmeal:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"
  },

  // Hardee's
  {
    name: "Famous Star with Cheese",
    description: "1/3 lb. charbroiled beef patty with cheese, lettuce, tomato, pickles, onions, and mayo.",
    price: 6.49,
    restaurant: hardeesId,
    image: "https://olo-images-live.imgix.net/b4/b4416adecf454d25afbccf0b4c3f3edb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=459&h=291&fit=crop&fm=png32&s=f33664ac58d60320c581d4a726375bbb"
  },
  {
    name: "Hand-Breaded Chicken Tenders (4 pcs)",
    description: "Crispy chicken tenders with your choice of dipping sauce.",
    price: 5.99,
    restaurant: hardeesId,
    image: "https://olo-images-live.imgix.net/84/84401c450c7649879c6edcc58a68405e.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=459&h=291&fit=crop&fm=png32&s=e7c2ed8209b1a8a7c770a587e716b422"
  },
  {
    name: "Fries",
    description: "Golden crispy fries, perfect as a side.",
    price: 2.19,
    restaurant: hardeesId,
    image: "https://fastfoodnutrition.org/item-photos/full/1033_s.jpg"
  },
  {
    name: "Breakfast Biscuit",
    description: "Flaky biscuit with egg, cheese, and your choice of sausage or bacon.",
    price: 3.99,
    restaurant: hardeesId,
    image: "https://olo-images-live.imgix.net/33/33419a4d25854d3f8766b7676925442a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=459&h=291&fit=crop&fm=png32&s=e504fdcb3f01a9807505e428810fef0d"
  },
  {
    name: "Super Star Burger",
    description: "Double charbroiled beef patties with cheese, lettuce, tomato, pickles, onions, and mayo.",
    price: 7.49,
    restaurant: hardeesId,
    image: "https://www.hardees.kz/admin/files/medium/medium_5220.png"
  },

  // Papa John's
  {
    name: "Pepperoni Pizza (Medium)",
    description: "Classic pizza topped with mozzarella cheese and pepperoni slices.",
    price: 8.99,
    restaurant: papajohnsId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcO48LCqj2sAHlNkEQEug2NudZ8KNBbB8qA&s"
  },
  {
    name: "Cheese Pizza (Medium)",
    description: "Traditional pizza topped with mozzarella and tomato sauce.",
    price: 7.99,
    restaurant: papajohnsId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUVd_zb6eu0x7TuJNxPXvj2aURmI3TfjgYw&s"
  },
  {
    name: "BBQ Chicken Pizza",
    description: "Pizza topped with BBQ sauce, grilled chicken, onions, and cheese.",
    price: 9.49,
    restaurant: papajohnsId,
    image: "https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/papa-johns-pizza-bahrain/products/462820-Untitled-1-191245.png"
  },
  {
    name: "Garlic Knots",
    description: "Fresh-baked dough knots brushed with garlic butter.",
    price: 4.49,
    restaurant: papajohnsId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGHDI9c203y2lWR7MsRDPrA2rPxcGmP_9zA&s"
  },
  {
    name: "Chicken Wings (8 pcs)",
    description: "Oven-baked chicken wings served with BBQ or buffalo sauce.",
    price: 6.99,
    restaurant: papajohnsId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjUL0VUTNgMzmgKLr0isGs8bGGTxDonJcFg&s"
  },

  // KFC
  {
    name: "Zinger Burger",
    description: "Spicy crispy chicken fillet with lettuce and mayo in a toasted bun.",
    price: 4.99,
    restaurant: kfcId,
    image: "https://brand-uk.assets.kfc.co.uk/2024-10/KFC4507~44122_W5_24_ZINGER_BURGER_MEAL_1200x800.jpg?VersionId=bPok7RU0zptQKcy33Vb45jfDYJC2Nizv"
  },
  {
    name: "Twister Wrap",
    description: "Crispy chicken strips, lettuce, tomato, and sauce wrapped in a tortilla.",
    price: 5.49,
    restaurant: kfcId,
    image: "https://www.laxshopdine.com/wp-content/uploads/2019/05/Twister.jpg"
  },
  {
    name: "8-Piece Bucket",
    description: "8 pieces of original recipe fried chicken.",
    price: 14.99,
    restaurant: kfcId,
    image: "https://images.ctfassets.net/0p42pznmbeec/7yPRIZ363g3hTCNwPUgW7f/541d612e1f72c8cc0d881cc51e084809/21Pc_Bucket_21Pc_1200x900.jpg"
  },
  {
    name: "Popcorn Chicken",
    description: "Bite-sized crispy chicken pieces, perfect for snacking.",
    price: 3.99,
    restaurant: kfcId,
    image: "https://brand-uk.assets.kfc.co.uk/2022-11/MOBORDER_LARGE_POPCORN_CHICKEN_1200x800%20%282%29.jpg?VersionId=3ZybNc8OG7a646S_h8unAKsTPfKP5MIM"
  },
  {
    name: "Fries (Large)",
    description: "Crispy golden fries seasoned with KFC's signature spices.",
    price: 2.99,
    restaurant: kfcId,
    image: "https://thumbs.dreamstime.com/b/lots-kfc-french-fries-bucket-kentucky-fried-chicken-fast-food-moscow-russia-july-isolated-white-background-192188138.jpg"
  },

  // Burger King
  {
    name: "Whopper",
    description: "Flame-grilled beef patty with lettuce, tomato, pickles, onions, ketchup, and mayo.",
    price: 6.29,
    restaurant: burgerkingId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBLg_MuQ2lEsX9QFeUQ-unpRBGCKRt-1xKD9nnV5DR87vOSMB1khN4-qG6b6B-ixwHnI&usqp=CAU"
  },
  {
    name: "Chicken Royale",
    description: "Long sesame seed bun with crispy chicken fillet, lettuce, and mayo.",
    price: 5.49,
    restaurant: burgerkingId,
    image: "https://burgerking.com.cy/sites/default/files/Chicken%20Royale-01_2.png"
  },
  {
    name: "Mozzarella Sticks",
    description: "Crispy breaded mozzarella cheese sticks served with marinara sauce.",
    price: 3.99,
    restaurant: burgerkingId,
    image: "https://www.burgerking.ee/images/optimized/products/mozzarella-sticks-desktop-45e6d44db0db1c7ba5f50a9888a76608.png"
  },
  {
    name: "Fries (Medium)",
    description: "Classic golden fries with a crispy outside and fluffy inside.",
    price: 2.49,
    restaurant: burgerkingId,
    image: "https://burgerking.com.cy/sites/default/files/Fries-01_0.png"
  },
  {
    name: "Double Cheeseburger",
    description: "Two flame-grilled beef patties with cheese, pickles, ketchup, and mustard.",
    price: 4.99,
    restaurant: burgerkingId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbwqLy7PoAtGaMApcp4W7--z0TrnpNl76Uw&s"
  },
  // Domino's
  {
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella cheese, and fresh basil.",
    price: 7.99,
    restaurant: dominosId,
    image: "https://www.dominos.co.in//files/items/Margherit.jpg"
  },
  {
    name: "Meat Lovers Pizza",
    description: "Pepperoni, sausage, ham, beef, and bacon.",
    price: 10.99,
    restaurant: dominosId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRWBZYvtQV-7LXBjFqjmPmvcASBUNzBz9vA&s"
  },
  {
    name: "Veggie Pizza",
    description: "Onions, green peppers, mushrooms, black olives, and tomatoes.",
    price: 9.49,
    restaurant: dominosId,
    image: "https://www.dominos.co.in/files/items/Farmhouse.jpg"
  },
  {
    name: "Stuffed Cheesy Bread",
    description: "Soft bread stuffed with cheese and garlic seasoning.",
    price: 5.99,
    restaurant: dominosId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFI_SybwqEzC78z-3DK9e-bdltytWnIoRCw&s"
  },
  {
    name: "Chicken Wings (8 pcs)",
    description: "Oven-baked wings with your choice of sauce.",
    price: 7.49,
    restaurant: dominosId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebJ4U6pcZzLzz2CV0cQmXJ_eOQdatQXL3Ug&s"
  },

  // Subway
  {
    name: "Italian B.M.T.",
    description: "Genoa salami, pepperoni, ham, veggies, and cheese.",
    price: 6.99,
    restaurant: subwayId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyZMqge12nUiCmnwaU9eu-GRwB7s6Oc3xZVKL_KP3pe6GVuaarclanP4mxIOxyRmjr_o&usqp=CAU"
  },
  {
    name: "Chicken Teriyaki",
    description: "Chicken strips glazed in teriyaki sauce with fresh veggies.",
    price: 7.49,
    restaurant: subwayId,
    image: "https://subwayisfresh.com.sg/wp-content/uploads/2022/02/Menuitem-Teriyaki-Chicken-Sub.jpg"
  },
  {
    name: "Tuna Sub",
    description: "Tuna salad with mayo, lettuce, and tomato.",
    price: 6.49,
    restaurant: subwayId,
    image: "https://subwayisfresh.com.sg/wp-content/uploads/2022/01/Menuitem-tuna-sub2.jpg"
  },
  {
    name: "Veggie Delite",
    description: "Fresh vegetables and cheese on freshly baked bread.",
    price: 5.99,
    restaurant: subwayId,
    image: "https://subwayisfresh.com.sg/wp-content/uploads/2022/01/Menuitem-Veggie-Delite.jpg"
  },
  {
    name: "Meatball Marinara",
    description: "Meatballs in marinara sauce topped with cheese.",
    price: 6.99,
    restaurant: subwayId,
    image: "https://i2-prod.belfastlive.co.uk/incoming/article17607453.ece/ALTERNATES/s615/0_image-6.png"
  },

  // Texas Chicken
  {
    name: "Original Chicken (2 pcs)",
    description: "Crispy and juicy fried chicken pieces.",
    price: 5.49,
    restaurant: texasChickenId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRG0Zw6D3CK39CPn-oY8Ui_2tDEeCbM2Sqpg&s"
  },
  {
    name: "Spicy Chicken Sandwich",
    description: "Spicy fried chicken filet with lettuce and mayo.",
    price: 4.99,
    restaurant: texasChickenId,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXStmjik86LmAiY_78SyTBHU0tkHC8kBNVmQ&s"
  },
  {
    name: "Mashed Potatoes with Gravy",
    description: "Creamy mashed potatoes topped with savory gravy.",
    price: 2.49,
    restaurant: texasChickenId,
    image: "https://pimagerepository.texaschicken.com/71c89afb-26e6-4038-a082-090bb13d15a1.png"
  },
  {
    name: "Honey Butter Biscuit",
    description: "Fluffy biscuit glazed with honey butter.",
    price: 1.99,
    restaurant: texasChickenId,
    image: "https://pimagerepository.texaschicken.com/ff052347-d8ba-478f-a346-b816d6c768af_actual.png"
  },
  {
    name: "Chicken Tenders (3 pcs)",
    description: "Golden crispy chicken tenders served with dipping sauce.",
    price: 4.99,
    restaurant: texasChickenId,
    image: "https://pimagerepository.texaschicken.com/779da571-b3c8-45ae-8155-d6ab6bf73885_actual.png"
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
