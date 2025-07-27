import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-yellow-300">Fast Eddie's</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium">Burgers & CrazyFrys Since 1987!</p>
            <p className="text-lg opacity-90">
              Experience our twin drive-thru system serving quality 100% Canadian beef burgers, specialty CrazyFrys, and
              gourmet WildShakes in 40 seconds or less!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Visit Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <Image
                src="/images/fast-eddies-food-spread.jpeg"
                alt="Fast Eddie's signature burgers, CrazyFrys, and WildShakes"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
