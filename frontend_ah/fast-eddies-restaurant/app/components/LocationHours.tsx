import { MapPin, Clock, Phone, Car, Truck, ExternalLink } from "lucide-react"

export default function LocationHours() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit <span className="text-red-600">Fast Eddie's</span>
          </h2>
          <p className="text-xl text-gray-600">Experience our twin drive-thru system in Cambridge, Ontario</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Cambridge Location</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="font-semibold">688 Hespeler Rd</p>
                  <p className="text-gray-600">Cambridge, ON N3H 4R7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <p className="font-semibold">(519) 620-3028</p>
              </div>
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5 text-red-600" />
                <p className="text-gray-600">Twin Drive-Thru Available</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Hours of Operation</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Thursday</span>
                <span className="text-gray-600">9:00 AM - 12:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Friday - Saturday</span>
                <span className="text-gray-600">9:00 AM - 1:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span className="text-gray-600">9:00 AM - 11:30 PM</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">Open Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Online Ordering */}
          <div className="bg-gradient-to-br from-red-500 to-yellow-500 text-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">How to Order</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5" />
                <p>Twin Drive-Thru</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <p>Walk-Up Window</p>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5" />
                <p>Takeout Service</p>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold mb-3">Online Delivery:</p>
                <div className="space-y-2">
                  <a
                    href="https://www.skipthedishes.com/fast-eddies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <span>SkipTheDishes</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.ubereats.com/ca/store/fast-eddies-cambridge/Nk1HyIaQSWSffAEPw4tYAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <span>Uber Eats</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.doordash.com/en-CA/store/fast-eddie's-cambridge-278812/1104806/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <span>DoorDash</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
