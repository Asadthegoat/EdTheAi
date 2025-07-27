"use client"

import { useState } from "react"
import Image from "next/image"

// Complete menu data parsed from the JSON file
const fullMenuData = [
  // Burgers
  {
    id: 1,
    name: "Double Bacon Cheeseburger",
    description: "2 100% Canadian beef patties with ketchup, mustard, pickles, fried onions and cheddar cheese",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/9a7008c45b105ce49e264edba7a06438/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    description: "Juicy 100% Canadian beef patty with ketchup, mustard, pickles and cheese",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/80617f28b3093bce63cdd2d2ab980bad/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "Burgers",
  },
  {
    id: 3,
    name: "Double Cheeseburger Meal",
    description: "100% Canadian beef double patty with cheese, served with fries and drink",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/10e1bcaf23310acfb9da40b9d130e5c4/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Combos",
  },
  {
    id: 4,
    name: "Chuck Steak Cheeseburger (6oz)",
    description: "100% Canadian beef freshly ground 6oz chuck steak burger",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/59ff99bc9b92de612eaa6a348d9a1c6c/a19bb09692310dfd41e49a96c424b3a6.jpeg",
    category: "Burgers",
  },
  {
    id: 5,
    name: "Chuck Steak Cheeseburger Combo (6oz)",
    description: "100% Canadian beef freshly ground 6oz chuck steak burger served with fries and drink",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/59ff99bc9b92de612eaa6a348d9a1c6c/a19bb09692310dfd41e49a96c424b3a6.jpeg",
    category: "Combos",
  },
  {
    id: 6,
    name: "Double Burger Works Combo",
    description: "100% Canadian beef double works burger served with medium fries and medium drink",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/170b0a547dcffc812b063e8ac912edb2/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "Combos",
  },
  {
    id: 7,
    name: "Double Bacon Cheese Slider Combo",
    description: "100% Canadian beef double bacon cheese slider served with your choice of side",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/170b0a547dcffc812b063e8ac912edb2/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "Combos",
  },
  {
    id: 8,
    name: "Hamburger",
    description: "Juicy fresh meat patty with ketchup, mustard and pickles",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/20e958f3a131f28d0ba2f6495ff62235/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Burgers",
  },
  {
    id: 9,
    name: "Garden Veggie Burger Combo",
    description:
      "82% less fat healthy choice with ketchup, Max Sauce, red onions, lettuce, tomatoes! Served with fries and drink",
    image: "/placeholder.svg?height=300&width=300",
    category: "Combos",
  },

  // Chicken
  {
    id: 10,
    name: "Chicken Works Burger",
    description: "Breaded white breast chicken with mayo and lettuce",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/1be0ff1efc24ef0632c9cfd001f9be5b/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "Chicken",
  },
  {
    id: 11,
    name: "Chicken Works Burger Combo",
    description: "Crispy white breaded breast chicken burger served with fries and drink",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/aaacdc89477ad8f8f4c3267882873624/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "Combos",
  },
  {
    id: 12,
    name: "Chicken Wing Burger Combo",
    description:
      "Crispy white breast chicken with mayo and lettuce dipped in Frank's RedHot sauce served with fries and drink",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/086e4a8599069d14deb44b71b368de49/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "Combos",
  },
  {
    id: 13,
    name: "Chicken N Eddie Combo",
    description: "Crispy breaded white chicken breast with Eddie's sauce served with fries and drink",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/6ad2ef389060a56f0a498e1a29f79c43/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Combos",
  },
  {
    id: 14,
    name: "Chicken Club Combo",
    description: "Crispy breaded white breast chicken burger with bacon, lettuce, and tomato, served with fries",
    image: "/placeholder.svg?height=300&width=300",
    category: "Combos",
  },

  // CrazyFrys & Sides
  {
    id: 15,
    name: "Bacon CrazyFrys",
    description: "Cheese, chili, and bacon loaded fries - our signature side",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/5a8d1848c630efc9a9a2c57f8e44f1be/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "CrazyFrys",
  },
  {
    id: 16,
    name: "Classic CrazyFrys",
    description: "Perfectly seasoned fries with cheese and chili",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/824fc86b6fe143aba043656396081fa2/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "CrazyFrys",
  },
  {
    id: 17,
    name: "Party-Sized Classic CrazyFrys",
    description: "Our famous CrazyFrys in a party size perfect for sharing",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/2b2a7de108212fbc2cec3850389343b8/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "CrazyFrys",
  },
  {
    id: 18,
    name: "Pickle Fries",
    description: "Freshly cooked fries with pickle powder",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/489e2df73c1044d3240ae4e4abd3d633/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "CrazyFrys",
  },
  {
    id: 19,
    name: "Beefy Fries (Gravy)",
    description: "Fries topped with savory beef gravy",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/824fc86b6fe143aba043656396081fa2/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "CrazyFrys",
  },
  {
    id: 20,
    name: "Bacon Cheese Taters",
    description: "Crispy golden taters with bacon and melted cheese",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/c25bc20858a5c99aa00f57162ab79189/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Sides",
  },
  {
    id: 21,
    name: "Cheese Taters",
    description: "Golden taters doused in melted cheese",
    image: "/placeholder.svg?height=300&width=300",
    category: "Sides",
  },

  // WildShakes & Drinks
  {
    id: 22,
    name: "Strawberry Shortcake WildShake",
    description: "Rich and creamy strawberry shortcake flavored milkshake",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/3047332eb9afee3fd012910e2c0b4bf5/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "WildShakes",
  },
  {
    id: 23,
    name: "Chocolate Monkey WildShake",
    description: "Chocolate blended with real banana, topped with whipped cream - best in town!",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/e6c21d4f00df4e3d34ede634e7d29cc9/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    category: "WildShakes",
  },
  {
    id: 24,
    name: "Strawberry WildShake",
    description: "Classic strawberry milkshake made with real ice cream",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/15c84374987e1492e278c4507ac6fc23/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "WildShakes",
  },
  {
    id: 25,
    name: "Chocolate WildShake",
    description: "Rich and creamy chocolate milkshake",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/1773e7440457a0db2cc55feb4d6e867a/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "WildShakes",
  },
  {
    id: 26,
    name: "Banana WildShake",
    description: "Creamy banana milkshake made with real bananas",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/50dfb7e54fa558a44efeafc005be46aa/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "WildShakes",
  },
  {
    id: 27,
    name: "Banana Cream Pie WildShake",
    description: "Creamy banana cream pie flavored milkshake",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/0f9932c10217b6aa8756ca2b6a34f0f9/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "WildShakes",
  },
  {
    id: 28,
    name: "Skor WildShake",
    description: "Rich chocolate and toffee Skor candy milkshake",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/99ec915bbbab755f31750c1ef3ada5a3/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "WildShakes",
  },
  {
    id: 29,
    name: "Blue Lagoon",
    description: "A refreshing, sweet, and fruity drink, ideal for cooling down on a hot summer day",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/2be150d08bc5f0c0bb560e5bc4750083/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Drinks",
  },
  {
    id: 30,
    name: "Strawberry Lemonade",
    description: "A zesty, refreshing mix of strawberries and lemon, perfect for quenching your summer thirst",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/e7725122e7dc6431cf482235a6839e76/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Drinks",
  },

  // Family Packs & Specials
  {
    id: 31,
    name: "Ten Cheeseburgers",
    description: "Ten 100% Canadian beef cheeseburgers with ketchup, mustard, pickles and cheddar cheese",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/dc28164e8e829be6aa68a98ac1510b44/70aa2a4db7f990373ca9c376323e3dea.jpeg",
    category: "Family Packs",
  },
  {
    id: 32,
    name: "Ten Hamburgers",
    description: "Ten juicy 100% Canadian beef hamburgers with ketchup, mustard and pickles",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/22b37a68b017b6830867884b22eeffdc/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "Family Packs",
  },
  {
    id: 33,
    name: "2 Can Dine For Special",
    description:
      "Enjoy 2 Double Cheese 100% Canadian beef or 2 Chicken Eddie Combos - includes 2 burgers, 2 medium fries and 2 beverages",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/7968978a94e7990ec30a774b4e08d275/b4facf495c22df52f3ca635379ebe613.jpeg",
    category: "Combos",
  },
  {
    id: 34,
    name: "Wild & Crazy Combo",
    description: "Our signature Chocolate Monkey shake along with Classic CrazyFrys (cheese and chili)",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/03ebc4c759d3e2b77c3b3caf647a1e92/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Combos",
  },
  {
    id: 35,
    name: "Steak & Shake Combo",
    description: "100% Canadian beef 6oz chuck steak cheeseburger paired with a refreshing strawberry shake",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/6070fb01889ab460de5db0a74533d805/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    category: "Combos",
  },
  {
    id: 36,
    name: "Walking Taco Special",
    description:
      "Doritos Nacho cheese flavored tortilla chips with sour cream, melted cheddar cheese, chili, lettuce, fresh tomato, red onions with refreshing Mountain Dew",
    image: "/placeholder.svg?height=300&width=300",
    category: "Specials",
  },
]

const categories = [
  "All",
  "Burgers",
  "Chicken",
  "Combos",
  "CrazyFrys",
  "Sides",
  "WildShakes",
  "Drinks",
  "Family Packs",
  "Specials",
]

export default function FullMenuContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems =
    selectedCategory === "All" ? fullMenuData : fullMenuData.filter((item) => item.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image
                src={item.image || "/placeholder.svg?height=300&width=300"}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items found in this category.</p>
        </div>
      )}
    </div>
  )
}
