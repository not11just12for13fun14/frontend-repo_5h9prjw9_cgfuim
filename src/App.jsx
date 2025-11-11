import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'
import ParallaxStars from './components/ParallaxStars'

export default function App(){
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <BackgroundFX />
      <ParallaxStars />
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
