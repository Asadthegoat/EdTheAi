import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/fast-eddies-logo.png"
              alt="Fast Eddie's - Burgers & CrazyFrys - EST 1987"
              width={150}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300">
              Burgers & CrazyFrys served fast since 1987. Experience our twin drive-thru system!
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-yellow-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-yellow-500 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Twin Drive-Thru</li>
              <li>Walk-Up Window</li>
              <li>Takeout Service</li>
              <li>Online Delivery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>688 Hespeler Rd</li>
              <li>Cambridge, ON N3H 4R7</li>
              <li>(519) 620-3028</li>
              <li>Open Daily</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Fast Eddie's Restaurant. All rights reserved. EST 1987</p>
        </div>
      </div>
    </footer>
  )
}
