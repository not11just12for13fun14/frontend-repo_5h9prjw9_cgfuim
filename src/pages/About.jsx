import { motion } from 'framer-motion'

export default function About(){
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>About Us</motion.h1>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <p className="text-zinc-300 leading-relaxed">Zero-Carbon was founded with a singular mission: make the internet’s most demanding experiences sustainable by design. Our team combines deep video engineering, applied AI, cloud orchestration, and climate science to deliver carbon-neutral streaming and cloud services.</p>
          <p className="text-zinc-300 leading-relaxed">Headquartered at Rudolfplatz 7, 50674 Köln, Germany, we operate globally with a remote-first culture and hubs across Europe and North America.</p>
        </div>
      </section>
    </main>
  )
}
