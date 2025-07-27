import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              About <span className="text-red-600">Fast Eddie's</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              On September 27, 1987, Fast Eddie's was co-founded by Ted and Mike Gorski in Brantford, Ontario. What
              started as a father and son partnership has grown into a beloved Canadian burger chain, but we've never
              forgotten our roots.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that fast food doesn't have to mean compromising on quality. Our philosophy of high quality,
              fast service and everyday low prices still exists as the cornerstone of our commitment to "Ultimate
              Customer Value". Every burger is made with 100% Canadian beef, every CrazyFry is seasoned to perfection,
              and every WildShake is crafted with care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fast Eddie's offers "Fast Service" through our distinctive twin drive-thru system - two order stations,
              two separate drive-thru lanes, and two serving windows. This allows us to serve customers very quickly,
              often in 40 seconds or less!
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">37+</div>
                <div className="text-gray-600">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">Twin</div>
                <div className="text-gray-600">Drive-Thru System</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">40s</div>
                <div className="text-gray-600">Service Time</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl p-8 shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Fast Eddie's twin drive-thru system and kitchen"
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
