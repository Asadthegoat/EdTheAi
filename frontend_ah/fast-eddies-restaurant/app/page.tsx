import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedMenu from "./components/FeaturedMenu"
import About from "./components/About"
import LocationHours from "./components/LocationHours"
import Footer from "./components/Footer"
import ChatWidget from "./components/ChatWidget"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedMenu />
      <About />
      <LocationHours />
      <Footer />
      <ChatWidget />
    </div>
  )
}
