"use client"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import FullMenuContent from "./FullMenuContent"

// Parse menu data and extract meaningful titles and descriptions from full_text
const parseMenuItem = (item: any) => {
  const fullText = item.full_text || ""
  const priceMatch = fullText.match(/\$[\d.]+/)
  const price = priceMatch ? priceMatch[0] : item.price

  // Extract title from full_text (usually the first meaningful part)
  let title = ""
  let description = ""

  if (fullText.includes("Double Bacon Cheeseburger")) {
    title = "Double Bacon Cheeseburger"
    description = "2 100% Canadian beef patties with ketchup, mustard, pickles, fried onions and cheddar cheese"
  } else if (fullText.includes("Bacon Crazy Fries")) {
    title = "Bacon CrazyFrys"
    description = "Cheese, chili, and bacon loaded fries - our signature side"
  } else if (fullText.includes("Double Cheese Burger meal")) {
    title = "Double Cheeseburger Meal"
    description = "100% Canadian beef double patty with cheese, served with fries and drink"
  } else if (fullText.includes("Classic Crazy Fries")) {
    title = "Classic CrazyFrys"
    description = "Perfectly seasoned fries with cheese and chili"
  } else if (fullText.includes("Party-Sized Classic Crazy Fries")) {
    title = "Party-Sized CrazyFrys"
    description = "Our famous CrazyFrys in a party size perfect for sharing"
  } else if (fullText.includes("Strawberry Shortcake Milkshake")) {
    title = "Strawberry Shortcake WildShake"
    description = "Rich and creamy strawberry shortcake flavored milkshake"
  } else if (fullText.includes("Chicken Works Burger")) {
    title = "Chicken Works Burger"
    description = "Breaded white breast chicken with mayo and lettuce"
  } else if (fullText.includes("Cheeseburger")) {
    title = "Classic Cheeseburger"
    description = "Juicy 100% Canadian beef patty with ketchup, mustard, pickles and cheese"
  } else if (fullText.includes("Chuck Steak Cheeseburger")) {
    title = "Chuck Steak Cheeseburger (6oz)"
    description = "100% Canadian beef freshly ground 6oz chuck steak burger"
  } else if (fullText.includes("Strawberry Milkshake")) {
    title = "Strawberry WildShake"
    description = "Classic strawberry milkshake made with real ice cream"
  } else if (fullText.includes("Banana Cream Pie Milkshake")) {
    title = "Banana Cream Pie WildShake"
    description = "Creamy banana cream pie flavored milkshake"
  } else if (fullText.includes("Chocolate Monkey")) {
    title = "Chocolate Monkey WildShake"
    description = "Chocolate blended with real banana, topped with whipped cream"
  }

  return { title, description, price }
}

// Select featured items from the menu data
const rawMenuData = [
  {
    price: "$12.49",
    image_url:
      "https://tb-static.uber.com/prod/image-proc/processed_images/9a7008c45b105ce49e264edba7a06438/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    full_text:
      "#1 most likedPlus smallDouble Bacon Cheeseburger(Canadian Beef)$12.49•Thumb up outline71% (434)Buy 1, Get 1 Free",
  },
  {
    price: "$11.99",
    image_url:
      "https://tb-static.uber.com/prod/image-proc/processed_images/5a8d1848c630efc9a9a2c57f8e44f1be/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    full_text: "#2 most likedPlus smallBacon Crazy Fries$11.99•Thumb up outline75% (260)Buy 1, Get 1 Free",
  },
  {
    price: "$16.99",
    image_url:
      "https://tb-static.uber.com/prod/image-proc/processed_images/10e1bcaf23310acfb9da40b9d130e5c4/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
    full_text:
      "#3 most likedPlus smallDouble Cheese Burger meal.(Canadian Beef)$16.99•Thumb up outline71% (270)Buy 1, Get 1 Free",
  },
  {
    price: "$7.89",
    image_url:
      "https://tb-static.uber.com/prod/image-proc/processed_images/824fc86b6fe143aba043656396081fa2/b4facf495c22df52f3ca635379ebe613.jpeg",
    full_text: "Plus smallClassic Crazy Fries$7.89•Thumb up outline81% (341)",
  },
  {
    price: "$7.99",
    image_url:
      "https://tb-static.uber.com/prod/image-proc/processed_images/3047332eb9afee3fd012910e2c0b4bf5/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    full_text: "Plus smallStrawberry Shortcake Milkshake$7.99•Thumb up outline93% (65)",
  },
  {
    price: "$14.49",
    image_url:
      "https://tb-static.uber.com/prod/image-proc/processed_images/59ff99bc9b92de612eaa6a348d9a1c6c/a19bb09692310dfd41e49a96c424b3a6.jpeg",
    full_text:
      "Plus small100% Fresh Chuck Steak Cheeseburger(Canadian Beef)Combo (6oz)$14.49•Thumb up outline82% (116)",
  },
]

const menuItems = rawMenuData.map((item, index) => {
  const parsed = parseMenuItem(item)
  return {
    id: index + 1,
    name: parsed.title,
    description: parsed.description,
    price: parsed.price,
    image: item.image_url,
    badge: item.full_text.includes("#1 most liked")
      ? "#1 Most Liked"
      : item.full_text.includes("#2 most liked")
        ? "#2 Most Liked"
        : item.full_text.includes("#3 most liked")
          ? "#3 Most Liked"
          : item.full_text.includes("Buy 1, Get 1 Free")
            ? "BOGO"
            : null,
  }
})

const FeaturedMenu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false)

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-600">Most Popular</span> Items
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our customer favorites, made fresh daily with 100% Canadian beef and our signature CrazyFrys
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {item.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-white font-bold text-sm ${
                      item.badge.includes("Most Liked")
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                        : item.badge === "BOGO"
                          ? "bg-green-600"
                          : "bg-red-600"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              )}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg?height=300&width=300"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowFullMenu(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
          >
            View Full Menu
          </button>
        </div>
      </div>

      {/* Full Menu Modal */}
      {showFullMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto w-full">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Full Menu</h2>
              <button onClick={() => setShowFullMenu(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <FullMenuContent />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FeaturedMenu
