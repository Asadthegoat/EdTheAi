"use client"

import { useState } from "react"
import { Menu, X, Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>688 Hespeler Rd, Cambridge, ON</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Open 9AM - 12:30AM Daily</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(519) 620-3028</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/fast-eddies-logo.png"
              alt="Fast Eddie's - Burgers & CrazyFrys - EST 1987"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Home
            </a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-semibold">
                Home
              </a>
              <a href="#menu" className="text-gray-700 hover:text-red-600 font-semibold">
                Menu
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-semibold">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-semibold">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
