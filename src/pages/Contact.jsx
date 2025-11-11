import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-5xl font-semibold" style={{fontFamily:'Space Grotesk'}}>Contact</motion.h1>

        <div className="mt-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Info label="General" value="contact@zero-carbon.global" />
            <Info label="Partnerships" value="partnerships@zero-carbon.global" />
            <Info label="Support" value="support@zero-carbon.global" />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <iframe title="map" src="https://www.google.com/maps?q=Rudolfplatz%207,%2050674%20K%C3%B6ln,%20Germany&output=embed" className="w-full h-80 md:h-full"></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

function Info({label, value}){
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
      <div className="text-zinc-400 text-sm">{label}</div>
      <div className="mt-1 text-lg" style={{fontFamily:'Space Grotesk'}}>{value}</div>
    </div>
  )
}
